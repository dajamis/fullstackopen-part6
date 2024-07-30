import React, { createContext, useReducer, useContext } from 'react'

const NotificationContext = createContext()

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.payload
    case 'CLEAR_NOTIFICATION':
      return ''
    default:
      return state
  }
}

/* eslint-disable react/prop-types */
export const NotificationProvider = (props) => {
  const [state, dispatch] = useReducer(notificationReducer, '')

  const setNotification = (message, timeout) => {
    dispatch({ type: 'SET_NOTIFICATION', payload: message })
    setTimeout(() => dispatch({ type: 'CLEAR_NOTIFICATION' }), timeout*1000)
  }

  return (
    <NotificationContext.Provider value={{ state, setNotification }}>
      {props.children}
    </NotificationContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useNotification = () => {
  return useContext(NotificationContext)
}
