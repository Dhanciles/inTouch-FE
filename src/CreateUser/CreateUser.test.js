import React from 'react'; 
import { shallow } from 'enzyme'; 
import { CreateUser, mapDispatchToProps } from './CreateUser.js'; 
import { createUser } from '../Thunks/createUser.js'


describe('CreateUser', () => {
  let mockName; 
  let mockEmail; 
  let mockPassword; 
  let mockConfirmation; 
  let mockEvent
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<CreateUser createNewUser={jest.fn()}/>)
    mockName = 'Kaytranada'; 
    mockEmail = 'yaboy@ymail.com'; 
    mockPassword = 'password'; 
    mockConfirmation = 'password';
    mockEvent = {
     target: {
       name: 'userName',
       value: 'Derek'
      }
    }
  })
  
  it('should match snapshot', () => {
    
    expect(wrapper).toMatchSnapshot()
  })
  
  it('should invoke handleChange when event occurs on an input', () => {
    wrapper.handleChange = jest.fn()
    wrapper.find('.new-user-name').simulate('change', mockEvent)
    
    expect(wrapper.handleChange).toHaveBeenCalled
  })
    
  it('should update state when handleChange is invoked on an input', () => {
    const expected = {
      userName: 'Derek', 
      email: '', 
      password: '',
      confirmation: '', 
      disabled: true
    }
    
    wrapper.instance().handleChange(mockEvent)
    
    expect(wrapper.state()).toEqual(expected)
  })
  
  it('should invoke enableButton', () => {
    const mockFunction = jest.fn()
    wrapper.enableButton = mockFunction
    
    wrapper.instance().handleChange(mockEvent)
    
    expect(mockFunction).toHaveBeenCalled
  })
  
  it('should toggle disabled if all values are present in input fields', () => {
    const mockState = {
      userName: 'Derek', 
      email: 'derek@email.com', 
      password: 'password',
      confirmation: 'password', 
      disabled: false
    }    
    const expected = {
      userName: 'Derek', 
      email: 'derek@email.com', 
      password: 'password',
      confirmation: 'password', 
      disabled: false
    }
    
    wrapper.setState(mockState)
    wrapper.instance().enableButton()
    
    expect(wrapper.state()).toEqual(expected)
  })
  
  it('should invoke handleSubmit on click of the Create Account button', () => {
    const mockSubmitEvent = {
      target: {},
      preventDefault: () => {}
    }
    
    wrapper.setState({
      disabled: false
    })
    
    wrapper.find('.new-account-button').simulate('click', mockEvent)
    
    expect(wrapper.handleSubmit).toHaveBeenCalled
  })
  
  describe('mapDispatchToProps', () => {
    let mockDispatch
    let mappedProps
    let mockUserName; 
    let mockEmail; 
    let mockPassword; 
    
    beforeEach(() => {
      mockDispatch = jest.fn()
      mappedProps = mapDispatchToProps(mockDispatch)
      mockUserName = 'Derek'
      mockEmail = 'derek@email'
      mockPassword = 'password'
    })
    
    it('should dispatch the createUser action when handleSubmit is called', () => {
      mappedProps.createNewUser(mockUserName, mockEmail, mockPassword)
      
      expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function))
    })
  })
})