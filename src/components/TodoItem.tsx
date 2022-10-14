import React, { FC } from "react"
import type { TodoItem } from "./TodoList"

type Props = { todo: TodoItem; updateTask: (id: number) => void }
const TodoElement: FC<Props> = ({
  todo: { id, text, completed },
  updateTask,
}) => {
  return (
    <li className="flex justify-center gap-4">
      <span className={completed ? "line-through" : ""}>{text}</span>
      {<button onClick={() => updateTask(id)}>Complete ?</button>}
    </li>
  )
}

export default TodoElement
