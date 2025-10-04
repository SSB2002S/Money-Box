import { configureStore } from "@reduxjs/toolkit";
import transaction from "../features/transactions/transactionsSlice";
import goal from "../features/goals/goalsSlice";
const store = configureStore({
  reducer: { transaction, goal },
});

export default store;
