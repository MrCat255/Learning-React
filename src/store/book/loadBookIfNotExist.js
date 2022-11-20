import { bookSlice } from "./index";
import { prepareData } from "../utils";

export const loadBookIfNotExist = (bookId) => (dispatch, getState) => {
  // if (selectGenre(getState())?.length > 0) {
  //   return;
  // }

  console.log(4444444);
  console.log(bookId);
  dispatch(bookSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/books?bookId=${bookId}`)
    .then((response) => response.json())
    .then((genres) => {
      console.log(genres);
      dispatch(bookSlice.actions.successLoading(prepareData(genres)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failedLoading());
    });
};
