import React from "react";

const ContactUsSection = () => {
	return (
		<section className="py-16 ">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl text-center font-semibold text-gray-800 dark:text-white mb-8">
          Contact Us
				</h2>
				<div className="max-w-3xl mx-auto">
					<form>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
							>
                Name
							</label>
							<input
								type="text"
								id="name"
								className="w-full px-4 py-2 border rounded-md text-gray-800 dark:text-gray-300 focus:outline-none focus:border-indigo-500"
								placeholder="Enter your name"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
							>
                Email
							</label>
							<input
								type="email"
								id="email"
								className="w-full px-4 py-2 border rounded-md text-gray-800 dark:text-gray-300 focus:outline-none focus:border-indigo-500"
								placeholder="Enter your email"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="message"
								className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
							>
                Message
							</label>
							<textarea
								id="message"
								className="w-full px-4 py-2 border rounded-md text-gray-800 dark:text-gray-300 focus:outline-none focus:border-indigo-500"
								rows="4"
								placeholder="Enter your message"
							></textarea>
						</div>
						<div className="text-center">
							<button
								type="submit"
								className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
							>
                Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactUsSection;
