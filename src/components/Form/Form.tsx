import { useState } from "react";
import useStore from "../../hooks/useStore";

const Form = () => {
  const [text, setText] = useState("");
  const store = useStore();

  const onChangeHandler = (value: string) => {
    setText(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text === "") return;
    store.addTodo(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => onChangeHandler(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
