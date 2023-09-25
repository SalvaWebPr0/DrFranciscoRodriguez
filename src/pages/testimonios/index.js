import React from 'react'
import Layout from '@/components/Layout'
import ViewResultsComponent from '@/components/view-results-component'
import TestimonialsComponent from '@/components/testimonials-component'
import PageTransition from "@/components/PageTransition";
import Head from 'next/head';

const index = () => {
  return (
    <>
    <Head>
    <title>Dr Francisco Rodriguez | Testimonios </title>
            <meta name="Cirguia Plastoca" content="Cirugias esteticas, inyectables, liposuciones"></meta>
        </Head>
    <PageTransition />
    <Layout>
        <ViewResultsComponent/>
        <TestimonialsComponent/>
    </Layout>
    </>
  )
}

export default index