import { createContext, ReactElement } from "react";
import TodoStore from "../store/TodoStore";

interface StoreProviderProps {
  store: TodoStore;
  children: ReactElement;
}

export const StoreContext = createContext<TodoStore>(new TodoStore());

const StoreProvider = ({ store, children }: StoreProviderProps) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
