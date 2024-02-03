import { useQuiz } from "../context/quiz-context";

export function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <string>{index + 1}</string> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
