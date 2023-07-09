import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useEffect, useState } from "react";
import React from "react";
import { Transition } from "@headlessui/react";
import { Link as LinkScroll } from "react-scroll";

const Navbar = () => {
	const navigation = ["Products", "Services", "Benefits", "Team"];
	const [scrollActive, setScrollActive] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScrollActive(window.scrollY > 30);
		});
	}, []);

	return (
		<div
			className={
				// eslint-disable-line no-mixed-spaces-and-tabs
				`fixed top-0 w-full z-30 bg-white-500 transition-all 
        ${
		scrollActive
			? "shadow-md pt-0 bg-slate-100 dark:bg-trueGray-800"
			: "pt-4"
		}`
			}
		>
			<nav className="container relative flex flex-wrap items-center justify-between pt-4 pb-4 mx-auto lg:justify-between xl:pl-16 pr-16">
				{/* Logo  */}
				<Disclosure>
					{({ open }) => (
						<>
							<div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
								<Link href="/">
									<span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
										<span>
											<Image
												src="/img/logo.svg"
												alt="N"
												width="32"
												height="32"
												className="w-8"
											/>
										</span>
										<span>Technics Lab</span>
									</span>
								</Link>

								<Disclosure.Button
									aria-label="Toggle Menu"
									className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700 dark:hover:text-indigo-500 "
								>
									<svg
										className="w-6 h-6 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
									>
										{open && (
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
											/>
										)}
										{!open && (
											<path
												fillRule="evenodd"
												d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
											/>
										)}
									</svg>
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
									<Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden bg-white dark:bg-trueGray-900">
										<>
											{navigation.map((item, index) => (
												<Link
													key={index}
													href={`#${item}`}
													className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
												>
													{item}
												</Link>
											))}
											<Link
												href="#contact"
												className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
											>
                        Contact Us
											</Link>
										</>
									</Disclosure.Panel>
								</Transition>
							</div>
						</>
					)}
				</Disclosure>

				{/* menu  */}
				<div className="hidden text-center lg:flex lg:items-center">
					<ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
						{navigation.map((menu, index) => (
							<li className="mr-3 nav__item" key={index}>
								<LinkScroll
									spy={true}
									duration={1500}
									to={`${menu}`}
									className={
										"cursor-pointer inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
									}
								>
									{menu}
								</LinkScroll>
							</li>
						))}
					</ul>
				</div>

				<div className="hidden mr-3 space-x-4 lg:flex ">
					<LinkScroll
						spy={true}
						smooth={true}
						duration={1200}
						to="contact"
						className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5 cursor-pointer"
					>
            Contact Us
					</LinkScroll>

					<ThemeChanger />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
