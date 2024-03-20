import {eq} from "drizzle-orm";

import { db } from '@/db' 
import { todos } from '@/db/schema'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const todo = await db.select().from(todos).where(eq(todos.id, +params.id))

  return Response.json(todo[0])
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await db.delete(todos).where(eq(todos.id, +params.id))

  return Response.json({message: "Todo deleted"})
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json()

  await db.update(todos).set(body).where(eq(todos.id, +params.id))

  return Response.json({message: "Todo updated"})
}