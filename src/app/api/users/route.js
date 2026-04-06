export async function GET() {
  const users = [
    { id: 1, name: "John", email: "john@gmail.com" },
    { id: 2, name: "Cathy", email: "cathy@gmail.com" },
  ];
  return Response.json(users);
}