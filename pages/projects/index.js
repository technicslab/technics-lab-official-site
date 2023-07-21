import Elements from "../../components/Elements";
import { ProjectCard } from "../../components/projectsection";
import SectionTitle from "../../components/sectionTitle";
import React from "react";
const ProjectPage = ({ projectsData }) => {
	return (
		<Elements>
			<div className="px-2 py-2 mt-28">
				<SectionTitle
					id={"Projects"}
					pretitle="projects"
					title="Here are some awesome projects"
				>
          Get to know our services, here is some of our projects, have a look!!
				</SectionTitle>
				<div className="flex flex-wrap ">
					{projectsData.map((project) => (
						<ProjectCard
							key={project?.id}
							project={project?.attributes}
							id={project.id}
						/>
					))}
				</div>
			</div>
		</Elements>
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

	return { props: { projectsData: projects } };
};

export default ProjectPage;
