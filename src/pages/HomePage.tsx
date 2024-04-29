import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
	return (
		<div className='flex flex-col gap-12'>
			<div className='flex flex-col gap-5 py-8 -mt-16 text-center bg-white rounded-lg shadow-md md:px-32'>
				<h1 className='text-5xl font-bold tracking-tight text-green-600'>
					Join us in reducing carbon emissions!
				</h1>
				<span className='text-xl'>Eco Foos is just a click away!</span>
			</div>
			<div className='grid gap-5 md:grid-cols-2'>
				<img src={landingImage} />
				<div className='flex flex-col items-center justify-center gap-4 text-center'>
					<span className='text-3xl font-bold tracking-tighter'>
						Order takeaway even faster!
					</span>
					<span>Eco Foos is just a click away!</span>
					<img src={appDownloadImage} />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
