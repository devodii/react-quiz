import { useQuiz } from "../context/quiz-context";

export function FinishedScreen() {
  const { points, maxPossiblePoint, highScore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoint) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoint}
        <span className="percentage">{Math.ceil(percentage)}%</span>
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>

      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-ui"
      >
        Restart Quiz
      </button>
    </>
  );
}
