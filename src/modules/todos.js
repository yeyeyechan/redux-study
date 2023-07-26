import { produce } from "immer";
import { createAction, handleAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

export const change_input = createAction(CHANGE_INPUT, (input) => input);
let id = 3;
export const insert = createAction(INSERT, (text) => ({
  done: false,
  text,
  id: id++,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: "",
  todos: [
    { id: 1, done: true, text: "리덕스 기초 배우기" },
    { id: 2, done: false, text: "리덕스 응용 배우기" },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todos }) =>
      produce(state, (draft) => {
        draft.todos.push(todos);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState
);

export default todos;
