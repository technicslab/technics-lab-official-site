import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import React from "react";
import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Services from "../components/services";
import TeamSection from "../components/team";
import ContactUsSection from "../components/contactUs";
import ProjectSection from "../components/projectsection";
import ServicesSection from "../components/servicesSection";
import StatsSection from "../components/statsSections";
import UpWidget from "../components/upWidget";

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
        Join us and unlock the potential of these cutting-edge services to
        accelerate your business growth and achieve your goals.
			</SectionTitle>

			<Services data={benefitOne} />
			<SectionTitle
				id={"Benefits"}
				pretitle="Benefits"
				title="Let us provide you with more value"
			>
				{/* new stuff can be added  */}
			</SectionTitle>

			<Benefits imgPos="right" data={benefitTwo} />
			<SectionTitle
				id={"Company-Stats"}
				pretitle="Company Stats"
				title="Check out some interesting statistics about our company."
			></SectionTitle>
			<StatsSection />

			{/* <SectionTitle
        id="Products"
        pretitle="Watch a video"
        title="Let us help you with video demonstration"
      >
        you can add more desc if you want      
      </SectionTitle> */}

			{/* <Video /> */}

			<SectionTitle
				id={"Projects"}
				pretitle="projects"
				title="Every thing is possible with great team"
			>
				{/* new stuff can be added  */}
			</SectionTitle>

			<ProjectSection />

			<ServicesSection />

			<SectionTitle
				id={"Company"}
				pretitle="Team"
				title="Every thing is possible with great team"
			>
				{/* new stuff can be added  */}
			</SectionTitle>

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
			<UpWidget />
			<PopupWidget />
		</>
	);
};

export default Home;
