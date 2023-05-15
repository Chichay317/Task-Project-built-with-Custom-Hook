import useHttp from "../../Hooks/useHttp";
import TaskInput from "../TaskInput/TaskInput";

const NewTask = (props) => {
  const { isLoading, error, requestHandler: requestPostHandler } = useHttp();

  const createdTask = (taskValue, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createTask = { id: generatedId, text: taskValue };
    props.onAddTaskValue(createTask);
  };

  const addedTaskHandler = async (taskValue) => {
    requestPostHandler(
      {
        url: "https://react-http-e25a5-default-rtdb.firebaseio.com/tasks-practice.json",
        method: "POST",
        body: { text: taskValue },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createdTask.bind(null, taskValue)
    );
  };

  return (
    <div>
      <TaskInput
        onAddTask={addedTaskHandler}
        error={error}
        isLoading={isLoading}
      />
    </div>
  );
};

export default NewTask;
