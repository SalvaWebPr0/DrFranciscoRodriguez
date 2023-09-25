import { accordions } from "@/app/faqdata";
import Accordion from "./Accordion";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const FaqComponent = () => {
  return (
    <section className="relative top-0 mt-0 pt-0 w-full h-[900px] md:h-full  flex flex-row  box-border items-center justify-center bg-[url('/faq@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-base text-gray-white font-playfair-display">
      <div className="w-[95%] flex flex-row md:flex-col mt-[60px]">

        {/* Contact */}
          <div className="w-1/2 md:w-full sm:w-[90%] px-5 sm:px-3 shrink-0 flex flex-col items-start justify-start gap-[31px]">
            <motion.h2 
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.5}} 
              className="m-0 relative text-7xl tracking-[3px] leading-[32px] uppercase font-normal font-inherit text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600">
              Faq
            </motion.h2>
            <motion.h2 
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.6}}  className="m-0 relative w-full text-21xl leading-[48px] font-semibold font-inherit">
              <span>{`Preguntas `}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600">
                Frecuentes
              </span>
            </motion.h2>
            <motion.div 
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.7}} 
              className="relative leading-[32px] font-text inline-block shrink-0">
              Tienes dudas adicionales? mandanos un mensaje o agenda una consulta y
              aclaramos tus preguntas.
            </motion.div>
            <div className="relative leading-[32px] font-barlow text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600">
              Contactame
            </div>
            <motion.div
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.9}} 
            >

            </motion.div>
            <ContactForm className={``}/>
            
          </div>
        {/* FAQ */}
          <motion.div 
            initial={{y:30, opacity:0 }} 
            whileInView={{y:0, opacity: 1 }} 
            transition={{duration: 0.7}} 
            className=" w-full max-w-[50%] md:max-w-[100%] sm:max-w-[100%] flex flex-col">
                {
                  accordions.map((item, id) => {
                    const {pregunta, respuesta} = item;
                    return (
                      <div key={id} className="rounded-t-md rounded-b-none bg-gray-700 shadow-[0px_32px_64px_rgba(57,_20,_0,_0.04)] p-5">
                          <Accordion pregunta={pregunta} respuesta={respuesta}>

                          </Accordion>
                      </div>
                    )
                  })
                }
          </motion.div>


      </div>
    </section>
  );
};

export default FaqComponent;
