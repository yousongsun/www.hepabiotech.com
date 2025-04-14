import Image from 'next/image';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="flex h-20 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block" href="/">
              <span className="sr-only">Home</span>
              <Image src="/images/logo.jpg" alt="Logo" width={60} height={60} />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-700 text-xl transition hover:text-[#02548d] hover:underline hover:decoration-2 hover:underline-offset-8"
                    href="/"
                  >
                    首页
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 text-xl transition hover:text-[#02548d] hover:underline hover:decoration-2 hover:underline-offset-8"
                    href="/about"
                  >
                    关于合珀生物
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 text-xl transition hover:text-[#02548d] hover:underline hover:decoration-2 hover:underline-offset-8"
                    href="/products"
                  >
                    产品与服务
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 text-xl transition hover:text-[#02548d] hover:underline hover:decoration-2 hover:underline-offset-8"
                    href="/news"
                  >
                    新闻动态
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 text-xl transition hover:text-[#02548d] hover:underline hover:decoration-2 hover:underline-offset-8"
                    href="/careers"
                  >
                    招贤纳士
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 text-xl transition hover:text-[#02548d] hover:underline hover:decoration-2 hover:underline-offset-8"
                    href="/contact"
                  >
                    联系我们
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-[#02548d]"
                href="/search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <title>Search</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </Link>
            </div>

            <div className="block md:hidden">
              <button
                type="button"
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <title>Menu</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
