import { SwiperSlide, Swiper } from "swiper/react";
import { testimonials } from "@/app/testimoniolsdata";
import AnimatedText from "./AnimatedText";
import { FreeMode ,Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import { motion } from "framer-motion";
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const TestimonialsComponent = () => {
  return (
    <section className="rounded-3xs bg-sendblack flex flex-col items-center justify-start relative text-left text-lg text-silver-100">

      <div className="container mt-12 items-center justify-center"> 
          <div className="my-0 mx-auto top-[70px] flex flex-col py-0 px-[28px] box-border items-center justify-start gap-[17px] z-[1] text-center text-gray-white font-playfair-display">
            <div className="self-stretch flex flex-col items-center justify-center relative ">
              <motion.div
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.5}} 
              >
                <AnimatedText text="Testimonios que Hablan Por" text2="Nuestros Resultados" className="sm:text-2xl text-21xl"/>
              </motion.div>
              <motion.p 
                initial={{y:30, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 0.7}} 
                className="">El cuidado del paciente siempre es nuestra prioridad, es por eso que el 100% de los pacientes que nos visitan tienen la mejor experiencia en cirugía plástica
                </motion.p>
            </div>
          </div>
          {/**Testimonials Slider */}

          <motion.div
            initial={{y:30, opacity:0 }} 
            whileInView={{y:0, opacity: 1 }} 
            transition={{duration: 0.9}} 
          >
            <Swiper
              effect={`coverflow`}
              grabCursor={ true }
              centeredSlides= { true }
              loop={ true }
              slidesPerView={ 'auto' }
              coverflowEffect={
                {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }
              }
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
        
                640: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
        
              }}
              pagination={{ el:'.swiper-pagination', clickable:true}}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true
              }}
              modules={[ Navigation, Pagination, EffectCoverflow ]}
              className='w-[90%] sm:w-full swiper-container h-full justify-center items-center m-auto relative'
            >
                <div className="flex flex-col my-0 mx-auto bottom-[-0.33px] z-[10]">
              
              {
                testimonials.map((testimonial, index) => {

                  return (
                    <SwiperSlide key={index}>
                      <div className='h-[100%] inline-block align-middle px-3 py-20 lg:py-10 relative'>
                      
                        <div className="p-5 flex flex-col relative top-[30.34px] rounded-lgi bg-gray-400 w-[98%] text-dimgray-200">
                        <div className="rate flex-row">
                            <Image width={200} height={20} quality={100}
                              className="relative flex flex-row top-[21.94px] left-[17.37px] w-[146.29px] h-[32.91px] object-cover"
                              alt=""
                              src="/stars1.png"
                            />
                            <div className="relative flex flex-row  top-[-10.94px] left-[168.23px] text-6xl leading-[146%] font-medium text-gainsboro-100 w-[39.31px] h-[31.09px]">
                              {testimonial.rating}
                            </div>
                            
                          </div>
                        <div className="max-w-full">
                        <p className="m-0 p-3 text-4xl leading-[118%] font-medium text-silver-100  flex">
                            {testimonial.message}
                          </p>
                        </div>
                          
                          <div className="author flex flex-row">
                            <Image width={50} height={50} quality={100}
                              className="flex flex-row pl-3 w-[52.11px] h-[52.11px] object-cover mr-4"
                              alt=""
                              src="/testimonial-1-avatar.png"
                            />
                          <div className="flex flex-col">
                              <div className="leading-[146%] font-medium text-darkgray-100 inline-block">
                                {testimonial.position}
                                </div>
                                <div className="leading-[123%] font-medium font-barlow-condensed text-gainsboro-300 inline-block ">
                                  {testimonial.name}
                              </div>
                          </div>
                          </div>
                          <h1 className="m-0 absolute bottom-5 right-5 text-53xl leading-[68.5%] font-medium text-center inline-block w-[95.09px] h-[85.03px]">
                            <span className="font-poppins">❞</span>
                          </h1>
                        </div>
                      </div>
                      
                    </SwiperSlide>
                  
                  
                  )
                })
              }
            
            </div>
            <div className='slider-controller'>
                
                <div className='swiper-pagination'></div>
              </div>
                  
            </Swiper>
            
           </motion.div>
         

      </div>
      

    </section>
  );
};

export default TestimonialsComponent;
