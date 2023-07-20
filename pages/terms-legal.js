import React from "react";
import Elements from "../components/Elements";

const TermsAndConditionsPage = () => {
	return (
		<Elements>
			<div className="min-h-screen bg-gray-100 mt-28 py-10 px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto">
					<section className="mb-10">
						<h2 className="text-3xl font-bold mb-6">Terms and Conditions</h2>
						<p className="mb-4">
              Welcome to Technics Lab! These Terms and Conditions
              (&ldquo;Terms&ldquo;) govern your use of our website and services.
              By accessing or using our website, you agree to be bound by these
              Terms. If you do not agree to these Terms, please refrain from
              using our website.
						</p>
						<p className="mb-4">
							<span className="font-bold">Intellectual Property:</span> All
              content on this website, including text, graphics, logos, images,
              and software, is the property of Technics Lab and protected by
              intellectual property laws. You may not use, reproduce, or
              distribute any content without prior written permission.
						</p>
						<p className="mb-4">
							<span className="font-bold">Service Usage:</span> The services
              provided by Technics Lab are subject to additional terms and
              conditions. By using our services, you agree to comply with the
              specific terms applicable to each service.
						</p>
						<p className="mb-4">
							<span className="font-bold">Privacy:</span> Your privacy is
              important to us. Please refer to our Privacy Policy to understand
              how we collect, use, and protect your personal information.
						</p>
						<p>
							<span className="font-bold">Limitation of Liability:</span>{" "}
              Technics Lab shall not be liable for any direct, indirect,
              incidental, consequential, or exemplary damages resulting from
              your use of our website.
						</p>
					</section>

					<section className="mb-10">
						<h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
						<p className="mb-4">
              At Technics Lab, we are committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, and safeguard your
              personal information when you visit our website or use our
              services. By using our website or services, you consent to the
              data practices described in this Privacy Policy.
						</p>
						<p className="mb-4">
							<span className="font-bold">Information Collection:</span> We may
              collect personal information such as your name, email address,
              contact details, and usage data when you interact with our website
              or use our services. We only collect information that is necessary
              for the provision of our services or as required by law.
						</p>
						<p className="mb-4">
							<span className="font-bold">Information Use:</span> We use the
              collected information to provide and improve our services,
              communicate with you, personalize your experience, and comply with
              legal obligations. We do not sell or share your personal
              information with third parties for marketing purposes.
						</p>
						<p className="mb-4">
							<span className="font-bold">Data Security:</span> We implement
              security measures to protect your personal information from
              unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
						</p>
						<p className="mb-4">
							<span className="font-bold">Third-Party Links:</span> Our website
              may contain links to third-party websites or services. We are not
              responsible for the privacy practices or content of those
              third-party websites. We encourage you to review the privacy
              policies of any third-party websites you visit.
						</p>
						<p>
							<span className="font-bold">Updates to this Policy:</span> We may
              update this Privacy Policy from time to time. The updated version
              will be posted on our website, and your continued use of our
              website or services after the changes constitutes your acceptance
              of the updated Privacy Policy.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-6">Legal Disclaimer</h2>
						<p className="mb-4">
              The information provided on this website is for general
              informational purposes only and does not constitute legal advice.
              Technics Lab makes no representations or warranties of any kind,
              express or implied, about the completeness, accuracy, reliability,
              suitability, or availability of the information contained on the
              website.
						</p>
						<p className="mb-4">
              In no event will Technics Lab be liable for any loss or damage,
              including without limitation, indirect or consequential loss or
              damage, or any loss or damage whatsoever arising from loss of data
              or profits arising out of, or in connection with, the use of this
              website. Through this website, you can link to other websites that
              are not under the control of Technics Lab. We have no control over
              the nature, content, and availability of those sites. The
              inclusion of any links does not necessarily imply a recommendation
              or endorse the views expressed within them.
						</p>
					</section>
				</div>
			</div>
		</Elements>
	);
};

export default TermsAndConditionsPage;
