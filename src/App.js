import { useEffect, useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItems/TaskItem";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./Hooks/useHttp";

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, requestHandler: requestFetchHandler } = useHttp();

  useEffect(() => {
    const transformTasks = (taskObj) => {
      const loadedTask = [];
      for (const key in taskObj) {
        loadedTask.push({ id: key, text: taskObj[key].text });
      }
      setTasks(loadedTask);
    };

    requestFetchHandler(
      {
        url: "https://react-http-e25a5-default-rtdb.firebaseio.com/tasks-practice.json",
      },
      transformTasks
    );
  }, [requestFetchHandler]);

  const addedPreviousTasks = (task) => {
    setTasks((prevTask) => prevTask.concat(task));
  };

  return (
    <div>
      <NewTask onAddTaskValue={addedPreviousTasks} />
      <TaskItem
        tasks={tasks}
        isLoading={isLoading}
        error={error}
        onFetch={requestFetchHandler}
      />
    </div>
  );
}

export default App;
