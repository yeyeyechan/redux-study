const TodoItem = ({ onToggle, onRemove, todo }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      ></input>
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button
        onClick={() => {
          onRemove(todo.id);
        }}
      >
        삭제
      </button>
    </div>
  );
};
const ToDo = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput("");
  };
  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input
            value={input}
            onChange={(e) => onChangeInput(e.target.value)}
          />
          <button type="submit">등록</button>
        </form>
      </div>
      <div>
        {todos.map((ele, idx) => (
          <TodoItem
            key={idx}
            onRemove={onRemove}
            onToggle={onToggle}
            todo={ele}
          />
        ))}
      </div>
    </div>
  );
};
export default ToDo;
