import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

import { useState } from 'react';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [feedback, setFeedback] = useState(initialState);

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return ((feedback.good * 100) / total).toFixed(0);
  };

  const handleClick = key => {
    setFeedback(prevState => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  };

  const total = countTotalFeedback();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedback}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            stats={feedback}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
