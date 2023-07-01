import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import React from "react";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Services from "../components/services";
import TeamSection from "../components/team";
import ContactUsSection from "../components/contactUs";

const Home = () => {
	return (
		<>
			<Head>
				<title>Technics Lab</title>
				<meta
					name="description"
					content="Quality Precision Deadlines met. Our talented team ensures your project exceeds expectations.
          Expertise across diverse fields. Unleashing desired"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<Hero />
			<SectionTitle
				id={"Services"}
				pretitle="Services"
				title=" Why should you join us"
			>
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
			</SectionTitle>

			<Services data={benefitOne} />

			<Benefits imgPos="right" data={benefitTwo} />
			<SectionTitle
				pretitle="Watch a video"
				title="Let us help you with video demonstration"
			>
				{/* new stuff can be added  */}
			</SectionTitle>
			<Video />
			<TeamSection />

			<SectionTitle
				pretitle="Testimonials"
				title="Here's what our customers said"
			>
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
			</SectionTitle>
			<Testimonials />

			<SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
			</SectionTitle>
			<Faq />
			<ContactUsSection />
			<Footer />
			<PopupWidget />
		</>
	);
};

export default Home;
