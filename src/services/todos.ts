import { Todo } from '@/app/types/todo'

export function fetchTodos(): Promise<Todo[]> {
  return fetch("http://localhost:5000/todos").then(res => res.json())
}

export function fetchTodo(id: string): Promise<Todo> {
  return fetch(`http://localhost:5000/todos/${id}`).then(res => res.json())
}

export function addTodo(data: Omit<Todo, "id">) {
  return fetch("http://localhost:5000/todos", {
    method: "POST",
    body: JSON.stringify(data)
  })
}

export function deleteTodo(id: string) {
  return fetch(`http://localhost:5000/todos/${id}`, {
    method: "DELETE"
  })
}

export function updateTodo(id: string, completed: boolean) {
  return fetch(`http://localhost:5000/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ completed })
  })
}