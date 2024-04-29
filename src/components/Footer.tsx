const Footer = () => {
	return (
		<div className='py-10 bg-green-500'>
			<div className='container flex flex-col items-center justify-between mx-auto md:flex-row'>
				<span className='text-3xl font-bold tracking-tight text-white'>
					Ecofoodbag.com
				</span>
				<span className='flex gap-4 font-bold tracking-tight text-white'>
					<span>Privacy Policy</span>
					<span>Terms of Service</span>
				</span>
			</div>
		</div>
	);
};

export default Footer;
