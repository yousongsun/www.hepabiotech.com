import { About } from '@/components/About';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Image
        src="https://placehold.co/1200x300/png?text=About+Page"
        alt="About"
        width={500}
        height={300}
        className="w-full h-60  md:h-92 object-cover"
      />

      <About />
    </>
  );
}
