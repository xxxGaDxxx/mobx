import React from 'react';
import todo from './store/todo'
import {observer} from "mobx-react-lite";

export const Todo = observer(() => {
  console.log('todo')
  return (
    <div>
      {todo.todos.map(t =>
        <div key={t.id}>
          <input type='checkbox' onChange={() => todo.completedTodo(t.id)} checked={t.completed}/>
          <p>{t.title}</p>
          <button onClick={() => todo.removeTodo(t.id)}>X</button>
          <button onClick={() => todo.addTodo({id: 5, title: '5000', completed: false})}>+</button>
        </div>
      )}
    </div>
  );
});
