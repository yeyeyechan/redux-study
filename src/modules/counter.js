import { createAction, handleAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [increase]: (state, action) => ({
      number: state.number + 1,
    }),
    [decrease]: (state, action) => ({
      number: state.number - 1,
    }),
  },
  initialState
);

export default counter;
