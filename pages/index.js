import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import React from "react";
import { benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Services from "../components/services";
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
					id={"Projects"}
					pretitle="projects"
					title="Every thing is possible with great team"
				></SectionTitle>
				<ProjectSection projects={projects} />

				<ServicesSection />
				<SectionTitle
					pretitle="Testimonials"
					title="Here's what our customers said"
				>
          Testimonails is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
				</SectionTitle>

				<Testimonials />

				{/* <SectionTitle
					id={"Company"}
					pretitle="Team"
					title="Every thing is possible with great team"
				></SectionTitle>

				<TeamSection /> */}

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
		{
			id: 2,
			attributes: {
				title: "Assessment System",
				description:
          "\n" +
          "The assessment project is an innovative platform integrating NodeJS, React-Native, NextJS, and Socket.io. Teachers can create classes, add students, assign assignments, and track their progress. Students can submit assignments, view grades, and receive feedback. Real-time communication ensures timely updates. AWS S3 is used for secure file storage. This cross-platform solution streamlines assessment, making it efficient and user-friendly for both teachers and students.",
				tech_stack: "NodeJS, React-Native,  NextJS,  Socket.io,Aws, S3,Mongo",
				date: null,
				link: null,
				createdAt: "2023-07-09T12:27:43.864Z",
				updatedAt: "2023-07-13T15:59:37.928Z",
				publishedAt: "2023-07-09T08:03:57.366Z",
				thumbnail:
          "https://res.cloudinary.com/dkmg7bddr/image/upload/v1689944218/official-site-cms/projects/dcnqzfpnyxjsrs6waj6j.jpg",
				demo: null,
			},
		},
		{
			id: 3,
			attributes: {
				title: "Driving License Certification",
				description:
          "The Online Traffic Driving Assessment App is a cutting-edge educational platform built using Node.js, Next.js, Tailwind CSS, and MongoDB. It leverages AWS services like EC2 to ensure scalability and reliability. The app aims to assess and enhance students' driving skills through comprehensive lesson modules and quizzes.",
				tech_stack: "NodeJS, NextJS, Socket.io, Mongo,Aws, EC2",
				date: null,
				link: null,
				createdAt: "2023-07-09T12:27:43.864Z",
				updatedAt: "2023-07-13T15:59:37.928Z",
				publishedAt: "2023-07-09T08:03:57.366Z",
				thumbnail:
          "https://res.cloudinary.com/dkmg7bddr/image/upload/v1689957292/official-site-cms/projects/Screenshot_from_2023-07-21_21-27-46_hjbkir.png",
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
