import * as React from "react";
import { useQuiz } from "../context/quiz-context";

function addZeroPrefix(number) {
  return number < 10 ? `0${number}` : number;
}

export function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining - minutes * 60;
  React.useEffect(() => {
    const id = setInterval(() => dispatch({ type: "tick" }), 1000);

    return () => clearTimeout(id);
  }, [dispatch]);

  return (
    <div className="timer">{`${addZeroPrefix(minutes)}:${addZeroPrefix(
      seconds
    )}`}</div>
  );
}
