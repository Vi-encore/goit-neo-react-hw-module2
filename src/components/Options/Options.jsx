import PropTypes from "prop-types";
import css from "./Options.module.css"

export default function Options({
  feedback,
  totalFeedback,
  onUpdateFeedback,
  onReset,
}) {
  return (
    <div className={css.buttons}>
      {Object.keys(feedback).map((key) => {
        return (
          <button onClick={() => onUpdateFeedback(key)} key={key}>
            {key}
          </button>
        );
      })}
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}

Options.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  totalFeedback: PropTypes.number.isRequired,
  onUpdateFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
