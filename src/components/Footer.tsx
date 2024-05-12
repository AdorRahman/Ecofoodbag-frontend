const Footer = () => {
	return (
		<div className='py-20 bg-green-500 lg:py-10'>
			<div className='container flex flex-col justify-between mx-auto lg:items-center md:flex-row'>
				<span className='text-3xl font-bold tracking-tight text-white'>
					Ecofoodbag.com
				</span>
				<span className='flex flex-col gap-4 py-6 font-bold tracking-tight text-white lg:py-0 md:flex-row'>
					<a href='/privacy-policy'>
						<span>Privacy Policy</span>
					</a>
					<a href='/terms-and-conditions'>
						<span>Terms of Service</span>
					</a>
				</span>
			</div>
		</div>
	);
};

export default Footer;
