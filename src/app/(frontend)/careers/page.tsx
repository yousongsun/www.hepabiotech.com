import Image from 'next/image';
export default function CareersPage() {
  return (
    <>
      <Image
        src="https://images.unsplash.com/photo-1713947504519-755547cf930e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Careers"
        width={500}
        height={300}
        className="w-full h-60  md:h-92 object-cover"
      />
      <h1>Careers</h1>
    </>
  );
}
