export const selectFeedbackModule = (state) => state.feedback;

export const selectFeedback = (state) =>
  Object.values(selectFeedbackModule(state).entities);

export const selectFeedbackById = (state, feedbackId) =>
  selectFeedbackModule(state).entities[feedbackId];
