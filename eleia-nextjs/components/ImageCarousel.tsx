'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
    title?: string
    subtitle?: string
  }[]
  autoplay?: boolean
  showNavigation?: boolean
  showPagination?: boolean
  aspectRatio?: string
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoplay = false,
  showNavigation = true,
  showPagination = true,
  aspectRatio = 'aspect-[16/9]',
}) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={showNavigation}
        pagination={showPagination ? { clickable: true } : false}
        autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={`relative ${aspectRatio} overflow-hidden`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              
              {/* Overlay Content */}
              {(image.title || image.subtitle) && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="text-center text-white">
                    {image.title && (
                      <h2 className="font-display text-4xl md:text-6xl mb-4 fade-up">
                        {image.title}
                      </h2>
                    )}
                    {image.subtitle && (
                      <p className="text-lg md:text-xl font-light tracking-wide fade-up">
                        {image.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #FAF9F6;
          background-color: rgba(62, 54, 45, 0.5);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          transition: all 0.3s;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background-color: rgba(62, 54, 45, 0.8);
        }

        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 20px;
        }

        .swiper-pagination-bullet {
          background-color: #FAF9F6;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background-color: #FAF9F6;
        }
      `}</style>
    </div>
  )
}

export default ImageCarousel