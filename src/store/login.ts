import {makeAutoObservable} from "mobx";
import {authAPI, LoginParamsType} from "../api/api";
import {app} from './RootStateContext'


export class Auth {
  initialState = {
    isLoggedIn: false
  }

  constructor() {
    makeAutoObservable(this)
  }

  loggedIn =(value:boolean)=>{
    console.log('this.initialState.isLoggedIn ',this.initialState.isLoggedIn )
    this.initialState.isLoggedIn = value

  }


  loginTC = async (params: LoginParamsType) => {
    app.statusSPA('loading')
    const {data} = await authAPI.login(params)
    if (data.resultCode === 0) {
      this.loggedIn(true)
      app.statusSPA('succeeded')
    }
  }



  logoutTC = async () => {
    const {data} = await authAPI.logout()
    if (data.resultCode === 0) {
      this.loggedIn(false)
    }
  }

}