import React, { createContext, useContext, useState } from 'react';

interface Props {
  ShowModal?: string
  setShowModal?: any
  Value?: string
  setValue?: string
}

export const ModalContext = createContext({} as Props)

const ModalProvider: React.FC = ({children}) => {

  const [ShowModal, setShowModal]:any = useState(false)
  const [Value, setValue]:any = useState()

  return (
    <ModalContext.Provider value={{ ShowModal, setShowModal,Value, setValue  }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider;
