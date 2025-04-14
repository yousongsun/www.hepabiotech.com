import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 pt-4 pb-4 sm:px-6 lg:px-8">
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-100 pt-4 md:grid-cols-4 lg:grid-cols-6">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">关于合珀生物</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/about"
                >
                  关于我们
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/about"
                >
                  我们的使命
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/about"
                >
                  我们的团队
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">产品与服务</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/products"
                >
                  产品与服务1
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/products"
                >
                  产品与服务2
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/products"
                >
                  产品与服务3
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/products"
                >
                  产品与服务4
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">公司动态</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/news"
                >
                  新闻动态
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/careers"
                >
                  招贤纳士
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">联系我们</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/contact"
                >
                  联系我们
                </Link>
              </li>

              <li>
                <Link
                  className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href="/"
                >
                  <span className="text-gray-700 transition group-hover:text-gray-700/75">
                    在线留言
                  </span>

                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#02548d]/60 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-[#02548d]/75" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
            <p className="text-lg text-gray-900 font-bold">服务热线</p>

            <div className="mx-auto mt-6 max-w-md sm:ms-0">
              <Link
                href="tel:13386020808"
                className="text-center text-xl leading-relaxed text-gray-900 ltr:sm:text-left rtl:sm:text-right"
              >
                13386020808
              </Link>
            </div>

            <div className="flex gap-3 mt-2 justify-center sm:justify-start">
              <Image
                src="/images/wechat.jpg"
                alt="WeChat"
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-4 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2022-{new Date().getFullYear()} 上海合珀生物科技有限公司 All
          rights reserved.
        </p>

        <p className="text-center text-base text-gray-400">
          <Link
            className="txt-color-white"
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noreferrer"
          >
            沪ICP备2025000001号-1
          </Link>
        </p>
      </div>
    </footer>
  );
};
