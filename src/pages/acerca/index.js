import MainServicesComponent from "@/components/main-services-component";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import React from 'react'
import Layout from "@/components/Layout";
import "@/app/css/globals.css"
import WhyUsComponent from "@/components/why-us-component";
import FormationComponent from "@/components/formation-component";
import PageTransition from '@/components/PageTransition'

const acerca = () => {
  return (
    <>
    <PageTransition />
    <Layout >
        <Head>
            <title>Dr Francisco Rodriguez | Acerca </title>
            <meta name="Cirguia Plastoca" content="Cirugias esteticas, inyectables, liposuciones"></meta>
        </Head>
        <WhyUsComponent />
      <FormationComponent />
        
    </Layout>
    </>
  )
}

export default acerca