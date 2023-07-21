import Elements from "../../components/Elements";
import SectionTitle from "../../components/sectionTitle";
import React, { useState } from "react";

const ProjectDetailPage = ({ project }) => {
	const [showModal, setShowModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState("");

	const handleImageClick = (imageUrl) => {
		setSelectedImage(imageUrl);
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<Elements>
			{showModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
					<div className="max-w-3xl mx-auto p-4">
						<img
							src={selectedImage}
							alt="Full Size"
							className="w-full h-auto p-3 max-h-screen"
						/>
						<button
							className="absolute top-4 right-4 text-white text-lg font-bold"
							onClick={closeModal}
						>
              Close
						</button>
					</div>
				</div>
			)}

			<div className="px-2 py-2 mt-28">
				<SectionTitle
					id="ProjectDetail"
					pretitle={project.attributes.title}
					title={"Project Details"}
				/>
				<div className="flex flex-col items-center gap-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
						{[1, 2, 3]?.map((imageUrl, index) => (
							<img
								key={index}
								src={project.attributes.thumbnail}
								alt={`Project ${index + 1} ${imageUrl}`}
								className="w-full h-60 object-cover rounded-lg cursor-pointer"
								onClick={() => handleImageClick(project.attributes.thumbnail)}
							/>
						))}
					</div>
					{/* Render project details */}
					<div className="border border-gray-200 rounded-lg p-4">
						<h3 className="text-xl font-semibold">{project.title}</h3>
						<div
							className="text-gray-600 my-4 project-info"
							style={{ maxWidth: "600px" }}
							dangerouslySetInnerHTML={{
								__html: project.attributes.longDesc,
								// __html: project.attributes.description,
							}}
						></div>
						{/* Add other project details as needed */}
						<div className="flex flex-wrap gap-2 ">
							{project.attributes.tech_stack
								.split(",")
								.map((techItem, index) => (
									<span
										key={index}
										className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm font-semibold"
									>
										{techItem}
									</span>
								))}
						</div>
					</div>
				</div>
			</div>
		</Elements>
	);
};
export const getServerSideProps = async (context) => {
	const { projectId } = context.params;
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
				longDesc: `<h1>Project Description:</h1>
				<p>
					The assessment project is an innovative web and mobile application designed to facilitate the assessment and evaluation process for teachers and students. The platform provides a comprehensive set of features that enable teachers to create classes, add students, assign assignments, and track student progress. Students, on the other hand, can submit their assignments and receive feedback from their teachers.
				</p>
				
				<h2>Key Features:</h2>
				<p><strong>User Authentication:</strong> The platform offers user authentication to ensure that only authorized teachers and students can access their respective accounts.</p>
				
				<h2>Teacher Dashboard:</h2>
				<ul>
					<li>Create Classes: Teachers can create virtual classrooms, where they can manage multiple students for different courses or subjects.</li>
					<li>Add Students: Teachers have the ability to add students to their classes, either individually or in bulk.</li>
					<li>Assign Assignments: Teachers can create and assign assignments to their students, providing clear instructions and submission deadlines.</li>
					<li>Track Student Progress: Teachers can monitor students' assignment submissions and track their progress throughout the course.</li>
				</ul>
				
				<h2>Student Dashboard:</h2>
				<ul>
					<li>View Assigned Assignments: Students can access a list of all the assignments they have been assigned by their teachers, along with submission deadlines.</li>
					<li>Submit Assignments: Students can upload their completed assignments before the submission deadline.</li>
					<li>View Grades and Feedback: After assessment, students can view their grades and any feedback provided by their teachers.</li>
				</ul>
				
				<h2>Real-Time Communication:</h2>
				<p>
					The platform utilizes Socket.IO to enable real-time communication between teachers and students, ensuring instant updates on assignment submissions, feedback, and grades.
				</p>
				
				<h2>AWS Integration:</h2>
				<p>
					AWS S3 is used to store and manage assignment files, ensuring secure and scalable file storage for the platform.
				</p>
				
				<h2>Tech Stack:</h2>
				<ul>
					<li>NodeJS: The backend of the application is built using Node.js, providing a robust and scalable server environment.</li>
					<li>React-Native: The mobile application is developed using React-Native, allowing cross-platform compatibility and delivering a seamless user experience on both iOS and Android devices.</li>
					<li>Next.js: The web application is developed using Next.js, a framework built on top of React that enhances server-side rendering and enables faster page loads.</li>
					<li>Socket.IO: The real-time communication between clients and the server is facilitated using Socket.IO, ensuring timely updates for teachers and students.</li>
					<li>AWS S3: Amazon Simple Storage Service (S3) is integrated to store and manage assignment files securely.</li>
				</ul>
				
				<p>
					The assessment project aims to streamline the assessment process, providing teachers with efficient tools to manage their classes and assignments, while offering students a user-friendly platform to submit their work and track their academic progress. The use of real-time communication and cloud storage enhances the overall experience, making it a valuable and accessible resource for both educators and learners alike.
				</p>
				`,
			},
		},
		{
			id: 2,
			attributes: {
				title: "Assessment System",
				description:
          "\n" +
          "The assessment project is an innovative platform integrating NodeJS, React-Native, NextJS, and Socket.io. Teachers can create classes, add students, assign assignments, and track their progress. Students can submit assignments, view grades, and receive feedback. Real-time communication ensures timely updates. AWS S3 is used for secure file storage. This cross-platform solution streamlines assessment, making it efficient and user-friendly for both teachers and students.",
				tech_stack: "NodeJS, React-Native,  NextJS,  Socket.io,\nAws, S3",
				date: null,
				link: null,
				createdAt: "2023-07-21T12:49:06.742Z",
				updatedAt: "2023-07-21T12:58:13.781Z",
				publishedAt: "2023-07-21T12:49:12.157Z",
				thumbnail:
          "https://res.cloudinary.com/dkmg7bddr/image/upload/v1689944218/official-site-cms/projects/dcnqzfpnyxjsrs6waj6j.jpg",
				demo: null,
				longDesc: `<h1>Project Description:</h1>
				<p>
					The assessment project is an innovative web and mobile application designed to facilitate the assessment and evaluation process for teachers and students. The platform provides a comprehensive set of features that enable teachers to create classes, add students, assign assignments, and track student progress. Students, on the other hand, can submit their assignments and receive feedback from their teachers.
				</p>
				
				<h2>Key Features:</h2>
				<h3>User Authentication:</h3>
				<p>The platform offers user authentication to ensure that only authorized teachers and students can access their respective accounts.</p>
				
				<h3>Teacher Dashboard:</h3>
				<ul>
					<li>Create Classes: Teachers can create virtual classrooms, where they can manage multiple students for different courses or subjects.</li>
					<li>Add Students: Teachers have the ability to add students to their classes, either individually or in bulk.</li>
					<li>Assign Assignments: Teachers can create and assign assignments to their students, providing clear instructions and submission deadlines.</li>
					<li>Track Student Progress: Teachers can monitor students' assignment submissions and track their progress throughout the course.</li>
				</ul>
				
				<h3>Student Dashboard:</h3>
				<ul>
					<li>View Assigned Assignments: Students can access a list of all the assignments they have been assigned by their teachers, along with submission deadlines.</li>
					<li>Submit Assignments: Students can upload their completed assignments before the submission deadline.</li>
					<li>View Grades and Feedback: After assessment, students can view their grades and any feedback provided by their teachers.</li>
				</ul>
				
				<h3>Real-Time Communication:</h3>
				<p>
					The platform utilizes Socket.IO to enable real-time communication between teachers and students, ensuring instant updates on assignment submissions, feedback, and grades.
				</p>
				
				<h3>AWS Integration:</h3>
				<p>
					AWS S3 is used to store and manage assignment files, ensuring secure and scalable file storage for the platform.
				</p>
				
				<h2>Tech Stack:</h2>
				<ul>
					<li>NodeJS: The backend of the application is built using Node.js, providing a robust and scalable server environment.</li>
					<li>React-Native: The mobile application is developed using React-Native, allowing cross-platform compatibility and delivering a seamless user experience on both iOS and Android devices.</li>
					<li>Next.js: The web application is developed using Next.js, a framework built on top of React that enhances server-side rendering and enables faster page loads.</li>
					<li>Socket.IO: The real-time communication between clients and the server is facilitated using Socket.IO, ensuring timely updates for teachers and students.</li>
					<li>AWS S3: Amazon Simple Storage Service (S3) is integrated to store and manage assignment files securely.</li>
				</ul>
				
				<p>
					The assessment project aims to streamline the assessment process, providing teachers with efficient tools to manage their classes and assignments, while offering students a user-friendly platform to submit their work and track their academic progress. The use of real-time communication and cloud storage enhances the overall experience, making it a valuable and accessible resource for both educators and learners alike.
				</p>
				`,
			},
		},
	];

	// console.log(projectId, "id");
	const project = projects.find((item) => item.id == projectId);

	return { props: { project } };
};

export default ProjectDetailPage;
