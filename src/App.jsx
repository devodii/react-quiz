import * as React from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Loader } from "./components/loader";
import { Error } from "./components/error";
import { StartScreen } from "./components/start-screen";
import { Question } from "./components/Question";
import { NextButton } from "./components/next-button";

const initialState = {
  questions: [],

  //? state => loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,

  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "active" };

    case "newAnswer":
      const question = state.questions.at(state.index);
      console.log({ question });
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + 10
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    default:
      throw new Error("unknown action!");
  }
}

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { questions, status, index, answer } = state;

  const numQuestions = questions.length;

  React.useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => {
        dispatch({ type: "dataFailed" });
        console.error({ error });
      });
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen
            numQuestions={numQuestions}
            dispatch={() => dispatch({ type: "start" })}
          />
        )}
        {status === "active" && (
          <>
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Main>
    </div>
  );
}
