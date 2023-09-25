'use client'

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import AnimatedText from "./AnimatedText";

const AnimatedNumbers= ({ value }) => {
  const ref =useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {delay:0.5, duration: 5000 })
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])


  useEffect(() => {
    springValue.on("change", (latest) =>
    {
      if (ref.current && latest.toFixed(0) <= value ) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])
  

  
  return <span ref={ref}></span>
}



const WhyUsComponent = () => {
  return (
    <section className="mb-11 px-20 sm:px-5 w-[100%] rounded-26xl flex flex-row flex-wrap pt-[140px] sm:pt-[120px] pb-0 box-border  justify-between text-left text-14xl text-gray-white font-poppins">
      <div className="w-[50%] md:min-w-[100%] flex flex-col flex-wrap items-start justify-start gap-[30px] mb-11">
        <motion.div
        initial={{y:30, opacity:0 }} 
        whileInView={{y:0, opacity: 1 }} 
        transition={{duration: 0.5}} 
        >
           <AnimatedText text={`¿Por qué`} text2={`Operarte`} text3={`con Nosotros?`} descrp={`Usamos las tecnicas mas novedosas de la cirugía plástica estética y reconstructiva para mejorar el aspecto físico, estético, funcional y emocional  de todos y cada uno de mis pacientes sin dejar el lado humano, ético y profesional. `} className=""/>
        </motion.div>
        

        <div className="max-w-full flex flex-row flex-wrap sm:flex-col">
          <div className="flex flex-col items-start justify-start gap-[45px] text-silver-200 pr-10 pb-10 sm:px-0">
            <div className="relative tracking-[0.04em] leading-[123%] font-medium text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600 inline-block w-[98px] ">
            <AnimatedNumbers value={300}/>+
            </div>
            <h3 className="m-0 relative text-4xl leading-[146%] font-medium font-roboto inline-block w-[262px]">
              Pacientes Satidfechos
            </h3>
          </div>
        
          <div className=" flex flex-col items-start justify-start gap-[45px] text-silver-200">
            <div className="relative tracking-[0.04em] leading-[123%] font-medium text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600 inline-block w-[98px] ">
              <AnimatedNumbers value={20}/>+
            </div>
            <h3 className="m-0 relative text-4xl leading-[146%] font-medium font-roboto inline-block w-[235px]">
              Años de Experiencia
            </h3>
          </div>

          <a href="/contacto" className="w-full mt-11 flex flex-row items-start justify-start gap-[45px] text-silver-200">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-3xs bg-black w-[240px] h-[74px] z-[0] ">
              <h4 className="my-0 mx-[!important] absolute top-[14.65px] left-[32px] text-11xl tracking-[0.08em] leading-[123%] font-medium font-barlow-condensed text-gray-white text-center z-[1]">
                Contratame
              </h4>
            </button>
          </a>
        </div>

       
        
      </div>
      <motion.div 
        initial={{y:30, opacity:0 }} 
        whileInView={{y:0, opacity: 1 }} 
        transition={{duration: 0.7}} 
        className=" w-[40%] md:min-w-[100%] max-w-[100%] md:mt-[150px] sm:mt-0 flex flex-col items-center justify-center relative m-auto">
          <img
            className="max-w-[100%]  relative my-0 shrink-0  z-[1] top-[15px]"
            alt="Dr Francisco Rodriguez"
            src="/frame-79.png"
          />
        {/* <div className=" overflow-hidden my-0  left-[0px] rounded-[200%] [background:radial-gradient(50%_50%_at_50%_50%,_#8f742b,_#c1a047_21.35%,_#ebc86c_47.4%,_#a0853a_75%,_#cdaa4c)] z-[0]" >
          <img
            className="max-w-[100%]  relative my-0 shrink-0  z-[1] top-[15px]"
            alt="Dr Francisco Rodriguez"
            src="/frame-79.png"
          />
        </div> */}
      </motion.div>
    </section>
  );
};

export default WhyUsComponent;