import Elements from "../../components/Elements";
import SectionTitle from "../../components/sectionTitle";
import React from "react";
import { useRouter } from "next/router";
import { getProjects } from "../endpoints";

const ProjectDetailPage = () => {
	const router = useRouter();
	const { serviceId } = router.query;

	// Fetch project data based on projectId or use static data

	// Use the projectId to fetch the specific project data from your API or use a static object

	// Example static project object
	const service = {
		title: `Service ${Number(serviceId + 1)}`,
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
		tech: ["Tech 1", "Tech 2"],
		images: [
			"https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=442&q=80",
			"https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=442&q=80",
			"https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=442&q=80",
		],
		date: "2023-06-30",
	};

	return (
		<Elements>
			<div className="px-2 py-2 mt-28">
				<SectionTitle
					id="ServiceDetail"
					pretitle="Service Details"
					title={service.title}
				/>
				<div className="flex flex-col items-center gap-4">
					{/* Render project images */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
						{service.images.map((imageUrl, index) => (
							<img
								key={index}
								src={imageUrl}
								alt={`Project ${index + 1}`}
								className="w-full h-48 object-cover rounded-lg"
							/>
						))}
					</div>
					{/* Render project details */}
					<div className="border border-gray-200 rounded-lg p-4">
						<h3 className="text-xl font-semibold">{service.title}</h3>
						<p className="text-gray-600 my-4 " style={{ maxWidth: "600px" }}>
							{service.desc}
							{service.desc}
							{service.desc}
						</p>
						{/* Add other project details as needed */}
						<div className="flex flex-wrap gap-2 ">
							{service.tech.map((techItem, index) => (
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
	const param = context.params;
	console.log(param, "console");
	const projects = await getProjects();
	return { props: { projectsData: projects } };
};

export default ProjectDetailPage;
