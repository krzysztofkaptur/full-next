'use client'

import { addTodo } from '@/services/todos'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FormComp() {
  const [value, setValue] = useState('')
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await addTodo({
      text: value,
      completed: false
    })

    router.push('/')
    router.refresh()
  }

  return <form onSubmit={onSubmit}>
    <div>
      <input type="text" value={value} onChange={handleChange} placeholder="New todo" />
    </div>
  </form>
}