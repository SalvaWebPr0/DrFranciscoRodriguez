import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import { FreeMode ,Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import Link from 'next/link';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide_image from "../../public/card23x.png" 
import slide_image2 from "../../public/card3@3x.png"
import slide_image3 from "../../public/card4@3x.png"
import Image from "next/image";
import {RxArrowTopRight, RxPencil2} from 'react-icons/rx'

export const serviceData = [
  {
    backimage: <Image 
    src={slide_image} 
    fill
    
    alt='iamge' />,
    title: "Cara",
    description:'lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum'
  },
  {
    backimage: <Image src={slide_image2} 
    fill
    sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 33vw"	 
    alt='iamge' />,
    title: "Seno",
    description:'lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum'
  },
  {
    backimage: <Image src={slide_image3} 
    fill 
    sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 33vw"
    alt='iamge' />,
    title: "Abdomen",
    description:'lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum'
  },
  {
    backimage: <Image src={slide_image} 
    fill 
    sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 33vw"
    alt='iamge' />,
    title: "Cara",
    description:'lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum'
  },
  {
    backimage: <Image src={slide_image2} 
    fill 
    sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 33vw"
    alt='iamge' />,
    title: "Seno",
    description:'lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum'
  },
  {
    backimage: <Image src={slide_image3} 
    fill 
    sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 33vw"
    alt='iamge' />,
    title: "Abdomen",
    description:'lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum'
  },


  
  
]


const ServiceSlider = () => {
  return (
      <Swiper breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },

      }}
      freeMode="true"
      pagination={{
        clickable: true
      }}
      modules={[ FreeMode, Pagination]}
      className='h-[500px] md:h-[400px] sm:h-[540px]'
      >
        {
          serviceData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                
                <div className='h-[100%] inline-block align-middle px-4 py-20 lg:py-10 relative'>
                  <div className='relative z-10 mx-auto my-0 font-playfair-display text-5xl'>{item.title}</div>
                  <p className='relative z-10 text-base font-sans font-light'>{item.description}</p>
                  <Link href={`/`} className='
                    relative z-10 bg-black border-none text-white px-5 py-2 text-center inline-block m-auto cursor-pointer text-sm'>
                    Saber Mas...
                  </Link>
                  <div className='p-5 z-0 object-cover text-mid '>
                    {item.backimage}
                  </div>
                
                </div>
               
               
              </SwiperSlide>
          )}
        )}
      </Swiper >
      
  )
}

export default ServiceSlider