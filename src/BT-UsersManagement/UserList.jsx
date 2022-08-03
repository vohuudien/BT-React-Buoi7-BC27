import axios from 'axios'
import React, { Component } from 'react'

export default class UserList extends Component {
  handleDelete = async (userID) => {
    try{
      await axios.delete(`https://62b6eabe6999cce2e80a17ba.mockapi.io/api/users/${userID}`)

      this.props.onDeleteSuccess()
    }catch (error) {
      console.log(error);
    }
    

  }


  render() {
    const {showListUserAPI} = this.props
    return (
      <div className='border border-4 border-warning mt-5 table-responsive h-100'>
        <table className='table table-dark table-striped'>
          <thead className='table-secondary border-bottom border-4 border-warning'>
            <tr>
            <th scope='col'>STT</th>
            <th scope='col'>Account</th>
            <th scope='col'>Name</th>
            <th scope='col'>Password</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Type</th>
            <th scope='col'></th>
            </tr>
            
          </thead>
          <tbody>
            {showListUserAPI.map((eachObject) => {
              return (
                <tr key={eachObject.id}>
            <td>{eachObject.id}</td>
            <td>{eachObject.account}</td>
            <td>{eachObject.name}</td>
            <td>{eachObject.password}</td>
            <td>{eachObject.email}</td>
            <td>{eachObject.phone}</td>
            <td>{eachObject.type}</td>
            <td>
              <button className='btn btn-success me-2' onClick={()=> this.props.onSelectSuccess(eachObject.id)}> Edit </button>
              <button className='btn btn-danger' onClick={()=> this.handleDelete(eachObject.id)}> Delete </button>
            </td>
                </tr>
            
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
