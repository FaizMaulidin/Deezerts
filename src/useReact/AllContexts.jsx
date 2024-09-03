import React from 'react'
import { createContext } from "react";

export const DataContext = createContext()
export const DispatchContext = createContext()
export const ConfirmContext = createContext()
export const SetConfirmContext = createContext()

const AllContexts = ({children, data, setData, confirm, setConfirm}) => {
  return (
    <DataContext.Provider value={data}>
        <DispatchContext.Provider value={setData}>
          <ConfirmContext.Provider value={confirm}>
            <SetConfirmContext.Provider value={setConfirm}>
              {children}
            </SetConfirmContext.Provider>
          </ConfirmContext.Provider>
        </DispatchContext.Provider>
    </DataContext.Provider>
  )
}

export default AllContexts