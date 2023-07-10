import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

const StatsSection = ({stats}) => {

	const myLoader=({src})=>{
		return src;
	};
	
	return (

		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{
					stats && stats.map((s,i)=>{
						return(
							<div className="text-center" key={i}>
								<div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
									<Image loader={myLoader} src={s.attributes.icon} width={50} height={50} alt="icon" />
								</div>
								<h6 className="text-4xl font-bold text-indigo-600 uppercase lg:text-4xl">
									<CountUp
										end={s.attributes.count}
										start={0}
										duration={5}
									>
									</CountUp>
								</h6>
								<p className="mb-2 font-bold text-md">{s.attributes.title}</p>
								<p className="text-gray-700">
									{s.attributes.description}
								</p>
							</div>
						);
					})
				}

						
			</div>
		</div>
	);
};

export default StatsSection;
