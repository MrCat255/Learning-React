import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../consts/statuses";

const initialState = {
  entities: {},
  ids: [],
  status: Statuses.idle,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = Statuses.inProgress;
    },
    successLoading: (state, action) => {
      state.status = Statuses.success;
      state.entities = { ...state.entities, ...action.payload.entities };
      state.ids = Array.from(new Set([...state.ids, ...action.payload.ids]));
    },
    failedLoading: (state) => {
      state.status = Statuses.failed;
    },
  },
});
