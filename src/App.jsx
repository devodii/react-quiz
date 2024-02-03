import { Question } from "./components/Question";
import { Error } from "./components/error";
import { FinishedScreen } from "./components/finished-screen";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Loader } from "./components/loader";
import { Main } from "./components/main";
import { NextButton } from "./components/next-button";
import { Progress } from "./components/progress";
import { StartScreen } from "./components/start-screen";
import { Timer } from "./components/timer";
import { useQuiz } from "./context/quiz-context";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}

        {status === "finished" && <FinishedScreen />}
      </Main>
    </div>
  );
}
