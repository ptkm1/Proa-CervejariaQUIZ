import React, { createContext, useContext, useState } from 'react';

interface Props {
  time?: string
  setTime?: any
}

export const NotifyContext = createContext({} as Props)

const NotifyProvider: React.FC = ({children}) => {

  const [time, setTime]:any = useState(false)

  return (
    <NotifyContext.Provider value={{ time, setTime  }}>
      {children}
    </NotifyContext.Provider>
  )
}

export default NotifyProvider;
