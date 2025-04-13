'use client';

import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slide: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen overflow-hidden">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, type: 'bullets' }}
        autoplay={{
          delay: 3000,
          reverseDirection: false,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="relative w-full h-128 bg-red-500 flex items-center justify-center">
            <h2 className="text-white text-3xl">Slide 1</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-128 bg-green-500 flex items-center justify-center">
            <h2 className="text-white text-3xl">Slide 2</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-128 bg-blue-500 flex items-center justify-center">
            <h2 className="text-white text-3xl">Slide 3</h2>
          </div>
        </SwiperSlide>
      </Swiper>
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 120px;
          height: 3px;
          border-radius: 9999px;
          background: #d1d5db;
          opacity: 1;
          transition: background 0.3s;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          background: #fff;
        }
`}</style>
    </div>
  );
};
