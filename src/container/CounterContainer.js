import { connect, useDispatch, useSelector } from "react-redux";
import Counter from "../component/Counter";
import { decrease, increase } from "../modules/counter";
export const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <Counter
      number={number}
      onIncrease={() => {
        dispatch(increase());
      }}
      onDecrease={() => {
        dispatch(decrease());
      }}
    ></Counter>
  );
};

export default CounterContainer;
