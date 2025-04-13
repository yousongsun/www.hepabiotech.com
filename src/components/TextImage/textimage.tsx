import Link from 'next/link';
export const TextImage: React.FC = () => {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            关于我们
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            欢迎来到
            HepaBiotech！我们致力于推动生物技术解决方案，为更健康的未来做出贡献。
            我们的专家团队专注于生物技术领域的创新与卓越。我们的使命是提供尖端的研究和产品，对人们的生活产生积极的影响。
            感谢您访问我们的网站并了解更多关于我们的信息。我们期待与您合作，共同推动生物技术的未来。
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              href="/about"
              className="inline-block rounded-sm bg-[#02548d] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#02548d]/80"
            >
              了解更多
            </Link>
          </div>
        </div>
      </div>

      <img
        alt=""
        src="https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
};
