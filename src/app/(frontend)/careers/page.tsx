import Image from 'next/image';
export default function CareersPage() {
  return (
    <>
      <Image
        src="https://placehold.co/1200x300/png?text=Careers+Page"
        alt="Careers"
        width={500}
        height={300}
        className="w-full h-60  md:h-92 object-cover"
      />
      <h1>Careers</h1>
    </>
  );
}
