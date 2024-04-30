import { useParams } from "react-router-dom";

const SearchPage = () => {
	const { city } = useParams();

	return (
		<div className='grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5'>
			user searched for {city}
		</div>
	);
};

export default SearchPage;
