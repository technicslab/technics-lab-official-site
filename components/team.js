import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";

const TeamSection = () => {
	useEffect(() => {
		Aos.init();
	}, []);

	const teamData = [
		{
			image:
        "https://res.cloudinary.com/dkmg7bddr/image/upload/c_scale,h_500,w_500/v1689081342/official-site-cms/team/IMG_20220127_130148-removebg-preview_1_ruiwgp.png",
			name: "Zeeshan Ahmed",
			role: "Co-founder",
			github: "https://github.com/zeeshan-thedeveloper/",

			linked_in: "https://www.linkedin.com/in/zeeshan-ahmed-developer/",
		},
		{
			image:
        "https://res.cloudinary.com/dkmg7bddr/image/upload/c_scale,h_500,w_500/v1689081342/official-site-cms/team/nadir_co_founder_q8oawu.png",
			name: "Nadir Hussain",
			github: "https://github.com/nadirhussainnn/",

			role: "Co-founder",
			linked_in: "https://www.linkedin.com/in/nadir-hussain-206b2319b/",
		},
		{
			image:
        "https://res.cloudinary.com/dkmg7bddr/image/upload/c_scale,h_500,w_500/v1689081342/official-site-cms/team/haseeb_cto_xa3kuq.png",
			name: "Haseeb Ullah",
			role: "CTO",

			github: "https://github.com/haseebUllahAbbasi/",
			linked_in: "https://www.linkedin.com/in/haseebullahabbasi/",
		},
		{
			image:
        "https://res.cloudinary.com/dkmg7bddr/image/upload/c_scale,h_500,w_500/v1689081342/official-site-cms/team/samad_ceo_s0s95y.png",
			name: "Samad Ali",
			role: "CEO",
			github: "https://github.com/haseebUllahAbbasi/",

			linked_in: "https://www.linkedin.com/in/samad-ali-qureshi-7724ba15a/",
		},
		{
			image:
        "https://res.cloudinary.com/dkmg7bddr/image/upload/c_scale,h_500,w_500/v1689081342/official-site-cms/team/noman_coo_e8s2yq.png",
			name: "Noman Aijaz",
			github: "https://github.com/haseebUllahAbbasi/",

			role: "COO",
			linked_in: "https://www.linkedin.com/in/noman-aijaz-835670158/",
		},
	];
	return (
		<section className="py-16" id="Team">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{teamData.map((member, index) => (
						<div
							key={index}
							className={
								"flex flex-col items-center justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 transition-all duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-trueGray-700"
							}
							data-aos={index % 2 === 0 ? "fade-up" : "fade-right"}
							data-aos-duration="1000"
						>
							<Image
								src={`${member.image}`}
								alt={member.name}
								className="w-48 h-48 rounded-full mb-4"
								height={500}
								width={500}
							/>
							<h3 className="text-xl font-medium text-gray-800 dark:text-white">
								{member.name}
							</h3>
							<p className="text-gray-600 dark:text-gray-300">{member.role}</p>
							<div className="flex space-x-11 mt-4">
								<a
									href={member.linked_in}
									target="_blank"
									rel="noopener noreferrer"
									className="text-indigo-500 hover:text-indigo-700 transition-colors duration-300"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-7 w-7"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
									</svg>
								</a>
								<a
									href={member.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-indigo-500  hover:text-indigo-700 transition-colors duration-300"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-7 w-7"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
