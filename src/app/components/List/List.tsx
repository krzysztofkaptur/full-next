import { fetchTodos } from '@/services/todos'
import Todo from '../Todo'

export default async function ListComp() {
  const todos = await fetchTodos()

  return <ul>
    {
      todos?.map(todo => <Todo key={todo.id} todo={todo} />)
    }
  </ul>
}