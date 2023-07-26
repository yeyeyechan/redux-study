import { connect, useDispatch, useSelector } from "react-redux";
import ToDo from "../component/ToDo";
import { change_input, insert, remove, toggle } from "../modules/todos";
import { useCallback } from "react";
import useActions from "../lib/useActions";

const TodosContainer = () => {
  const input = useSelector((state) => state.todos.input);
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();
  const [changeInput, Insert, Toggle, Remove] = useActions(
    [change_input, insert, toggle, remove],
    []
  );
  return (
    <ToDo
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={Insert}
      onToggle={Toggle}
      onRemove={Remove}
    ></ToDo>
  );
};

export default TodosContainer;
