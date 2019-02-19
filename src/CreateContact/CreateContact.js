import React, {Component} from 'react'; 
import './CreateContact.css'

export default class CreateContact extends Component {
  constructor() {
    super()
    this.state = {
     name: '',
     contactType: '',
     contactInformation: '',
     frequency: '',
     priority: '',
     notes: ''
    }
  }
  
  render() {
    const { name, contactType, contactInformation, frequency, priority, notes } = this.state
    return (
      <form>
        <div className="new-contact-header">New Contact</div>
        <div className="article">
          <div className="name">
            <input className="new-contact-name" name="contactName" value={name} type="text" required placeholder="Name"/>
          </div>
          <div className="priority">
            <select className="priority-selection" value={priority} required> 
              <option value="prio-1">1 - least important</option>
              <option value="prio-2">2</option>
              <option value="prio-3">3</option>
              <option value="prio-4">4</option>
              <option value="prio-5">5 - most important</option>
            </select>
          </div>
          <div className="frequency"> 
            <input className="frequency-input" name="contactFrequency" value={priority} type="text" required required placeholder="7"/> 
          </div>
          <label className="notes-label">Notes:</label>
          <div className="notes">
            <text-area value={notes} rows="5" className="note-field" placeholder="Take your notes here."/>  
          </div>          
        </div>
        <div className="save-contact">
          <button className='save-contact-btn'>Save Contact</button>
        </div>
      </form>
    )
  }
}