import axios from 'axios'
import React, { Component } from 'react'
import UserForm from './UserForm'
import UserList from './UserList'

export default class UserManagement extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userDataInf : [],
    }
  }
  fetchUser = async () => {
    try{
      const {data} = await axios.get("https://62b6eabe6999cce2e80a17ba.mockapi.io/api/users")
      this.setState({userDataInf : data})
    }catch{
      console.log("error");
    }
  } 
  componentDidMount() {
    this.fetchUser()
  }


  render() {
    return (
      <div>
        <div className="container" >
        <h1 className="text-center text-primary">User Management</h1>
        <label className="w-100 h-100 border border-2 border-warning p-5">
          <div className="card-header bg-warning text-white text-center fs-3">
            <strong>User Form</strong>
          </div>
          <div className="card-body">
            <UserForm onSuccess={this.fetchUser}/>
          </div>
        </label>
        <UserList  showListUserAPI = {this.state.userDataInf}  onDeleteSuccess ={this.fetchUser} />
      </div>
      </div>
    )
  }
}
