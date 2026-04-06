export async function GET() {
  const products = [
    {
      id: 1,
      name: "Apple Laptop",
      price: 90874,
      desc: "Description of the product",
    },
    {
      id: 2,
      name: "Dell Laptop",
      price: 70874,
      desc: "Description of the product",
    },
    {
      id: 3,
      name: "HP Laptop",
      price: 60874,
      desc: "Description of the product",
    },
  ];
  return Response.json(products);
}