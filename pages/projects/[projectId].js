import Elements from "../../components/Elements";
import SectionTitle from "../../components/sectionTitle";
import React from "react";
import { getProjects } from "../endpoints";

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
								src={"https://res.cloudinary.com/dkmg7bddr/image/upload/c_thumb,g_auto,h_300,w_300/event_2_pmxj0l.png"}
								alt={`Project ${index + 1} ${imageUrl}`}
								className="w-full h-48 object-cover rounded-lg"
							/>
						))}
					</div>
					{/* Render project details */}
					<div className="border border-gray-200 rounded-lg p-4">
						<h3 className="text-xl font-semibold">{project.title}</h3>
						<p className="text-gray-600 my-4 " style={{ maxWidth: "600px" }}>
							{project.attributes.description}
						</p>
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
	console.log(projectId, "console");
	const projects = await getProjects();
	// console.log(projects);
	const project = projects.find((item) => item.id == projectId);
	return { props: { project } };
};

export default ProjectDetailPage;
