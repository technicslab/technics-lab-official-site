import React from "react";
import Link from "next/link";

export const ServiceCard = ({ id, service }) => {
	const { title, desc, tech, images, date } = service;

	const truncateDescription = (text, limit) => {
		if (text.length <= limit) {
			return text;
		}
		return text.slice(0, limit) + "...";
	};

	const truncatedDesc = truncateDescription(desc, 110);

	return (
		<Link
			href={`/services/${id}`}
			className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 cursor-pointer"
		>
			<div className="bg-white rounded-lg shadow-lg overflow-hidden">
				{images && images.length > 0 ? (
					<div className="relative">
						<img
							src={images[0]}
							alt={title}
							className="w-full h-48 object-cover transition-opacity hover:opacity-100 duration-300"
							style={{ opacity: "0.9" }}
						/>
						<div className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 hover:opacity-100">
							<img
								src={images[0]}
								alt={title}
								className="w-full h-full object-cover"
								style={{ opacity: "1" }}
							/>
						</div>
					</div>
				) : (
					<div className="bg-gray-300 h-48"></div>
				)}
				<div className="p-4">
					<h3 className="text-xl font-semibold mb-2">{title}</h3>
					<p className="text-gray-600 mb-4">{truncatedDesc}</p>
					<div className="flex flex-wrap">
						{tech.map((techItem, index) => (
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
					{date}
				</div>
			</div>
		</Link>
	);
};
const ServiceList = ({ services }) => {
	return (
		<div>
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl font-semibold">Previous Services</h2>
				<Link href="/services">View All</Link>
			</div>

			<div className="flex flex-wrap -mx-4">
				{/* <div className="grid grid-cols-4 sm:grid-cols-6"> */}
				{services.map((service, index) => (
					<ServiceCard key={index} id={index} service={service} />
				))}
				{/* </div> */}
			</div>
		</div>
	);
};

const ServicesSection = () => {
	const services = [
		{
			title: "Service 1",
			desc: "Description of Service 1",
			tech: ["Tech 1", "Tech 2"],
			images: [
				"https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=442&q=80",
			],
			date: "2023-06-30",
		},
		{
			title: "Service 1",
			desc: "Description of Service 1",
			tech: ["Tech 1", "Tech 2"],
			images: [
				"https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=442&q=80",
			],

			date: "2023-06-30",
		},
		{
			title: "Service 2",
			desc: "Description of Service 2",
			tech: ["Tech 3", "Tech 4"],
			images: [
				"https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=442&q=80",
			],

			video: "video.mp4",
			date: "2023-07-01",
		},
		{
			title: "Service 3",
			desc: "Description of Service 3",
			tech: ["Tech 5", "Tech 6"],
			images: [
				"https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=442&q=80",
			],

			date: "2023-07-02",
		},
	];
	return (
		<div className="container mx-auto px-4 py-8">
			<ServiceList services={services} />
		</div>
	);
};

export default ServicesSection;
