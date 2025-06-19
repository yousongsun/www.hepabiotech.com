import { Card } from '@/components/Card';
import Image from 'next/image';

export default function NewsPage() {
  return (
    <>
      <Image
        src="https://placehold.co/1200x300/png?text=News+Page"
        alt="News"
        width={500}
        height={300}
        className="w-full h-60  md:h-92 object-cover"
      />

      <h1>News</h1>

      <Card />
    </>
  );
}
