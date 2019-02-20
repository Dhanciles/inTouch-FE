export const signInUser = (userName, token) => ({
  type: 'SIGN_IN_USER',
  userName, 
  token
})

export const signOutUser = () => ({
  type: 'SIGN_OUT_USER'
})

export const isLoading = (check) => ({
  type: 'IS_LOADING',
  isLoading: check
})

export const hasErrored = (check) => ({
  type: 'HAS_ERRORED',
  hasErrored: check
})

export const createContact = (id, name) => ({
    type: 'CREATE_CONTACT', 
    id,
    name, 
})

export const updateContact = (contact) => ({
  type: 'UPDATE_CONTACT', 
  contact
})

export const getAllContacts = (contacts) => ({
  type: 'GET_ALL_CONTACTS', 
  contacts
})

export const setSelection = (selection) => ({
  type: 'SET_SELECTION', 
  selection
})

export const updateOccasions = (occasion) => ({
  type: 'UPDATE_OCCASIONS', 
  occasion
})

export const updateReminders = (reminder) => ({
  type: 'UPDATE_REMINDERS', 
  reminder
})