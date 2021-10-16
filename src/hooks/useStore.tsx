import { useContext } from "react";
import { StoreContext } from "../context/storeContext";

const useStore = () => {
  return useContext(StoreContext);
};

export default useStore;
