import * as React from "react";
import { Options } from "./options";

export function Question({ question, dispatch, answer }) {
  console.log({ question });
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
