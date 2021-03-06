import React from "react";
import Card from "../UI/Card";
import classes from "./DisplayUsers.module.css";

const DisplayUsers = (props) => {
  const deleteHandler = (userId) => {
    props.onDeleteUser(userId);
  };
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id} onClick={() => deleteHandler(user.id)}>
            {user.name} ({user.age} in years)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default DisplayUsers;
