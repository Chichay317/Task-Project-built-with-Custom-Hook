import { Fragment } from "react";
import Card from "../../UI/Card";
import Task from "./Task";
import classes from "./TaskItem.module.css";

const TaskItem = (props) => {
  let tasksList = <p>No task found, start adding some!</p>;

  if (props.tasks.length > 0) {
    tasksList = (
      <ul>
        {props.tasks.map((task) => (
          <Task key={task.id}>{task.text}</Task>
        ))}
      </ul>
    );
  }

  let content = tasksList;

  if (props.isLoading) {
    content = "Loading...";
  }

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  return (
    <Fragment>
      <Card className={classes.container}>{content}</Card>
    </Fragment>
  );
};

export default TaskItem;
