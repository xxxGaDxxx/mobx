import React from "react";
import {Todo} from "./todo";
import {Counter} from "./counter";


type RootStateContextValue = {
  todos: Todo,
  counter: Counter
}

const RootStateContext = React.createContext<RootStateContextValue>(
  {} as RootStateContextValue
)

const todos = new Todo()
const counter = new Counter()

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <RootStateContext.Provider value={{todos, counter}}>
      {children}
    </RootStateContext.Provider>
  )
}

export const useRootStore = () => React.useContext(RootStateContext)
