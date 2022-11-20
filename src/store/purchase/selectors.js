export const selectPurchaseModule = (state) => state.purchase;

export const selectBookCount = (state, bookId) =>
  selectPurchaseModule(state)[bookId];

export const selectBookCountAll = (state) => selectPurchaseModule(state);
