import React from 'react'
import Layout from '@/components/Layout'
import TeamComponemt from '@/components/team-componemt'
import PageTransition from '@/components/PageTransition'
import Head from 'next/head';

const index = () => {
  return (
    <>
    <Head>
    <title>Dr Francisco Rodriguez | Contacto </title>
            <meta name="Cirguia Plastoca" content="Cirugias esteticas, inyectables, liposuciones"></meta>
    </Head>
    <PageTransition />
    <Layout>
        <TeamComponemt />
    </Layout>
    </>
  )
}


export default index