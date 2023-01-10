import {instance} from "./config";
import {AxiosResponse} from "axios";

export const authAPI = {
  login(data: LoginParamsType) {
    return instance.post<LoginParamsType, AxiosResponse<ResponseType<{ userId: string }>>>('auth/login', data)
  },

  me() {
    return instance.get<ResponseType<{ id: string, email: string, login: string }>>('auth/me')
  },

  logout() {
    return instance.delete<ResponseType>('auth/login')
  },
}


//types

export type LoginParamsType = {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: string
}

export type TodolistType = {
  id: string
  title: string
  addedDate: string
  order: number
}

export type FieldsErrorsType = {
  field: string
  message: string
}

export type ResponseType<D = {}> = {
  messages: string[]
  fieldsErrors: FieldsErrorsType[]
  resultCode: number
  data: D
}
export type GetTaskResponseType = {
  error: string | null
  fieldsErrors: string[]
  totalCount: number
  items: TaskType[]
}

export enum TaskStatuses {
  New = 0,
  InProgress = 1,
  Completed = 2,
  Draft = 3,
}

export enum TaskPriorities {
  Low = 0,
  Middle = 1,
  Hi = 2,
  Urgently = 3,
  Later = 4,
}

export type TaskType = {
  id: string
  title: string
  description: string
  todoListId: string
  order: number
  status: TaskStatuses
  priority: TaskPriorities
  startDate: string
  deadline: string
  addedDate: string
  entityStatus: RequestStatusType
}
export type UpdateTaskType = {
  title: string
  description: string
  status: TaskStatuses
  priority: TaskPriorities
  startDate: string
  deadline: string
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'