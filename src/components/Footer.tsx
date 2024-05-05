const Footer = () => {
	return (
		<div className='py-10 bg-green-500'>
			<div className='container flex flex-col items-center justify-between mx-auto md:flex-row'>
				<span className='text-3xl font-bold tracking-tight text-white'>
					Ecofoodbag.com
				</span>
				<span className='flex gap-4 font-bold tracking-tight text-white'>
					<a href='/Privacy-Policy'>
						<span>Privacy Policy</span>
					</a>
					<a href='/Terms-of-Service'>
						<span>Terms of Service</span>
					</a>
				</span>
			</div>
		</div>
	);
};

export default Footer;
