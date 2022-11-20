import { bookSlice } from "./index";
import { prepareData } from "../utils";

export const loadBooksIfNotExist = (genreId) => (dispatch, getState) => {
  // if (selectGenre(getState())?.length > 0) {
  //   return;
  // }
  dispatch(bookSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/books?genreId=${genreId}`)
    .then((response) => response.json())
    .then((genres) => {
      dispatch(bookSlice.actions.successLoading(prepareData(genres)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failedLoading());
    });
};
