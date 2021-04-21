import React from "react";
import "./Todo.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import db from "./firebase";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="deadline" />
      </ListItem>
      <DeleteForeverOutlinedIcon
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      />
    </List>
  );
}

export default Todo;
