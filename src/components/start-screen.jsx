export function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <p className="question-count-display">
        {numQuestions} questions to test your React mastery
      </p>
      <button className="btn btn-ui" onClick={dispatch}>
        Lets start
      </button>
    </div>
  );
}
