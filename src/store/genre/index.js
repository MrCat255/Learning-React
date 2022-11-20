import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../consts/statuses";

const initialState = {
  entities: {},
  ids: [],
  status: Statuses.idle,
};

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = Statuses.inProgress;
      state.entities = {};
      state.ids = [];
    },
    successLoading: (state, action) => {
      state.status = Statuses.success;
      state.entities = action.payload.entities;
      state.ids = action.payload.ids;
    },
    failedLoading: (state) => {
      state.status = Statuses.failed;
      state.entities = {};
      state.ids = [];
    },
  },
});
