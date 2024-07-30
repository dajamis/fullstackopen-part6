import React from 'react'
import { useNotification } from '../NotificationContext'


const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  const { state } = useNotification()

  if (!state) {
    return null
  }

  return (
    <div style={style}>
      {state}
    </div>
  )
}

export default Notification