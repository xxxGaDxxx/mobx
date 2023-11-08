import React, {useEffect} from 'react';
import './App.module.scss';
import {Login} from "../features/auth/Login";
import {Route, Routes} from "react-router-dom";
import {TodolistList} from "../features/todolist/TodolistList";
import {observer} from "mobx-react-lite";
import {useRootStore} from "../store/RootStateContext";
import {autorun} from "mobx";


export const App = observer(() => {
  const {app} = useRootStore()

  useEffect(() => {
    // console.log('effect')
    autorun(async () => {
      await app.initializeAppTC()
    })
  }, [])

  if (!app.initialState.isInitialized) {
    console.log('app.initialState.isInitialized', app.initialState.isInitialized)
    return <div
      style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
      loading
    </div>
  }


  return (
    <div className="App">
      <Routes>
        <h2>main new commit</h2>
        <Route path="/" element={<TodolistList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>}/>
      </Routes>
    </div>
  );
})
