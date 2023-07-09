import { apiGET } from "../api/service";

export const getFAQs = async () => {
	try {
		const apiResult = await apiGET("faqs");
		return apiResult.data;
	} catch (error) {
		console.error("Error fetching FAQs:", error);
		// throw error;
	}
};
export const getProjects = async () => {
	try {
		const apiResult = await apiGET("projects?populate=*");
		return apiResult.data;
	} catch (error) {
		console.error("Error fetching FAQs:", error);
		// throw error;
	}
};

export const getCompanyDetails = async () => {
	try {
		const apiResult = await apiGET("companies");
		return apiResult.data;
	} catch (error) {
		console.error("Error fetching company details:", error);
		// throw error;
	}
};
