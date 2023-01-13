import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorModel, setErrorModel] = useState(null);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUSerHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorModel({
        title: "Invalid Input",
        message: "username and age must not be empty",
      });
      return;
    }
    if (+enteredAge < 1) {
      setErrorModel({
        title: "Invalid Input",
        message: "Age must be greater than 0",
      });
      return;
    }

    setEnteredUsername("");
    setEnteredAge("");

    props.onAddUser(enteredUsername, enteredAge);
  };

  const cancelErrorDialog = () => {
    setErrorModel(null);
  };

  return (
    <div>
      {errorModel && (
        <ErrorModal
          title={errorModel.title}
          message={errorModel.message}
          hideDialog={cancelErrorDialog}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUSerHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
