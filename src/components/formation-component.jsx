"use client"
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ place, years, position, description }) => {
  const ref = useRef(null);
  return (
  <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
    <LiIcon reference={ref}/>

    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration: 0.5, type: 'spring' }}
    >
      <h3 className="p-0 m-0 capitalize font-bold text-2xl sm:text-5xl">{place}&nbsp;</h3>
      <span className="font-small md:text-base">
        {years}
      </span>
      <h3 className="m-0 mb-1 top-[0px] text-17xl leading-[123%] font-medium sm:text-xl md:text-7xl font-poppins text-lightgray-200">
            {position}
      </h3>
      <p className="m-0  top-[54px] left-[0px] leading-[146%] font-light text-mid lg:text-lg">
            <span className="block md:mb-10 sm:mb-3 mb-20">{description}</span>
           
      </p>
    </motion.div>
  </li>)
}

const FormationComponent = () => {
  
  const ref = useRef(null);
  
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <section className=" mt-11 pt-0  box-border items-center justify-center gap-[39px] text-left text-23xl text-lightgray-200 font-poppins">
      <h2 className="m-0 relative text-inherit items-center text-center mb-11 tracking-[0.03em] leading-[123%] font-semibold font-inherit">
        Experiencia y Formacion
      </h2>

      <div  ref={ref} className="w-[85%] sm:w-full mx-auto relative left-0">


        <motion.div 
        style={{scaleY: scrollYProgress}}
        className="absolute left-14 sm:left-11 xsm:left-14  top-[70px] w-[4px] h-[72%] bg-lightgray-100 origin-top"/>

        <ul className="">
          <Details place={`UAG`} years={`Agosto 1998 - Abril 1999`} position={`Medicina General`} description={`Migrando a la ciudad de Guadalajara  Jalisco para continuar mis estudiqos universitarios de medicina en la reconocida universidad autónoma de Guadalajara durante 6 años`}/>

          <Details place={`Universidad de Colima`} years={`Mayo 1999 - Abril 2004`} position={`Cirugía General`} description={`Continue formación en cirugía general durante 4 años en la ciudad de Colima en el reconocido Hospital Universitario  de Colima así como la máxima casa de estudios de México UNAM`}/>

          <Details place={`ISSSTE`} years={`Marzo 2005 - Julio 2010`} position={`Cirujano plástico`} description={`Para completar mi formacion como cirujano plástico estético y reconstructivo complete múltiples rotaciones en diferentes ciudades del País.`}/>
        </ul>

      </div>
    
    </section>
  );
};

export default FormationComponent;
