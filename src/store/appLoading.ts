import {makeAutoObservable} from "mobx";
import {authAPI, RequestStatusType} from "../api/api";
import {auth} from './RootStateContext'




export class AppLoading {
  initialState = {
    status: 'loading' as RequestStatusType,
    error: null as string | null,
    isInitialized: false
  }

  constructor() {
    makeAutoObservable(this)
  }

  initializeAppTC = async () => {
    const {data} = await authAPI.me()

    if (data.resultCode === 0) {
      console.log(123123)

      auth.loggedIn(true)
      this.initialState.isInitialized = true
      this.statusSPA('succeeded')

      // thunkAPI.dispatch(setIsLoggedInAC({isLoggedIn: true}));
    } else {
      this.initialState.isInitialized = true
      this.statusSPA('failed')
    }
  }

  statusSPA = (status: RequestStatusType) => {
    this.initialState.status = status
  }


}