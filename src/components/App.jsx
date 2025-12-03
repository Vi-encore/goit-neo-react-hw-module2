import { useEffect, useState } from "react";
import "./App.css";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Description from "./Description/Description";
import Notification from "./Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = globalThis.localStorage.getItem("feedback");

    if (savedFeedback !== null) return JSON.parse(savedFeedback);
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  function handleReset() {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  }

  useEffect(() => {
    globalThis.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        feedback={feedback}
        totalFeedback={totalFeedback}
        onUpdateFeedback={updateFeedback}
        onReset={handleReset}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
