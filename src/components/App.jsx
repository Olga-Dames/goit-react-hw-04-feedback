import React, { useReducer } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

function reducer(feed, action) {
  switch (action.type) {
    case 'good':
      return { ...feed, good: feed.good + 1 };
    case 'neutral':
      return { ...feed, neutral: feed.neutral + 1 };
    case 'bad':
      return { ...feed, bad: feed.bad + 1 };
    default:
      throw new Error();
  }
}

export default function App() {
  const [feed, setFeed] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = feed;

  const countTotalFeedback = () => {
    return Object.values(feed).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    if (!good) {
      return 0;
    }
    return Math.round((good * 100) / (good + neutral + bad));
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feed)}
          onLeaveFeedback={setFeed}
        ></FeedbackOptions>
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
}
