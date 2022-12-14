import React, { useEffect, useState } from "react";
import TodoForm from "./form";
import TodoList from "./list";
import apiClient from "../../helpers/http.js";

const Todo = () => {
  const [items, setItems] = useState([])

  const fetchTodos = async () => {
    const {data} = await apiClient.get('todos');
    setItems(data)
  }

  useEffect(() => {
    fetchTodos().catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <TodoForm onSuccess={fetchTodos}/>
      <TodoList items={items} onSuccess={fetchTodos}></TodoList>
    </div>
  )
}

export default Todo