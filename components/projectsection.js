import React from "react";
import Link from "next/link";

export const ProjectCard = ({ id, project }) => {
	const { title, description, tech_stack, date } = project;
	const options = { month: "short", year: "numeric" };

	const truncateDescription = (text, limit) => {
		if (text.length <= limit) {
			return text;
		}
		return text.slice(0, limit) + "...";
	};

	const truncatedDesc = truncateDescription(description, 110);

	return (
		<Link
			href={`/projects/${id}`}
			className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 cursor-pointer"
		>
			<div className="bg-white rounded-lg shadow-lg overflow-hidden">
				<div className="relative">
					<img
						src={"https://res.cloudinary.com/dkmg7bddr/image/upload/c_thumb,g_auto,h_300,w_300/event_2_pmxj0l.png"}
						alt={title}
						className="w-full h-48 object-cover transition-opacity hover:opacity-100 duration-300"
						style={{ opacity: "0.9" }}
					/>
				</div>

				<div className="p-4">
					<h3 className="text-xl font-semibold mb-2">{title}</h3>
					<p className="text-gray-600 mb-4">{truncatedDesc}</p>
					<div className="flex flex-wrap">
						{tech_stack.split(",").map((techItem, index) => (
							<span
								key={index}
								className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm font-semibold mr-2 mb-2"
							>
								{techItem}
							</span>
						))}
					</div>
				</div>
				<div className="bg-gray-100 text-gray-500 px-4 py-2 text-xs">
					{new Date(date).toLocaleString("en-US", options)}
				</div>
			</div>
		</Link>
	);
};

export const ProjectRow = ({ projects }) => {
	return (
		<div>
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl font-semibold">Projects</h2>
				<Link href="/projects">View All</Link>
			</div>

			<div className="flex flex-wrap -mx-4">
				{projects.slice(0, 4).map((project, index) => (
					<ProjectCard
						key={index}
						id={project.id}
						project={project.attributes}
					/>
				))}
			</div>
		</div>
	);
};

const ProjectSection = ({ projects }) => {
	return (
		<div className="container mx-auto px-4 py-8">
			<ProjectRow projects={projects} />
		</div>
	);
};

export default ProjectSection;
