import { Search } from '@/components/Search';
import Image from 'next/image';

export default function SearchPage() {
  return (
    <>
      <div className="relative w-full h-60 md:h-92">
        <Image
          src="https://placehold.co/1200x300/png?text=Search+Page"
          alt="Search"
          fill
          className="object-cover"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-6xl font-bold drop-shadow-lg">
            Search Page
          </span>
        </div>
      </div>

      <Search />
    </>
  );
}
