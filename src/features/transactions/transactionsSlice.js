import { createSlice } from "@reduxjs/toolkit";
import _default from "eslint-plugin-react-refresh";

const info = localStorage.getItem("info")
  ? JSON.parse(localStorage.getItem("info"))
  : [{ totalIncom: 0, totalExpenses: 0 }];

export let totalIncom = info[0].totalIncom;
export let totalExpenses = info[0].totalExpenses;
export let residual = totalIncom - totalExpenses;


let idNext = localStorage.getItem("transactions")
  ? JSON.parse(localStorage.getItem("transactions")).length > 0
    ? JSON.parse(localStorage.getItem("transactions"))[
        JSON.parse(localStorage.getItem("transactions")).length - 1
      ].id + 1
    : 1
  : 1;

const initialTransaction = localStorage.getItem("transactions")
  ? JSON.parse(localStorage.getItem("transactions"))
  : [];

const transactionsSlice = createSlice({
  name: "transaction",
  initialState: initialTransaction,
  reducers: {
    getTransactions: () => {},
    addTransactions: (state, action) => {
      const newTranssation = {
        id: ++idNext,
        title: action.payload.title,
        category: action.payload.category,
        amount: Number(action.payload.amount),
        type: action.payload.type,
        note: action.payload.note,
        date: action.payload.date,
      };
      state.push(newTranssation);

      if (action.payload.type === "دخل") {
        totalIncom += Number(action.payload.amount);
      } else {
        totalExpenses += Number(action.payload.amount);
      }
      residual = totalIncom - totalExpenses;

      localStorage.setItem(
        "info",
        JSON.stringify([
          { totalIncom: totalIncom, totalExpenses: totalExpenses },
        ])
      );
      localStorage.setItem("transactions", JSON.stringify([...state]));
    },

    editTransactions: (state, action) => {
      const index = state.findIndex((item) => item.id == action.payload.id);
      if (index !== -1) {
        if ((action.payload.type === "دخل") & (state[index].type === "دخل")) {
          totalIncom =
            totalIncom - state[index].amount + Number(action.payload.amount);
        } else if (
          (action.payload.type === "دخل") &
          (state[index].type === "مصروف")
        ) {
          totalExpenses -= state[index].amount;
          totalIncom += Number(action.payload.amount);
        } else if (
          (action.payload.type === "مصروف") &
          (state[index].type === "دخل")
        ) {
          totalIncom -= state[index].amount;
          totalExpenses += Number(action.payload.amount);
        } else {
          totalExpenses =
            totalExpenses - state[index].amount + Number(action.payload.amount);
        }
        residual = totalIncom - totalExpenses;

        state[index] = action.payload;

        localStorage.setItem(
          "info",
          JSON.stringify([
            { totalIncom: totalIncom, totalExpenses: totalExpenses },
          ])
        );
        localStorage.setItem("transactions", JSON.stringify([...state]));
      }
    },

    deleteTransactions: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        if (state[index].type === "دخل") {
          totalIncom -= state[index].amount;
        } else {
          totalExpenses -= state[index].amount;
        }
        residual = totalIncom - totalExpenses;
        state.splice(index, 1);

        localStorage.setItem(
          "info",
          JSON.stringify([
            { totalIncom: totalIncom, totalExpenses: totalExpenses },
          ])
        );
        localStorage.setItem("transactions", JSON.stringify([...state]));
      }
    },
  },
});

export const {
  getTransactions,
  addTransactions,
  editTransactions,
  deleteTransactions,
} = transactionsSlice.actions;
export default transactionsSlice.reducer;
