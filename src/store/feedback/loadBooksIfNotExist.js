import { feedbackSlice } from "./index";
import { prepareData } from "../utils";

export const loadFeedbacksIfNotExist = (bookId) => (dispatch, getState) => {
  dispatch(feedbackSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/reviews?bookId=${bookId}`)
    .then((response) => response.json())
    .then((books) => {
      dispatch(feedbackSlice.actions.successLoading(prepareData(books)));
    })
    .catch(() => {
      dispatch(feedbackSlice.actions.failedLoading());
    });
};
