import React from "react";
import {Todo} from "./todo";
import {Counter} from "./counter";
import {AppLoading} from './appLoading'
import {Auth} from './login'

type RootStateContextValue = {
  todos: Todo,
  counter: Counter
  app:AppLoading
  auth:Auth
}

const RootStateContext = React.createContext<RootStateContextValue>(
  {} as RootStateContextValue
)

const todos = new Todo()
const counter = new Counter()
export const app = new AppLoading()
export const auth = new Auth()

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <RootStateContext.Provider value={{todos, counter,app,auth}}>
      {children}
    </RootStateContext.Provider>
  )
}

export const useRootStore = () => React.useContext(RootStateContext)
