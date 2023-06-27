import Image from "next/image";
import React from "react";
import Container from "./container";

const Services = (props) => {
	const { data } = props;
	return (
		<>
			<Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
				<div
					className={`flex items-center justify-center w-full lg:w-1/2 ${
						props.imgPos === "right" ? "lg:order-1" : ""
					}`}
				>
					<div>
						<Image
							src={data.image}
							width="521"
							height="auto"
							alt="Benefits"
							className={"object-cover"}
							placeholder="blur"
							blurDataURL={data.image.src}
						/>
					</div>
				</div>

				<div
					className={`flex flex-wrap items-center w-full lg:w-1/2 ${
						data.imgPos === "right" ? "lg:justify-end" : ""
					}`}
				>
					<div>
						<div className="flex flex-col w-full mt-4">
							<h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
								{data.title}
							</h3>

							<p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
								{data.desc}
							</p>
						</div>

						<div className="w-full mt-5">
							<Service
								title="Custom Software Development"
								icon={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
										/>
									</svg>
								}
							>
                We specialize in building custom software solutions tailored to
                meet your specific business needs.
							</Service>

							<Service
								title="Web Application Development"
								icon={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
										/>
									</svg>
								}
							>
                We develop high-quality web applications that are secure,
                scalable, and user-friendly.
							</Service>

							<Service
								title="Mobile Application Development"
								icon={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
										/>
									</svg>
								}
							>
                Our mobile app development services cover both iOS and Android
                platforms, ensuring a seamless user experience.
							</Service>

							<Service
								title="Software Prototyping"
								icon={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
										/>
									</svg>
								}
							>
                We offer software prototyping services to help you visualize and
                validate your product ideas before development.
							</Service>

							<Service
								title="Daps"
								icon={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
										/>
									</svg>
								}
							>
                Our Data Analysis and Processing Services (DAPS) help you gain
                valuable insights from your data.
							</Service>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

function Service(props) {
	return (
		<>
			<div className="flex items-start mt-8 space-x-3">
				<div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
					{React.cloneElement(props.icon, {
						className: "w-7 h-7 text-indigo-50",
					})}
				</div>
				<div>
					<h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
						{props.title}
					</h4>
					<p className="mt-1 text-gray-500 dark:text-gray-400">
						{props.children}
					</p>
				</div>
			</div>
		</>
	);
}

export default Services;
