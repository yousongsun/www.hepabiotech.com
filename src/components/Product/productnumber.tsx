import Image from 'next/image';
import Link from 'next/link';

export const ProductNumber: React.FC = () => {
  return (
    <div className="w-full max-w-screen-2xl px-4 md:px-5 lg:px-5 mx-auto">
      <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
        <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
          <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
            <Image
              className=" rounded-xl object-cover"
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1486825586573-7131f7991bdd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="about Us image"
            />
          </div>
          <Image
            className="sm:ml-0 ml-auto rounded-xl object-cover"
            width={500}
            height={500}
            src="https://images.unsplash.com/photo-1552256031-811fa8f0a7b1?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about Us image"
          />
        </div>
        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
          <div className="w-full flex-col justify-center items-start gap-8 flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
              <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal lg:text-start text-center">
                产品与服务
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                我们的产品和服务涵盖了生物技术的各个方面，包括基因组学、蛋白质组学、细胞生物学等领域。我们致力于为客户提供高质量的产品和专业的服务，以满足他们在研究和开发中的需求。
                我们的团队由经验丰富的科学家和工程师组成，他们在各自的领域中拥有深厚的专业知识。我们不断努力推动技术的进步，以便为客户提供最先进的解决方案。
                我们的使命是通过创新和卓越的服务来推动生物技术的发展。我们相信，通过我们的努力，我们可以为人类健康和科学进步做出积极的贡献。
              </p>
            </div>
            <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
              <div className="flex-col justify-start items-start inline-flex">
                <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                  4+
                </h3>
                <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                  年经验
                </h6>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                  125+
                </h4>
                <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                  成功案例
                </h6>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                  52+
                </h4>
                <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                  客户
                </h6>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-8">
            <Link
              href="/products"
              className="inline-block rounded-sm bg-[#02548d] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#02548d]/80"
            >
              了解更多
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
