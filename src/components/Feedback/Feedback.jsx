import PropTypes from "prop-types";

export default function Feedback({ feedback, totalFeedback }) {
  const { good, neutral, bad } = feedback;
  return (
    <ul className="feedback-wrap">
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {Math.round((good / totalFeedback) * 100)}%</li>
    </ul>
  );
}

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  totalFeedback: PropTypes.number.isRequired,
};
