"use client"
import ReactCompareImage from 'react-compare-image';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ViewResultsComponent = () => {
  return (
    <section className=" w-full flex flex-row flex-wrap pt-[140px]  items-center justify-between text-right text-39xl sm:text-21xl text-gray-white font-playfair-display">
      <div className="w-full sm:w-[80%] p-12 sm:p-2 flex-1 flex flex-row md:flex-col  items-center justify-center">
            <motion.div
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.7}}
              className='px-5 flex max-w-full' 
            >
              <h2 className="hidden md:block text-center pb-10  m-0 self-stretch relative text-inherit tracking-[0.07em] leading-[138%] font-semibold font-inherit">
                      <p className="m-0">Viualiza Tus</p>
                      <p className="m-0">
                        <span>{`Resultados `}</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600 ">
                          Naturales.
                        </span>
                      </p>
              </h2>
            </motion.div>
            
        <motion.div 
          initial={{y:30, opacity:0 }} 
          whileInView={{y:0, opacity: 1 }} 
          transition={{duration: 0.7}} 
          className="w-[50%] sm:w-[80%] pb-20 flex-1 flex flex-col items-start md:items-center justify-between [transform:_rotate(-0.24deg)] [transform-origin:0_0]">
         
          <ReactCompareImage leftImage="/Tummy-Tuck-Before.jpg" rightImage="/Tummy-Tuck-After.jpg" className="relative rounded-3xs w-full h-[493.42px] "/>

        </motion.div>
        <button className="flex-row hidden md:flex items-center justify-center gap-x-4 bg-black cursor-pointer [border:none] p-0 bg-[transparent] relative w-full h-[74px]">
            
            <p className="flex-row m-0 a text-15xl tracking-[0.12em] leading-[123%] font-medium font-barlow-condensed text-gray-white text-center flex ">
              Ver galeria 
            </p>
            <Image width={20} height={20}
              className="flex-row flex h-[22.09px] object-cover"
              alt=""
              src="/arrow-51.png"
            />
          </button>
        <div className="pl-5 flex-1 flex flex-col items-center justify-between [transform:_rotate(-0.24deg)] [transform-origin:0_0]">
          <div className="md:hidden flex flex-col items-end justify-center gap-[92px] [transform:_rotate(0.24deg)] [transform-origin:0_0]">
            <motion.div
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.7}} 
            >
              <AnimatedText text={`Viualiza Tus`} text2={`Resultados`} text3={`Naturales.`}/>
            </motion.div>
            
            
            <motion.button 
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.8}} 
              className="w-[70%] cursor-pointer bg-black [border:none] p-0 bg-[transparent] relative h-[74px]">
            
              <h4 className="m-0 absolute top-[14px] left-[40.81px] text-15xl tracking-[0.12em] leading-[123%] font-medium font-barlow-condensed text-gray-white text-center inline-block ">
                Ver galeria 
              </h4>
              <Image width={20} height={20}
                className="absolute top-[26.45px] left-[343.97px] w-[34.5px] h-[22.09px] object-cover"
                alt=""
                src="/arrow-51.png"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewResultsComponent;
