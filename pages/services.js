import ProjectSection, { ProjectCard } from "../components/projectsection";
import SectionTitle from "../components/sectionTitle";
import { ServiceCard } from "../components/servicesSection";

const ServicesPage = () => {
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
  return (
    <div className="px-2 py-2">
      <SectionTitle
        id={"Services"}
        pretitle="services"
        title="Here are the complete services we provide to our clients"
      >
        Get to know our services, here is the complete list, have a look!!
      </SectionTitle>
      <div className="flex flex-wrap ">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};
export default ServicesPage;
