import Image from 'next/image';
import Link from 'next/link';
import { ProductNumber } from '../Product';
import { TextImageSquare, TextImageUpDown } from '../TextImage/textimage';

export const About: React.FC = () => {
  return (
    <>
      <TextImageSquare
        title="关于合珀生物"
        description="欢迎来到
                HepaBiotech！我们致力于推动生物技术解决方案，为更健康的未来做出贡献。
                我们的专家团队专注于生物技术领域的创新与卓越。我们的使命是提供尖端的研究和产品，对人们的生活产生积极的影响。
                感谢您访问我们的网站并了解更多关于我们的信息。我们期待与您合作，共同推动生物技术的未来。"
        buttonText=""
        buttonLink=""
        imageUrl="https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <section className="py-24 bg-gray-50">
        <ProductNumber />
      </section>
      <TextImageUpDown
        title="我们的团队"
        description="欢迎来到
                      HepaBiotech！我们致力于推动生物技术解决方案，为更健康的未来做出贡献。
                      我们的专家团队专注于生物技术领域的创新与卓越。我们的使命是提供尖端的研究和产品，对人们的生活产生积极的影响。
                      感谢您访问我们的网站并了解更多关于我们的信息。我们期待与您合作，共同推动生物技术的未来。"
        buttonText=""
        buttonLink=""
        imageUrl="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </>
  );
};
