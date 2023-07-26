import Counter from "./component/Counter";
import ToDo from "./component/ToDo";
import CounterContainer from "./container/CounterContainer";
import TodosContainer from "./container/TodosContainer";

function App() {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr></hr>
      <TodosContainer></TodosContainer>
    </div>
  );
}

export default App;
