import {makeAutoObservable} from "mobx";

type TodoType = {
  id: number
  title: string
  completed: boolean
}

const initialState: TodoType[] = [
  {id: 1, title: 'Сходи в магазин', completed: false},
  {id: 2, title: 'Разберить с mobx', completed: false},
  {id: 3, title: 'Порадуйся', completed: false},
]

class Todo {
  todos = initialState

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo: TodoType) {
    this.todos.push(todo)
  }

  removeTodo(id: number) {
    console.log('removeTodo')
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  completedTodo(id: number) {
    console.log('completedTodo')
    this.todos = this.todos.map(todo => todo.id === id
      ? {...todo, completed: !todo.completed}
      : todo)
  }

}

export default new Todo()