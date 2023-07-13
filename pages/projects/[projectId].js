import Elements from "../../components/Elements";
import SectionTitle from "../../components/sectionTitle";
import React from "react";
import { getProjects } from "../api";
import { marked } from "marked";
export const richTextParser = () => {
	const details =
    "<p>The Event Planner is a feature-rich application developed using React Native and Flutter, with a robust backend built on Node.js. The project incorporates various essential technologies such as Socket.IO for real-time communication and JWT (JSON Web Tokens) libraries for secure and recurring operations, password hashing, and user authentication.</p> <br/> <br/> <p>The main objective of the Event Planner is to provide users with a comprehensive platform to plan and manage events effortlessly. Users can create new events and invite other members to participate. The application ensures a seamless user experience through its intuitive user interface and extensive functionality.</p> <p>Upon creating an event, users can specify event details such as the title, date, time, location, and description. The Event Planner also allows users to assign tasks to specific members, ensuring that everyone is aware of their responsibilities. Each assigned task comes with a due date and priority level, allowing users to effectively manage their workload.</p> <br/> <p>To facilitate effective collaboration and communication, the Event Planner offers a notes feature. Users can create notes for each member involved in the event, providing crucial information, instructions, or reminders. These notes act as a centralized hub of information, ensuring that everyone stays on the same page throughout the event planning process.</p> <br/> <p>One of the key highlights of the project is its real-time updates and notifications. Thanks to the integration of Socket.IO, users can receive instant updates on any changes or new additions related to the event. This feature fosters a dynamic and interactive environment, where team members can stay informed about task updates, note revisions, and general event progress.</p> <br/> <p>Security is a paramount concern in the Event Planner. With the help of JWT libraries, the application ensures that all user interactions and sensitive data are protected through secure authentication mechanisms. Passwords are hashed and stored securely, safeguarding user information from unauthorized access.</p>  <br/><p>The Event Planner is designed as a minimum viable product (MVP) to cater to the specific requirements of your client. It provides a solid foundation upon which additional features and enhancements can be built in the future. With its seamless user experience, collaborative features, real-time updates, and robust security measures, the Event Planner aims to streamline event planning and coordination for users, enabling them to focus on organizing successful events rather than getting bogged down in administrative tasks.</p> <br/> <p>Overall, the Event Planner project serves as a comprehensive solution that combines the power of React Native, Flutter, Node.js, Socket.IO, and JWT libraries to deliver a user-friendly, efficient, and secure event planning experience for both event organizers and participants.</p>";
	return marked.parse(details);
};

const ProjectDetailPage = ({ project }) => {
	return (
		<Elements>
			<div className="px-2 py-2 mt-28">
				<SectionTitle
					id="ProjectDetail"
					pretitle="Project Details"
					title={project.title}
				/>
				<div className="flex flex-col items-center gap-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
						{[1, 2, 3]?.map((imageUrl, index) => (
							<img
								key={index}
								src={
									"https://res.cloudinary.com/dkmg7bddr/image/upload/c_thumb,g_auto,h_300,w_300/event_2_pmxj0l.png"
								}
								alt={`Project ${index + 1} ${imageUrl}`}
								className="w-full h-48 object-cover rounded-lg"
							/>
						))}
					</div>
					{/* Render project details */}
					<div className="border border-gray-200 rounded-lg p-4">
						<h3 className="text-xl font-semibold">{project.title}</h3>
						<div
							dangerouslySetInnerHTML={{
								__html: richTextParser(),
								// __html: project.attributes.description,
							}}
							className="text-gray-600 my-4 "
							style={{ maxWidth: "600px" }}
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
	const projects = await getProjects();
	const project = projects.find((item) => item.id == projectId);
	return { props: { project } };
};

export default ProjectDetailPage;
