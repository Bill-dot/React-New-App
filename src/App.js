import React from 'react'
import './App.css'
import AddUser from './component/users/AddUser'
import UserList from './component/users/UserList'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      users : []
    }

  }

   addUserHandler=(uName, uAge)=>{
    console.log([...this.state.users, {username:uName, age:uAge}])
    this.setState({users:[...this.state.users, {username:uName, age:uAge, id:Math.random().toString()}]})
  }

  componentDidUpdate(){
    console.log(this.state.users)
  }

  render(){
    return(
      <div>
        <AddUser 
        onAddUser={this.addUserHandler}
        />
        {this.state.users.length===0 || <UserList users={this.state.users}/>}
      </div>
    )
  }
}