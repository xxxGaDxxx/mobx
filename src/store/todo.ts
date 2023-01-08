import {makeAutoObservable} from "mobx";
import axios from "axios";

type TodoType = {
  id: number
  title: string
  completed: boolean
}

const initialState: TodoType[] = [
  {id: 10000, title: 'Сходи в магазин', completed: false},
  // {id: 2, title: 'Разберить с mobx', completed: false},
  // {id: 3, title: 'Порадуйся', completed: false},
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

  fetchTodos() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        console.log(res)
        return res.data
      })
      .then(data => {
        this.todos = [...this.todos, ...data]
      })
  }

}

export default new Todo()