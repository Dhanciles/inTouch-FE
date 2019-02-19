import React, { Component } from 'react'; 
import './CreateUser.css'
import { createUser } from '../Thunks/createUser.js'
import { hasErrored } from '../Actions/index.js'
import { connect } from 'react-redux'

export default class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      userName: '', 
      email: '', 
      password: '',
      confirmation: '', 
      disabled: true
    }
  }
  
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    }, () => this.enableButton())
  }
  
  enableButton = () => {
    const { userName, email, password, confirmation } = this.state
    if (userName !== '' && email !== '' && password  !== '' && confirmation  !== '') {
      this.setState({
        disabled = false
      })
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { userName, email, password, confirmation } = this.state
    if (password === confirmation) {
      this.props.createNewUser(userName, email, password)
    } else {
      return (
        <div>
          <h3>Passwords do not match. Please try again.</h3>
        </div>
      )
    }
  }
  
  render() {
    const { userName, email, password, confirmation, disabled } = this.state
    return (
      <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.handleChange } className="new-user-name" name="userName" value={userName} type="text" required placeholder="Username"/>
          <input onChange={ this.handleChange } className="new-user-email" name="email" value={email} type="text" required placeholder="Email"/>
          <input onChange={ this.handleChange } className="new-user-password" name="password" value={password} type="password" required placeholder="Password"/>
          <input onChange={ this.handleChange } className="new-user-password-confirmation" name="confirmation" value={confirmation} type="password" required placeholder="Confirmation"/>
        <button className="new-account-button" disabled={disabled}>Create Account</button>
      </form>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  createNewUser: (userName, email, password) => dispatch(createUser(userName, email, password))
})

export default connect(null, mapDispatchToProps)(CreateUser)
