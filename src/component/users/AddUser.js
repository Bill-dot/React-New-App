import React, { Component } from "react";
import Card from "./Card";
import Classes from "../UI/AddUser.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: "",
      isError:false,
    };
  }

  onUsernameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  onAgeChangeHandler = (event) => {
    this.setState({ age: event.target.value });
  };

  onSubmitHandler = (event) => {
    // let [username,age] = this.state
    event.preventDefault();
    if (
      this.state.username.trim().length === 0 ||
      this.state.age.trim().length === 0
    ) {
      console.log("this step");
      this.setState({isError:true})
      return;
    }
    if (+this.state.age < 1) {
        this.setState({isError:true})
      return;
    }
    console.log(this.state.age + " " + this.state.username);

    this.props.onAddUser(this.state.username, this.state.age);
    this.setState({ username: "", age: "" });
  };

  errorHadler=()=>{
    this.setState({isError:false})
    console.log(this.state.isError)
  }

  render() {
    return (
      <div>
        {this.state.isError && <ErrorModal message="Username/age shouldn't be empty" title="Please enter a value!" onClick={this.errorHadler} />}
        <Card className={Classes.input}>
          <form onSubmit={this.onSubmitHandler}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              onChange={this.onUsernameChangeHandler}
              value={this.state.username}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              onChange={this.onAgeChangeHandler}
              value={this.state.age}
            />
            <Button type="submit">Add user</Button>
          </form>
        </Card>
      </div>
    );
  }
}
