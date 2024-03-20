export async function GET(request: Request, { params }: { params: { id: string } }) {
  const data = await fetch(`http://localhost:5000/todos/${params.id}`).then(res => res.json())
  
  return Response.json(data)
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await fetch(`http://localhost:5000/todos/${params.id}`, {
    method: "DELETE"
  })

  return Response.json({message: "Todo deleted"})
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json()

  await fetch(`http://localhost:5000/todos/${params.id}`, {
    method: "PATCH",
    body: JSON.stringify(body)
  })

  return Response.json({message: "Todo updated"})
}