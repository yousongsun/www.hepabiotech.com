import ProductList from '@/components/Product/productlist';
import Image from 'next/image';

export default function ProductsPage() {
  return (
    <>
      <Image
        src="https://placehold.co/1200x300/png?text=Products+Page"
        alt="Products"
        width={500}
        height={300}
        className="w-full h-60  md:h-92 object-cover"
      />

      <ProductList />
    </>
  );
}
