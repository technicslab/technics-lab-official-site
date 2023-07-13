import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { Transition } from "@headlessui/react";
const Faq = () => {
	const faqData = [
		{
			question: "What services do you offer?",
			answer:
        "We offer a wide range of services including web development, mobile app development, Smart Contract with Blockchain, and Software Prototyping",
		},
	];

	return (
		<Container className="!p-0">
			<div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
				{faqData?.map((item, index) => (
					<div key={index} className="mb-5">
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
										<span>{item.question}</span>
										<span className="ml-auto">
											{open ? (
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
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											) : (
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
														d="M12 4.5v15m7.5-7.5h-15"
													/>
												</svg>
											)}
										</span>
									</Disclosure.Button>
									<Transition
										show={open}
										enter="transition-all duration-500 ease-out"
										enterFrom="opacity-0 max-h-0"
										enterTo="opacity-100 max-h-full"
										leave="transition-all duration-500 ease-out"
										leaveFrom="opacity-100 max-h-full"
										leaveTo="opacity-0 max-h-0"
									>
										<Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
											{item.answer}
										</Disclosure.Panel>
									</Transition>
								</>
							)}
						</Disclosure>
					</div>
				))}
			</div>
		</Container>
	);
};

export default Faq;
