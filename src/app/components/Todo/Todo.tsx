'use client'

import { Todo } from '@/app/types/todo'
import { deleteTodo, updateTodo } from '@/services/todos'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Props = {
  todo: Todo
}

export default function TodoComp({ todo }: Props) {
  const router = useRouter()

  const handleDelete = async () => {
    await deleteTodo(todo.id)

    router.push('/')
    router.refresh()
  }

  const handleCompleted = async () => {
    await updateTodo(todo.id, !todo.completed)

    router.refresh()
  }

  return (
    <li className="flex justify-between gap-4">
      <div className="flex gap-2">
        <input type="checkbox" checked={todo.completed} onChange={handleCompleted} />
        <Link href={`/todos/${todo.id}`}>{todo.text}</Link>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}
