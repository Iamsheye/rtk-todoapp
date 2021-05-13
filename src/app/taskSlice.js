import { createSlice } from "@reduxjs/toolkit";

const randomID = () => {
  const col = "abcdefghijklmnopqrstuvwxyz";
  let id = "";
  for (let i = 0; i < 4; i++) {
    id += col[Math.floor(col.length * Math.random())];
  }
  return id + Math.floor(1000 * Math.random());
};

const tasks = [
  { id: randomID(), name: "Buy food at Mavise", completed: false },
  { id: randomID(), name: "Complete GLY Assignment", completed: false },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks = [
        { id: randomID(), name: action.payload, completed: false },
        ...state.tasks,
      ];
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        } else {
          return { ...task };
        }
      });
    },
    resetDefault: (state) => {
      state.tasks = tasks;
    },
  },
});

export const { addTask, removeTask, toggleComplete, resetDefault } =
  taskSlice.actions;

export default taskSlice.reducer;
