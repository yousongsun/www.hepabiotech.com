import Image from 'next/image';

export default function ProductsPage() {
  return (
    <>
      <Image
        src="https://images.unsplash.com/photo-1668600418915-f2ce90091da6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Products"
        width={500}
        height={300}
        className="w-full h-60  md:h-92 object-cover"
      />

      <h1>Products</h1>
    </>
  );
}
