import { useEffect, useState } from "react";
import hero from "../assets/hero.png";
import icon from "/icon.svg";
import { API_BASE_URL } from "@/api/MyUserApi";

const Hero = () => {
	const [total, setTotal] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		try {
			const resp = await fetch(`${API_BASE_URL}/api/order/total-delivered`, {
				method: "GET",
			});
			const data = await resp.json();
			setTotal(data?.total);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<img src={hero} className='w-full max-h-[600px] object-cover' />
			<div className=' fixed md:absolute bottom-4 right-4 shadow-lg  md:bottom-auto md:top-[20rem] md:right-[10rem] leading-none text-center p-2 md:p-6 rounded-lg text-sm md:text-lg text-white font-semibold bg-[#39B54A] '>
				<img src={icon} className='absolute left-10 -top-14' alt='icon' />
				<div>
					Together, we've saved <br />
					<span className=' font-black text-lg md:text-2xl text-[#8EFF9E]'>
						{isLoading ? "..." : `${total}`} Tons
					</span>{" "}
					of carbon <br /> Thanks!
				</div>
			</div>
		</div>
	);
};

export default Hero;
