import React, { FormEvent, Fragment, useState } from "react"
import TodoElement from "./TodoItem"

export type TodoItem = {
  id: number
  text: string
  completed: boolean
}
const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Learn TypeScript", completed: false },
    { id: 3, text: "Learn TailwindCSS", completed: false },
  ])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    )

    setTodos((state) => [
      ...state,
      { id: Date.now(), text: formData.task as string, completed: false },
    ])
  }
  const updateTask = (id: number) => {
    setTodos((state) =>
      state.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-2"
      >
        <label htmlFor="task" className="uppercase text-sm">
          Add a task
        </label>
        <input
          placeholder="My new task"
          type="text"
          name="task"
          id="task"
          className="rounded-md px-4 py-2 bg-transparent border border-black dark:border-white"
        />
        <button className="rounded-md py-2 px-8 dark:bg-gray-300 text-white dark:text-black bg-gray-700">
          Submit
        </button>
      </form>
      <h1 className="mt-8 mb-2 text-4xl font-bold">My tasks</h1>

      <ul>
        {todos.map((todo) => (
          <Fragment key={todo.id}>
            <TodoElement {...{ todo, updateTask }} />
          </Fragment>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
