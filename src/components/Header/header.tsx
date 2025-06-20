'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white relative">
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
                  viewBox="0 0 30 30"
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
                onClick={toggleMobileMenu}
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
            <div className="flex h-full flex-col">
              {/* Header with close button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">菜单</h2>
                <button
                  type="button"
                  onClick={closeMobileMenu}
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
                    <title>Close Menu</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-6">
                  {/* Main Navigation */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">导航菜单</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="block text-gray-700 text-lg transition hover:text-[#02548d]"
                          href="/"
                        >
                          首页
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="block text-gray-700 text-lg transition hover:text-[#02548d]"
                          href="/about"
                        >
                          关于合珀生物
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="block text-gray-700 text-lg transition hover:text-[#02548d]"
                          href="/products"
                        >
                          产品与服务
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="block text-gray-700 text-lg transition hover:text-[#02548d]"
                          href="/news"
                        >
                          新闻动态
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="block text-gray-700 text-lg transition hover:text-[#02548d]"
                          href="/careers"
                        >
                          招贤纳士
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="block text-gray-700 text-lg transition hover:text-[#02548d]"
                          href="/contact"
                        >
                          联系我们
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* About Section */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">关于合珀生物</h3>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="text-gray-700 transition hover:text-gray-700/75"
                          href="/about"
                        >
                          关于我们
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="text-gray-700 transition hover:text-gray-700/75"
                          href="/about"
                        >
                          我们的使命
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="text-gray-700 transition hover:text-gray-700/75"
                          href="/about"
                        >
                          我们的团队
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Products & Services */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">产品与服务</h3>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="text-gray-700 transition hover:text-gray-700/75"
                          href="/products"
                        >
                          产品与服务1
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="text-gray-700 transition hover:text-gray-700/75"
                          href="/products"
                        >
                          产品与服务2
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="text-gray-700 transition hover:text-gray-700/75"
                          href="/products"
                        >
                          产品与服务3
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="text-gray-700 transition hover:text-gray-700/75"
                          href="/products"
                        >
                          产品与服务4
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Company News */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">公司动态</h3>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="text-gray-700 transition hover:text-gray-700/75"
                          href="/news"
                        >
                          新闻动态
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="text-gray-700 transition hover:text-gray-700/75"
                          href="/careers"
                        >
                          招贤纳士
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Contact Section */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">联系我们</h3>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="text-gray-700 transition hover:text-gray-700/75"
                          href="/contact"
                        >
                          联系我们
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          className="text-gray-700 transition hover:text-gray-700/75"
                          href="/"
                        >
                          在线留言
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Service Hotline */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">服务热线</h3>
                    <div className="mb-4">
                      <Link
                        onClick={closeMobileMenu}
                        href="tel:13386020808"
                        className="text-xl font-semibold text-gray-900"
                      >
                        13386020808
                      </Link>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src="/images/wechat.jpg"
                        alt="WeChat"
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
