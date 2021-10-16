import { observer } from "mobx-react-lite";
import useStore from "../../hooks/useStore";

const Stat = () => {
  const store = useStore();

  return (
    <>
      <p>
        Total: {store.count} | Completed: {store.completedCount} | Incompleted:{" "}
        {store.incompletedCount}
      </p>
    </>
  );
};

export default observer(Stat);
