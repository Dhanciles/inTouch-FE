import {userReducer} from './userReducer'

describe('userReducer', () => {
  
  it('should return the initial state', () => {
    const expected = {}
    const result = userReducer(undefined, {})

    expect(result).toEqual(expected)
  })
  
  const userName = 'Derek'
  const token = 'token12345'
  
  it('should update state with user id and name when SIGN_IN_USER case', () => {
    const mockData = {id, userName, token}
    const action = {
      type: 'SIGN_IN_USER', 
      data: mockData
    }
    
    const expected = {userName: action.userName, token: action.token}

    const result = userReducer({}, action)

    expect(result).toEqual(expected)
  })
  
  it('should update state with empty object when SIGN_OUT_USER case', () => {
    const action = {
      type: 'SIGN_OUT_USER'
    }
    
    const expected = {}

    const result = userReducer({}, action)

    expect(result).toEqual(expected)
  })
})