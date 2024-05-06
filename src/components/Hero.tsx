import hero from "../assets/hero.png";
import icon from "/icon.svg";

const Hero = () => {
	return (
		<div>
			<img src={hero} className='w-full max-h-[600px] object-cover' />
			<div className=' fixed lg:absolute bottom-4 right-4 lg:bottom-auto lg:top-[40%] lg:right-[10%] leading-none text-center p-2 lg:p-6 rounded-lg text-sm lg:text-lg text-white font-semibold bg-[#39B54A] '>
				<img src={icon} className='absolute left-10 -top-14' alt='icon' />
				<div>
					Together, we've saved <br />
					<span className=' font-black text-lg lg:text-2xl text-[#8EFF9E]'>
						25 Tons
					</span>{" "}
					of carbon <br /> Thanks!
				</div>
			</div>
		</div>
	);
};

export default Hero;
