import * as React from "react";

function addZeroPrefix(number) {
  return number < 10 ? `0${number}` : number;
}

export function Timer({ dispatch, secondsRemaining }) {
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
