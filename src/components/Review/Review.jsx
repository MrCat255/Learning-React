import style from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectFeedbackById } from "../../store/feedback/selectors";

export const Review = (props) => {
  const feedback = useSelector((state) =>
    selectFeedbackById(state, props.review)
  );

  if (!feedback) {
    return null;
  }

  return (
    <div className={style.review}>
      <div>
        <span>{feedback.name}</span>
        <span>{feedback.rating}</span>
      </div>
      <div>{feedback.text}</div>
    </div>
  );
};
