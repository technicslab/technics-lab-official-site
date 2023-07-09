import Elements from "../../components/Elements";
import { ProjectCard } from "../../components/projectsection";
import SectionTitle from "../../components/sectionTitle";
import React from "react";
import { getProjects } from "../endpoints";
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
	const projects = await getProjects();
	return { props: { projectsData: projects } };
};

export default ProjectPage;
