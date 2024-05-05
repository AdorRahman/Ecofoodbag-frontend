import React from "react";

const PrivacyPolicy = () => {
	return (
		<div className='container px-4 py-8 mx-auto bg-white rounded-lg shadow-lg'>
			<h1 className='mb-6 text-3xl font-semibold text-center'>
				Privacy Policy
			</h1>
			<div className='text-gray-800'>
				<section className='mb-8'>
					<h2 className='mb-4 text-2xl font-semibold'>
						Information We Collect
					</h2>
					<p>
						[Describe the types of information you collect, such as name, email
						address, phone number, etc., and how you collect it, such as through
						forms, cookies, etc.]
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='mb-4 text-2xl font-semibold'>
						How We Use Your Information
					</h2>
					<p>
						[Explain the purposes for which you use the collected information,
						such as to process orders, personalize user experience, etc.]
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='mb-4 text-2xl font-semibold'>Data Security</h2>
					<p>
						[Detail the measures you take to protect user data, such as
						encryption, secure servers, etc.]
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='mb-4 text-2xl font-semibold'>Your Rights</h2>
					<p>
						[Outline the rights users have regarding their personal data, such
						as the right to access, correct, or delete their information.]
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='mb-4 text-2xl font-semibold'>
						Changes to this Policy
					</h2>
					<p>
						[Explain how and when you may update this Privacy Policy, and how
						users will be notified of changes.]
					</p>
				</section>
			</div>

			<p className='mt-8 text-center text-gray-700'>
				If you have any questions or concerns about our Privacy Policy, please
				contact us at [Contact Email].
			</p>
		</div>
	);
};

export default PrivacyPolicy;
