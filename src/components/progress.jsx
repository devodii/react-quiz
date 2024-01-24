export function Progress({
  idx,
  numQuestion,
  point,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numQuestion}
        value={idx + Number(answer !== null)}
      ></progress>

      <p>
        Question <string>{idx + 1}</string> / {numQuestion}
      </p>

      <p>
        <strong>{point}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
