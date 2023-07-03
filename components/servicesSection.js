import React from "react";
import services from "./services";
import Link from "next/link";

export const ServiceCard = ({ service }) => {
  const { title, desc, tech, images, video, date } = service;

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-4">
      {images && images.length > 0 ? (
        <div className="rounded-t-lg overflow-hidden ">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </div>
      ) : (
        <div className="bg-gray-300 h-48"></div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{desc}</p>
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
    </div>
  );
};

const ServiceList = ({ services }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link
          href="/services" // Replace this with the actual link URL
          className=" hover:underline float-right px-4"
        >
          View All Services
        </Link>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
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
        "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      ],
      date: "2023-06-30",
    },
    {
      title: "Service 1",
      desc: "Description of Service 1",
      tech: ["Tech 1", "Tech 2"],
      images: [
        "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      ],
      date: "2023-06-30",
    },
    {
      title: "Service 2",
      desc: "Description of Service 2",
      tech: ["Tech 3", "Tech 4"],
      images: [
        "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      ],
      video: "video.mp4",
      date: "2023-07-01",
    },
    {
      title: "Service 3",
      desc: "Description of Service 3",
      tech: ["Tech 5", "Tech 6"],
      images: [
        "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      ],
      date: "2023-07-02",
    },
    {
      title: "Service 4",
      desc: "Description of Service 4",
      tech: ["Tech 7", "Tech 8"],
      images: [
        "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      ],
      date: "2023-07-03",
    },
    {
      title: "Service 5",
      desc: "Description of Service 5",
      tech: ["Tech 9", "Tech 10"],
      images: [
        "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      ],
      date: "2023-07-04",
    },
  ];
  return <ServiceList services={services} />;
};

export default ServicesSection;
