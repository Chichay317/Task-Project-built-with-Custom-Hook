import { useRef } from "react";
import Card from "../../UI/Card";
import classes from "./TaskInput.module.css";

const TaskInput = (props) => {
  const taskInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onAddTask(enteredValue);
    }

    taskInputRef.current.value = "";
  };

  return (
    <Card>
      <form onSubmit={submitFormHandler}>
        <div className={classes["form-group"]}>
          {props.error && <p className={classes.error}>{props.error}</p>}
          <label htmlFor="text">Please enter a task</label>
          <input id="text" type="text" ref={taskInputRef}></input>
        </div>
        <button type="submit">
          {props.isLoading ? "Loading" : "Add Task"}
        </button>
      </form>
    </Card>
  );
};

export default TaskInput;
