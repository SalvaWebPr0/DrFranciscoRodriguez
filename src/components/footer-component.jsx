"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <section className="self-stretch max-w-full bg-sendblack  flex flex-col py-[81px] box-border items-center justify-start [text-decoration:none]">
      <div className="w-[80%] sm:w-[80%] m-auto self-stretch flex flex-row p-[60px] md:p-[30px] items-start justify-start md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col">
        <footer className="flex-1 items-start ">
           <div className="flex flex-row items-start justify-start">
              {/* <img
                className=" max-w-[50%] md:w-[50%] max-h-full object-cover"
                alt=""
                src="/undefined6.png"
              /> */}
            </div>
          <div className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-whitesmoke-300 font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
            {/* Contact Column */}
            <div className="w-[25%] md:w-full pr-5 flex flex-col items-start justify-start gap-[20px] text-base">
              <motion.p 
                initial={{y:30, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 0.5}}
                className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 ">
                  Contactanos
                </motion.p>
              <motion.div 
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.7}}
              className=" flex flex-col items-start justify-start gap-[13px]">
                
                <motion.a
                whileHover={{y:-4 }}
                whileTap={{ y:1 }} 
                transition={{duration: 0.09}}
                  className="[text-decoration:none] relative leading-[24px] text-[inherit]"
                  href="teL:+526863388341"
                >
                  Llama al : +52 (686) 338 8341
                </motion.a>
                <div className="relative leading-[24px] flex items-end ">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">{`Colón Oriente 265 Int 104, `}</p>
                    <p className="m-0">{`Edificio María y José, `}</p>
                    <p className="m-0">colonia centro, cp 59680</p>
                  </span>
                </div>
                  

                  <motion.a
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                    className="[text-decoration:none] relative leading-[24px] text-[inherit]"
                    href="mailto:drfranciscocirugiaplastica@gmail.com"
                    target="_blank"
                  >
                    drfrancisco@gmail.com
                  </motion.a>
              </motion.div>
              {/* Social Links */}
              <motion.div 
                      initial={{y:30, opacity:0 }} 
                      whileInView={{y:0, opacity: 1 }} 
                      transition={{duration: 0.7}} 
                      className="mt-4 gap-3 flex flex-row sm:flex-col items-center justify-between">
                     
                      <div className="flex flex-row gap-3">
                        <motion.a
                        whileHover={{y:-4 }}
                        whileTap={{ y:1 }} 
                        transition={{duration: 0.09}}
                          className="[text-decoration:none] rounded bg-ghostwhite flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
                          href="facebook.com"
                        >
                          <FaFacebookF color='#ffffff' size={20}/>

                        </motion.a>
                        <motion.a
                        whileHover={{y:-4 }}
                        whileTap={{ y:1 }} 
                        transition={{duration: 0.09}}
                          className="[text-decoration:none] rounded bg-ghostwhite flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
                          href="youtube.com"
                        >
                          <FaYoutube color='#ffffff' size={20}/>

                        </motion.a>
                        <motion.a
                        whileHover={{y:-4 }}
                        whileTap={{ y:1 }} 
                        transition={{duration: 0.09}}
                          className="[text-decoration:none] rounded bg-ghostwhite flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
                          href="tiktok.com"
                        >
                          <FaTiktok color='#ffffff' size={20}/>

                        </motion.a>
                        <motion.a
                        whileHover={{y:-4 }}
                        whileTap={{ y:1 }} 
                        transition={{duration: 0.09}}
                          className="[text-decoration:none] rounded bg-ghostwhite flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
                          href="instagram.com"
                        >
                          <FaInstagram color='#ffffff' size={20}/>
                        </motion.a>
                      </div>
              </motion.div>
            </div>
            {/* Services Column */}
            <div >
              <motion.p 
                initial={{y:30, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 0.5}}
                className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 ">
                  Servicios
                </motion.p>
              <motion.ul 
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.7}}
              className="text-base list-none text-start pl-0 ">
                  <motion.li 
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                  className="mb-4">
                    <Link href={"/"} className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline ">Abdominoplastía</Link>
                    
                  </motion.li>
                  <motion.li 
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                  className="mb-4">
                    <Link href={"/implantes"} className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline ">Implantes Mamarios</Link>
                    
                  </motion.li>
                  <motion.li 
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                  className="mb-4">
                    <Link href={"/liposuccion"} className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline ">Liposuccion</Link>
                    
                  </motion.li>
                  <motion.li 
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                  className="mb-4">
                    <Link href={"/brazilian"} className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline ">Brazilian Butt Lift</Link>
                    
                  </motion.li>
                  <motion.li 
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                  className="mb-4">
                    <Link href={"/cotizar"} className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline ">Cotizacion</Link>
                    
                  </motion.li>
                  <motion.li 
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                  className="mb-4">
                    <Link href={"/contacto"} className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline ">Contacto</Link>
                    
                  </motion.li>
                </motion.ul>
            </div>
            {/* Site Column */}
            <div >
              <motion.p 
                initial={{y:30, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 0.5}}
                className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500  ">
                  Sitio
                </motion.p>
              <motion.ul 
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.7}}
              className="text-base list-none text-start pl-0 ">
                  <motion.li 
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                  className="mb-4">
                    <Link href={"/"} className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline ">Inicio</Link>
                    
                  </motion.li>
                  <motion.li 
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                  className="mb-4">
                    <Link href={"/acerca"} className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline ">Acerca</Link>
                    
                  </motion.li>
                  <motion.li 
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                  className="mb-4">
                    <Link href={"/faq"} className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline ">Preguntas</Link>
                    
                  </motion.li>
                  <motion.li 
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                  className="mb-4">
                    <Link href={"/testimonios"} className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline ">Testimonios</Link>
                    
                  </motion.li>
                  <motion.li 
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                  className="mb-4">
                    <Link href={"/procedimientos"} className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline ">Procedimientos</Link>
                    
                  </motion.li>
                  <motion.li 
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                  className="mb-4">
                    <Link href={"/contacto"} className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline ">Contacto</Link>
                    
                  </motion.li>
                </motion.ul>
            </div>
            {/* Legal Column */}
            <div >
              <motion.p 
                initial={{y:30, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 0.5}}
                className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500  ">
                  Polizas
                </motion.p>
              <motion.ul 
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.7}}
              className="text-base gap-y-4 list-none text-start pl-0 ">
                  <motion.li 
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                  className="mb-4">
                    <Link href={"/terminos"} className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline ">Terminos de Uso</Link>
                    
                  </motion.li>
                  <motion.li 
                  whileHover={{y:-4 }}
                  whileTap={{ y:1 }} 
                  transition={{duration: 0.09}}
                  className="mb-4">
                    <Link href={"/politica"} className="text-white  cursor-pointer duration-200 [decoration-none] left-0 no-underline ">Politica de Privacidad</Link>
                    
                  </motion.li>
                </motion.ul>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FooterComponent;
