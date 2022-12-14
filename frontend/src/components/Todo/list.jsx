import React, { useState } from "react";
import apiClient from "../../helpers/http.js";

const TodoList = (props) => {
  const {
    items,
    onSuccess
  } = props

  const [loading, setLoading] = useState(null)

  const destroy = async (id) => {
    try {
      setLoading(id)
      const {data} = await apiClient.delete(`todos/${id}`)
      onSuccess?.(data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(null)
    }
  }
  return (
    <div>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {items.map(item => {
          return (
            <li className="todo stack-small">
              <div className="c-cb">
                <label className="todo-label" htmlFor="todo-0">
                  {item.name}
                </label>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn__danger" onClick={() => destroy(item.id)}>
                  {loading === item.id ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList