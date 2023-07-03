import React from "react";
import Link from "next/link";
import SectionTitle from "./sectionTitle";

export const ProjectCard = ({ project }) => {
  const { title, desc, tech, images, video, date } = project;
  // Function to truncate the description
  const truncateDescription = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + "...";
  };

  const truncatedDesc = truncateDescription(desc, 110);

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 cursor-pointer">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {images && images.length > 0 ? (
          <img
            src={images[0]}
            alt={title}
            className="w-full h-48 object-cover"
          />
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
    </div>
  );
};

export const ProjectRow = ({ projects }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <Link href="/projects " className="hover:underline ">
          View All
        </Link>
      </div>
      <div className="flex flex-wrap -mx-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectSection = () => {
  const projects = [
    {
      title: "Project 1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      tech: ["Tech 1", "Tech 2"],
      images: [
        "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=442&q=80",
      ],
      date: "2023-06-30",
    },
    {
      title: "Project 2",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      tech: ["Tech 3", "Tech 4"],
      images: [
        "https://images.unsplash.com/photo-1687875716205-074c2869ac89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      ],

      date: "2023-07-01",
    },
    {
      title: "Project 3",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      tech: ["Tech 5", "Tech 6"],
      images: [
        "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=442&q=80",
      ],
      date: "2023-07-02",
    },
    {
      title: "Project 3",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      tech: ["Tech 5", "Tech 6"],
      images: [
        "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=442&q=80",
      ],
      date: "2023-07-02",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <ProjectRow projects={projects} />
    </div>
  );
};

export default ProjectSection;
