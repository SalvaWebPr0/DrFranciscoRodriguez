import Link from "next/link";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import FooterComponent from "@/components/footer-component";
import "@/app/css/globals.css"
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Layout from "@/components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
    <PageTransition/>
    <div className="bg-gray-600">
      <div className="flex items-center justify-center py-40 px-5">
        <div className="max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-y-5">
          {/* <Image src={noPageImage} alt="404 Page Not Found" width={400}/> */}
          <motion.h2 
          initial={{y:30, opacity:0 }} 
          whileInView={{y:0, opacity: 1 }} 
          transition={{duration: 0.5}}
          className="text-white text-7xl font-bold w-full text-center">
            No Encontramos La Pagina
          </motion.h2>
          <motion.p 
          initial={{y:30, opacity:0 }} 
          whileInView={{y:0, opacity: 1 }} 
          transition={{duration: 0.7}}
          className="text-white text-base font-medium text-center">
          ¡Vaya! La página que estás buscando no existe. Podría haber sido movido o eliminado.
          </motion.p>
          <motion.a
          initial={{y:30, opacity:0 }} 
          whileInView={{y:0, opacity: 1 }} 
          transition={{duration: 0.9}}
            href={"/"}
            className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold flex items-center justify-center hover:bg-gradient-to-r from-amber-500 to-yellow-700 hover:text-white duration-200 no-underline"
          >
            Regresa al Inicio
          </motion.a>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default NotFoundPage;