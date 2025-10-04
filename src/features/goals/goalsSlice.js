import { createSlice } from "@reduxjs/toolkit";

let nextId = localStorage.getItem("goals")
  ? JSON.parse(localStorage.getItem("goals")).length > 0
    ? JSON.parse(localStorage.getItem("goals"))[
        JSON.parse(localStorage.getItem("goals")).length - 1
      ].id + 1
    : 1
  : 1;

const initialGoal = localStorage.getItem("goals")
  ? JSON.parse(localStorage.getItem("goals"))
  : [];

const goalsSlice = createSlice({
  name: "goal",
  initialState: initialGoal,
  reducers: {
    addGoal: (state, action) => {
      const newGoal = {
        id: nextId++,
        title: action.payload.title,
        money: Number(action.payload.money),
        date: action.payload.date,
        note: action.payload.note,
      };
      console.log(newGoal);
      state.push(newGoal);
      localStorage.setItem("goals", JSON.stringify([...state]));
    },
    deleteGoal: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("goals", JSON.stringify([...state]));
    },
    editGoal: (state, action) => {
      const index = state.findIndex((item) => item.id == action.payload.id);
      console.log(action.payload.money);
      if (index !== -1) {
        state[index].id = action.payload.id;
        state[index].title = action.payload.title;
        state[index].money = action.payload.money;
        state[index].date = action.payload.date;
        state[index].note = action.payload.note;
      }
      localStorage.setItem("goals", JSON.stringify([...state]));
    },
  },

  // extraReducers: builder =>{
  //   builder.addCase()
  // }
});
export const { addGoal, deleteGoal, editGoal } = goalsSlice.actions;
export default goalsSlice.reducer;
