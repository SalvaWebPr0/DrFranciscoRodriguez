import { motion } from "framer-motion";

const BenefitCard = ({
  tecnologiaDePunta,
  ellipse13,
  laTecnologaMasCompletaDel,
}) => {
  return (
    <motion.div 
        initial={{y:30, opacity:0 }} 
        whileInView={{y:0, opacity: 1 }} 
        transition={{duration: 0.7}} 
    className="w-[33%] md:w-full sm:w-[80%] flex flex-row pt-10 px-3 md:px-10 sm:px-2 pb-10 box-border items-center justify-start gap-[10px] text-left text-gray-200 sm:ml-8 font-playfair-display">
      <div className="relative h-full">
        <img className="-left-4 absolute w-3 h-3 object-cover" alt="" src={ellipse13} />
      </div>
    
      <div className="flex flex-col ">
        <h3 className="m-0 relative  text-7xl sm:text-xl tracking-[0.12em] leading-[123%] capitalize font-semibold font-inherit inline-block ">
          {tecnologiaDePunta}
        </h3>
        <div className=" flex flex-row items-center justify-start gap-[11px] text-7xl text-whitesmoke-200 font-barlow-condensed">
          
          <h4 className="m-0 relative text-lg tracking-[0.22em] font-normal font-inherit inline-block ">
            {laTecnologaMasCompletaDel}
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
