import { About } from '@/components/About';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Image
        src="https://images.unsplash.com/photo-1634482899780-6ac6b92c656e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="About"
        width={500}
        height={300}
        className="w-full h-60  md:h-92 object-cover"
      />

      <About />
    </>
  );
}
