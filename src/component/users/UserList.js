import React, { Component } from "react";
import Classes from "../UI/UserList.module.css";
import Card from "./Card";

export default class UserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className={Classes.list}>
        <ul>
          {this.props.users.map((user) => {
            return (
              <li key={user.id}>
                {user.username} ({user.age} is your age)
              </li>
            );
          })}
        </ul>
      </Card>
    );
  }
}
