import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const TeamComponemt = () => {
  return (
    <section className="w-[fill] flex flex-col py-[180px] px-[80px] sm:px-[20px] sm:py-[120px] box-border items-center justify-center gap-[30px] text-center  text-gray-white font-roboto">
      <motion.div 
      initial={{y:30, opacity:0 }} 
      whileInView={{y:0, opacity: 1 }} 
      transition={{duration: 0.5}}
      >
        <AnimatedText text={`¿Tienes una Idea Para Transformar`} text2={`tu Imagen?`} text3={`Platiquemos...`} className="text-24xl  md:text-21xl sm:text-5xl mb-10"/>
      </motion.div>
      
      <ContactForm/>
      <motion.img
        initial={{y:30, opacity:0 }} 
        whileInView={{y:0, opacity: 1 }} 
        transition={{duration: 0.7}}
        className="relative max-w-full"
        alt=""
        src="/undefined3.png"
      />
     
      <motion.h4 
        initial={{y:30, opacity:0 }} 
        whileInView={{y:0, opacity: 1 }} 
        transition={{duration: 0.7}}
        className="m-0  relative text-4xl sm:text-lg leading-[146%] font-medium font-inherit text-darkgray-200">
      <AnimatedText descrp="Nuestro equipo esta orgulloso de presentar siempre los mejores resultados de México, con gente que nos visita desde el extranjero tanto locales. Todos y cada uno de los procedimientos son realizados meticulosamente por el cirujano Dr. Francisco Rodríguez siguiendo estrictamente las pautas para el cuidado del paciente.  Todos los pacientes pueden esperar una experiencia que supere sus expectativas." className="text-mid"/>
       
        
      </motion.h4>
      <div className="mt-11 sm:mt-[80px] sm: h-[25px] flex flex-row md:flex-col py-10 px-[0.44140625px] box-border items-center justify-center gap-[53px] text-left text-mid text-darkgray-300">
        <div className="relative h-[25px]">
          <img
            className="absolute top-[0px] left-[0px] w-[19.96px] h-[20.84px]  object-cover"
            alt=""
            src="/frame.png"
          />
          <div className="relative top-[0px] left-[29.96px] leading-[146%] font-medium inline-block w-[262px]">
            4.9/5 Reseñas Positivas
          </div>
        </div>
        <div className="relative h-[25px]">
          <img
            className="absolute top-[0px] left-[0px] w-[19.96px] h-[20.84px]  object-cover"
            alt=""
            src="/frame.png"
          />
          <div className="relative top-[0px] left-[29.96px] leading-[146%] font-medium inline-block w-[262px]">
            Capacitacion Continua
          </div>
        </div>
        <div className="relative h-[25px]">
          <img
            className="absolute top-[0px] left-[0px] w-[19.96px] h-[20.84px]  object-cover"
            alt=""
            src="/frame.png"
          />
          <div className="relative top-[0px] left-[29.96px] leading-[146%] font-medium inline-block w-[262px]">
          Tecnologia de Punta
          </div>
        </div>
     
      </div>
    </section>
  );
};

export default TeamComponemt;
