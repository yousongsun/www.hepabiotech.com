import { Contact } from '@/components/Contact';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <Image
        src="https://placehold.co/1200x300/png?text=Contact+Page"
        alt="Contact"
        width={500}
        height={300}
        className="w-full h-60  md:h-92 object-cover"
      />

      <Contact />
    </>
  );
}
