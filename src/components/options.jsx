import { useQuiz } from "../context/quiz-context";

export function Options() {
  const { questions, dispatch, answer, index } = useQuiz();

  const question = questions[index];
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, idx) => (
        <button
          className={`btn btn-option ${idx === answer ? "answer" : ""} ${
            hasAnswered
              ? idx === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          } `}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: idx })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
