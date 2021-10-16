import { observer } from "mobx-react-lite";
import useStore from "../../hooks/useStore";

const TodoList = () => {
  const store = useStore();

  const onClickHandler = (id: number) => {
    store.toggleComplete(id);
  };

  const onRemoveHandler = (id: number) => {
    store.remove(id);
  };

  return (
    <ul>
      {store.todos.map((todo) => (
        <li key={todo.id} onClick={() => onClickHandler(todo.id)}>
          [{todo.completed ? "✓" : " "}] {todo.title}{" "}
          <span onClick={() => onRemoveHandler(todo.id)}>🗑️</span>
        </li>
      ))}
    </ul>
  );
};

export default observer(TodoList);
