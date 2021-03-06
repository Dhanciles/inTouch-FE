export const userReducer = (state={}, action) => {
  switch (action.type) {
      case 'SIGN_IN_USER':
        return {
          name: action.userName, 
          token: action.token
        }
      case 'SIGN_OUT_USER': 
        return {}
      case 'UPDATE_REMINDERS': 
        return action.reminder
      default: 
        return state
  }
}