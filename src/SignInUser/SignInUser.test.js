import React from 'react'; 
import { shallow } from 'enzyme'; 
import SignInUser from './SignInUser.js'; 

describe('SignInUser', () => {
  let mockName; 
  let mockPassword;
  let mockEvent
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SignInUser signIn={jest.fn()}/>)
    mockName = 'Rajaa'; 
    mockPassword = 'password'; 
    mockEvent = {
     target: {
       name: 'token',
       value: 'token12345'
      }
    }
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<SignInUser />)

    expect(wrapper).toMatchSnapshot()
  });
  
  describe('handleChange', () => {
    let mockEvent
    let wrapper
    
    beforeEach(() => {
      wrapper = shallow(<SignInUser signIn={jest.fn()}/>)
      mockEvent = {
       target: {
         name: 'token',
         value: 'token12345'
        }
      }
    })
    
    it('should invoke handleChange when event occurs on an input', () => {
      wrapper.handleChange = jest.fn()
      wrapper.find('.user-name').simulate('change', mockEvent)
      
      expect(wrapper.handleChange).toHaveBeenCalled
    })
      
    it('should update state when handleChange is invoked on an input', () => {
      const expected = {
        userName: 'Derek',  
        password: '',
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
  })
});
