import TodoStore from "./store/TodoStore";
import StoreProvider from "./context/storeContext";
import Todo from "./components/Todo/Todo";

const store = new TodoStore();

const App = () => {
  return (
    <StoreProvider store={store}>
      <Todo />
    </StoreProvider>
  );
};

export default App;
