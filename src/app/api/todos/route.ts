import { db } from '@/db' 
import { todos } from '@/db/schema'
import { asc } from 'drizzle-orm'

export async function GET(request: Request) {
  const data = await db.select().from(todos).orderBy(asc(todos.id))
  
  return Response.json(data)
}

export async function POST(request: Request) {
  const body = await request.json()

  await db.insert(todos).values(body)

  return Response.json({message: "Added todo"})
}