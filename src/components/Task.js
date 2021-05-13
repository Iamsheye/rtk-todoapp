import { useDispatch } from "react-redux";
import { removeTask, toggleComplete } from "../app/taskSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <section>
      <h3 style={{ textDecoration: task.completed && "line-through" }}>
        {task.name}
      </h3>
      <button onClick={() => dispatch(removeTask(task.id))}>XX</button>
      <div onClick={() => dispatch(toggleComplete(task.id))}>Toggle</div>
    </section>
  );
};

export default Task;
