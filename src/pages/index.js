import Head from "next/head";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, resetDefault } from "../app/taskSlice";
import Task from "../components/Task";

export default function Home() {
  const [taskName, setTaskName] = useState("");

  const { tasks } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  return (
    <section>
      <Head>
        <title>React Todo</title>
        <meta name="description" content="Todo App built with Redux Toolkit, Next.js and Tailwind CSS" />
      </Head>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (taskName.length > 0) {
            dispatch(addTask(taskName.trim()));
            setTaskName("");
          }
        }}
      >
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">ADD IT</button>
      </form>
      <br />
      <button onClick={() => dispatch(resetDefault())}>RESET</button>
      <br />
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </section>
  );
}
