import React, { useState } from "react";
import apiClient from "../../helpers/http.js";

const TodoForm = (props) => {
  const {onSuccess} = props
  const [value, setValue] = useState([])
  const [loading, setLoading] = useState(false)

  const add = async () => {
    try {
      setLoading(true)
      const {data} = await apiClient.post('todos', {
        "name": value,
        "status": false,
      })
      onSuccess?.(data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <input
        type="text"
        id="new-todo-input"
        value={value}
        onChange={event => setValue(event.target.value)}
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg" onClick={add} disabled={loading}>
        {loading ? 'Saving' : 'Add'}
      </button>
    </div>
  )
}

export default TodoForm