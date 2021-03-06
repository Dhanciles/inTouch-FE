import React, { Component } from 'react';
import './CurrentContact.css';
import { getContact } from '../Thunks/getContact.js'
import { isLoading, hasErrored, getCurrentContact } from '../actions/index.js'
import { connect } from 'react-redux'

export class CurrentContact extends Component {
  constructor() {
    super()
    this.state = {
      disabled: true,
      priority: '',
      contactInformation: '',
      frequency: '', 
      occasions: '', 
      notes: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  toggleDisabled = (e) => {
    e.preventDefault()
    this.setState({
      disabled: !this.state.disabled
    })
  }

  checkNull = (obj) => {
    let updates = Object.keys(obj)
    let objectToSend = updates.reduce((data, element) => {
      if(obj[element] !== '' ) {
        data[element] = obj[element]
      }
      return data
    }, {})
    return objectToSend
  }

  sendChanges = (e) => {
    e.preventDefault()
    let changesToContact = this.checkNull(this.state)
  }

  render() {
    const { disabled, priority, contactInformation, frequency, notes, occasions } = this.state
    const { contact } = this.props
    console.log(contact)
    let iconText = disabled ? 'Close' : 'Save Changes'
    return (
      <article>
        <div className="current-contact-card">
          <header className="contact-header">
            <div className="contact-name">{contact.name}</div>
            <div role="container for icons edit and close" className="contact-icons-container">
              <p onClick={this.toggleDisabled} className="edit-icon">Edit</p>
              <p  onClick={this.sendChanges} className="close-icon">{iconText}</p>
            </div>
          </header>
          <main>
            <div className="contact-details-container">
              <div className="contact-details-label">Contact Details</div>
              <div className="contact-details">
                <div className="contact-email">
                  <label className="email-label">Phone Number: </label>
                  <input onChange={ this.handleChange } className="email-information contact-edit-input" disabled={disabled} type="text" name="contactInformation" placeholder="Enter Phone Number" value={ contactInformation }/>
                </div>
                <div className="contact-frequency">
                  <label className="frequency-label">Frequency: </label>
                  <input onChange={ this.handleChange } className="frequency-information contact-edit-input" disabled={disabled} type="number" name="frequency"  value={frequency} placeholder={contact.frequency}/>
                </div>
                <div className="contact-priority">
                  <div className="priority-label">Priority: </div>
                  <select className="priority-selection" value={priority} name="priority" disabled={disabled} required onChange={ this.handleChange }>
                        <option value={contact.priority}>{contact.priority}</option>
                        <option value={1}>1 - least important</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5 - most important</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="notes-and-occasions-container">
              <div className="notes-container">
                <label className="notes-label">Notes</label>
                <input onChange={ this.handleChange } className="contact-note" disabled={disabled} type="text" name="notes"  value={notes} placeholder={contact.notes}/>
              </div>
              <div className="saved-occasions-container">
                <label className="occasions-label">Occasions</label>
                <input onChange={ this.handleChange } className="saved-occasions" disabled={disabled} type="text" name="occasion"  value={occasions} placeholder={contact.occasions}/>

              </div>
            </div>
          </main>
        </div>
      </article>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  contact: state.contact
})

export const mapDispatchToProps = (dispatch) => ({
  currentContact: () => dispatch(getCurrentContact())
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentContact)
