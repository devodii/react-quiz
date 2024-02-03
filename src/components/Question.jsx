import { useQuiz } from "../context/quiz-context";
import { Options } from "./options";

export function Question() {
  const { questions, index } = useQuiz();

  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options />
    </div>
  );
}
