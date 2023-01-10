import React from 'react';
import {observer} from "mobx-react-lite";
import {Navigate} from "react-router-dom";
import {useRootStore} from "../../store/RootStateContext";

export const TodolistList = observer(() => {
  const {auth} = useRootStore()
  const isLoggedIn = auth.initialState.isLoggedIn
  console.log(111)

  console.log('isLoggedIn',isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to={'/login'}/>
  }

  return (
    <div>
      TodolistList
    </div>
  );
});
