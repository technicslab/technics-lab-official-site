import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import React from "react";
import { benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
// import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Services from "../components/services";
import TeamSection from "../components/team";
import ContactUsSection from "../components/contactUs";
import ProjectSection from "../components/projectsection";
import ServicesSection from "../components/servicesSection";
import StatsSection from "../components/statsSections";
import UpWidget from "../components/upWidget";
import Testimonials from "../components/testimonials";
const Home = ({ projects }) => {
	return (
		<div>
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
			<div className="lg:p-16 sm:p-4">
				<Hero />
				<SectionTitle
					id={"Services"}
					pretitle="Services"
					title=" Why you should choose us?"
				>
          Join us and unlock the potential of these cutting-edge services to
          accelerate your business growth and achieve your goals.
				</SectionTitle>

				<Services />
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
					title="Numbers that Speak: Unleashing the Force of Our Company Stats!"
				></SectionTitle>
				<StatsSection />

				<SectionTitle
					pretitle="Testimonials"
					title="Here's what our customers said"
				>
          Testimonails is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
				</SectionTitle>
				<Testimonials />

				<SectionTitle
					id={"Projects"}
					pretitle="projects"
					title="Every thing is possible with great team"
				></SectionTitle>

				{/* {JSON.stringify({ data: "sahi", projects })} */}
				<ProjectSection projects={projects} />

				<ServicesSection />

				<SectionTitle
					id={"Company"}
					pretitle="Team"
					title="Every thing is possible with great team"
				>

				</SectionTitle>

				<TeamSection />

				<SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
				</SectionTitle>
				<Faq />
				<ContactUsSection />
				<Footer />
				<UpWidget />
				<PopupWidget />
			</div>
		</div>
	);
};
export const getServerSideProps = async () => {
	const projects = [
		{
			id: 1,
			attributes: {
				title: "Event Planner",
				description:
          "The Event Planner is a feature-rich application developed using React Native and Flutter, with a robust backend built on Node.js. ",
				tech_stack: "Mongo, Nodejs, Socket-io, React-Native, Flutter",
				date: "2021-10-01",
				link: null,
				createdAt: "2023-07-09T12:27:43.864Z",
				updatedAt: "2023-07-13T15:59:37.928Z",
				publishedAt: "2023-07-09T08:03:57.366Z",
				thumbnail:
          "https://res.cloudinary.com/dkmg7bddr/image/upload/f_auto,q_auto/event_2_pmxj0l",
				demo: null,
			},
		},
	];
	return {
		props: {
			projects,
		},
	};
};

export default Home;
