import React from 'react'
import Layout from '@/components/Layout'
import MainServicesComponent from '@/components/main-services-component'
import PageTransition from "@/components/PageTransition";
import Head from 'next/head';

const index = () => {
  return (
    <>
    <Head>
            <title>Dr Francisco Rodriguez | Servicios </title>
            <meta name="Cirguia Plastoca" content="Cirugias esteticas, inyectables, liposuciones"></meta>
        </Head>
    <PageTransition />
    <Layout>
        <MainServicesComponent />
    </Layout>
    </>
  )
}

export default index