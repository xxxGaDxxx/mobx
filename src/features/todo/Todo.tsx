import React from 'react';
import {observer} from "mobx-react-lite";
import {useRootStore} from "../../store/RootStateContext";

export const Todo = observer(() => {
  const {todos} = useRootStore()

  return (
    <div>
      {todos.todos.map(t =>
        <div key={t.id}>
          <input type='checkbox' onChange={() => todos.completedTodo(t.id)} checked={t.completed}/>
          <p>{t.title}</p>
          <button onClick={() => todos.removeTodo(t.id)}>X</button>
          <button onClick={() => todos.fetchTodos()}>+</button>
        </div>
      )}
    </div>
  );
});
