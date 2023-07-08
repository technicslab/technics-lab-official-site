import { apiGET } from "../api/service"

export const getFAQs = (setData) => {
	apiGET('faqs').then(res => {
		if (res && res.data) {
			setData(res.data)
		}
	}).catch(error => {
		console.log("Error occured in FAQs", error.message)
	})
}

export const getCompanyDetails = () => {
	apiGET('companies').then(res => {
		if (res && res.data) {
			console.log("company", res.data)
		}
	}).catch(error => {
		console.log("Error occured in fetch Company Data", error.message)
	})
}