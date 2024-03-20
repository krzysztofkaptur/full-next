import Todo from '@/app/components/Todo'
import { fetchTodo } from '@/services/todos'

export const revalidate = 0

export default async function TodoPage({params}: any) {
  const todo = await fetchTodo(params.id)

  return <Todo todo={todo} />
}