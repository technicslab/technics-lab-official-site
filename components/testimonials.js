import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "./container";
import Image from "next/image";
import styles from "../css/testimonials.module.css";
import clsx from "clsx";

const Testimonials = ({ testimonialsData }) => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<Container id={"Products"}>
			<WithSpeechBubbles testimonialsData={testimonialsData} />
		</Container>
	);
};

const Testimonial = ({ children }) => {
	return <div>{children}</div>;
};

const TestimonialContent = ({ children }) => {
	return (
		<div className="bg-white shadow-lg p-2 flex flex-col items-center relative after:absolute after:-bottom-16 after:left-1/2 after:-translate-x-1/2 after:w-0">
			{children}
		</div>
	);
};

const TestimonialHeading = ({ children }) => {
	return <h3 className={styles.companyHeading}>{children}</h3>;
};

const TestimonialAvatar = ({ src, name, title }) => {
	const myLoader = ({ src }) => {
		return src;
	};

	return (
		<div className="flex flex-col items-center mt-8">
			<Image
				loader={myLoader}
				src={src}
				width={500}
				height={500}
				alt={name}
				className="mb-2 w-20 h-20 rounded-full"
			/>

			{/* <Image src={src} width={100} height={100}  /> */}
			<div className="space-y-1 text-center">
				<p className="font-semibold">{name}</p>
				<p className="text-sm text-gray-600">{title}</p>
			</div>
		</div>
	);
};

function WithSpeechBubbles({ testimonialsData }) {
	return (
		<div className={clsx("bg-slate-100 dark:bg-trueGray-800 p-5")}>
			<div className="container mx-auto py-6">
				<div className={clsx("space-x-4 md:space-x-10 ", styles.container)}>
					{testimonialsData.map((item) => {
						return (
							<Testimonial key={item.id}>
								<TestimonialContent>
									<TestimonialHeading>
										{item.attributes.company}
									</TestimonialHeading>
									<video
										className={styles.videoContainer}
										controls
										controlsList="nodownload"
									>
										<source src={item.attributes.video} type="video/mp4" />
									</video>
								</TestimonialContent>
								<TestimonialAvatar
									src={item.attributes.profile_image}
									name={item.attributes.name}
									title={item.attributes.designation}
								/>
							</Testimonial>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
