"use client"
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import {RxDrop, RxPencil2} from 'react-icons/rx'
import ServiceSlider from "./ServiceSlider";
import Circles from "./Circles";
import Bulb from "./Bulb";
import ServiceSlider3D from "./ServiceSliderTwo";


const MainServicesComponent = () => {
 
  return (
      <div className="relative px-8 sm:mt-20 rounded-3xs bg-sendblack flex flex-col pt-[160px] sm:pt-[40px] text-center  text-gray-white font-playfair-display ">
              <motion.div
                initial={{y:30, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 0.5}} 
                className="zzflex justify-start flex-row text-left mb-10 sm:mb-0">
                  <AnimatedText text={`Enfoque en`} text2={`Servicio Centrado`} text3={`en el Paciente`} className="text-53xl md:text-21xl"/>
              
            </motion.div>
        <div className=" w-full">
          
          
            <div className="w-full flex flex-row md:flex-col">
            
              <motion.div 
                initial={{y:30, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 0.6}} 
                className="w-[40%] md:w-full top-0 flex flex-col py-0 pr-[40px] md:pr-[0px] box-border items-start justify-start gap-[48px] text-whitesmoke-100 md:self-stretch mb-[40px]">
              
              
                <AnimatedText descrp={`Nos enorgullecemos de brindar un valor incomparable a los pacientes que atendemos. Nuestros cirujanos plásticos certificados por la junta de Arizona entienden que usted tiene necesidades y  objetivos únicos, y tiene la amplia experiencia y habilidades artísticas para lograr los resultados deseados, ya sea que busque cirugía de senos, contorno corporal, procedimientos faciales o  rejuvenecimiento de la piel.`} className="jusify-start text-left"/>
                <motion.a
                   initial={{y:30, opacity:0 }} 
                   whileInView={{y:0, opacity: 1 }} 
                   transition={{duration: 0.7}} 
                   href="/contacto"
                >
                  <motion.button 
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                 
                  className="cursor-pointer [border:none] px-10 py-5  sm:px-5 bg-black  items-start justify-center">
                  <div className="self-stretch relative ">
                    
                    <h4 className="m-0  top-[14.5px] left-[25px] text-[24px] sm:text-[18px] pr-5 font-medium font-barlow-condensed text-gray-white text-center inline-block ">
                      Solicitar consulta
                    </h4>
                    <img
                      className="w-[30.5px] sm:w-[25.5px] h-full object-cover"
                      alt=""
                      src="/arrow-5.png"
                    />
                  </div>
                </motion.button>

                </motion.a>
                
              </motion.div>
              <motion.div 
                initial={{y:30, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 1.5 }} 
                className="w-[60%] md:w-[88%] sm:w-[90%] sm:h-full h-full bg-black py-9 px-8 md:px-6 sm:px-4 flex  text-mid rounded-md m-0 md:m-2 sm:m-0">
               <ServiceSlider3D />
               
              </motion.div>

            </div>
        </div>
      </div>
      
  );
};

export default MainServicesComponent;
