import HeroSectionComponent from "@/components/hero-section-component";
import BenefitCardsGrid from "@/components/benefit-cards-grid";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import Head from "next/head";

const LandingPage = () => {
  return (
    <>
        <Head>
            <title>Dr Francisco Rodriguez</title>
        </Head>
        <PageTransition />
        <Layout className="relative bg-gray-600 w-full h-[100hv] flex flex-col items-center justify-start">
        <HeroSectionComponent />
        <BenefitCardsGrid />
        </Layout>
    </>
  );
};

export default LandingPage;
