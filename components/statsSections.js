import React from "react";
import {
	BanknotesIcon,
	UserPlusIcon,
	WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

const StatsSection = () => {
	return (
		<section className=" py-16 mb-32 " style={{ marginTop: "-80px" }}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
					{/* Revenue Generated */}
					<div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<svg
										className="h-6 w-6 text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<BanknotesIcon />
									</svg>
								</div>
								<div className="ml-5 w-0 flex-1">
									<dl>
										<dt className="text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                      Revenue Generated
										</dt>
										<dd className="flex items-baseline">
											<div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                        $1,234,567
											</div>
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<svg
										className="h-6 w-6 text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<UserPlusIcon />
									</svg>
								</div>
								<div className="ml-5 w-0 flex-1">
									<dl>
										<dt className="text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                      Clients Worked With
										</dt>
										<dd className="flex items-baseline">
											<div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                        50
											</div>
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
						<div className="px-4 py-5 sm:p-6">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<svg
										className="h-6 w-6 text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<WrenchScrewdriverIcon></WrenchScrewdriverIcon>
									</svg>
								</div>
								<div className="ml-5 w-0 flex-1">
									<dl>
										<dt className="text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                      Deployed Projects
										</dt>
										<dd className="flex items-baseline">
											<div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                        100
											</div>
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StatsSection;
