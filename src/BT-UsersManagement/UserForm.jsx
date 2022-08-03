import React, { Component } from 'react'
import axios from 'axios'
export default class UserForm extends Component {
constructor(props) {
  super(props)

  this.state = {
     values : {
      id: "",
      account: "",
      name: "",
      password: "",
      email:"",
      phone:"",
      type:""
     },

  }
}
// Bắt sự kiện thay đổi giá trị của input và setState
handleChange = (evt) => {
 const {value, name} = evt.target;
 // name: account || name || passwword || email || phone number || Type
 this.setState((state) =>({
  values: {
    ...state.values, 
    [name]: value,
  }
 }))
}

handleSubmit = async (evt) => {
  evt.preventDefault()
  const { id, ...payload } = this.state.values;
  try {
    if (id) {
      // Cập nhật
      await axios.put(
        `https://62b6eabe6999cce2e80a17ba.mockapi.io/api/users/${id}`,
        payload
      );
      console.log("hi");
    } else {
      // Tạo mới
      await axios.post(
        "https://62b6eabe6999cce2e80a17ba.mockapi.io/api/users",
        payload
      );
      console.log("hello");
    }

    this.setState({
      values: {
      account: "",
      name: "",
      password: "",
      email:"",
      phone:"",
      type:""
      },
    });

    this.props.onSuccess();
  }
  catch (error) {
    console.log(error);
  }


}




  render() {
    const { values } = this.state;
    return (
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="account" className="form-label">
              Account
            </label>
            <input
              id="account"
              className="form-control"
              name="account"
              value={this.state.values.account}
              onChange={this.handleChange}
            />
          </div>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="form-control"
              value={this.state.values.name}
              onChange={this.handleChange}
            />
          </div>
          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              className="form-control"
              value={this.state.values.password}
              onChange={this.handleChange}
            />
          </div>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              className="form-control"
              value={this.state.values.email}
              onChange={this.handleChange}
            />
          </div>
          {/* Phone Number */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              className="form-control"
              value={this.state.values.phone}
              onChange={this.handleChange}
            />
          </div>
          {/* Type */}
          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Type
            </label>
            <input
              id="type"
              name="type"
              className="form-control"
              value={this.state.values.type}
              onChange={this.handleChange}
            />
          </div>

          <button className="btn btn-warning me-2" onClick={this.handleSubmit}>
            Register
          </button>
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    )
  }
}
