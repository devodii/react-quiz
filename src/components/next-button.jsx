import { useQuiz } from "../context/quiz-context";

export function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn btn-ui"
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "finish" })}
        className="btn btn-ui"
      >
        Finish
      </button>
    );
  }
}
