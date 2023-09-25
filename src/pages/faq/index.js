import React from 'react'
import Layout from '@/components/Layout'
import FaqComponent from '@/components/faq-component'
import PageTransition from "@/components/PageTransition";
import Head from 'next/head';

const index = () => {
  return (
    <>
    <Head>
    <title>Dr Francisco Rodriguez | Faq </title>
            <meta name="Cirguia Plastoca" content="Cirugias esteticas, inyectables, liposuciones"></meta>
        </Head>
    <div className='faq-wrapper'>
      
    <PageTransition />
    <Layout>
        <FaqComponent/>
    </Layout>
    </div>
    </>
  )
}

export default index