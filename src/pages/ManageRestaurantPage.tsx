import {
	useCreateMyRestaurant,
	useGetMyRestaurant,
	useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/managr-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
	const { createRestaurant, isLoading: isCreateLoading } =
		useCreateMyRestaurant();
	const { restaurant } = useGetMyRestaurant();
	const { updateRestaurant, isLoading: isUpdateLoading } =
		useUpdateMyRestaurant();

	const isEditing = !!restaurant;

	return (
		<Tabs defaultValue='orders'>
			<TabsList>
				<TabsTrigger value='orders'>Orders</TabsTrigger>
				<TabsTrigger value='manage-restaurant'>Manage Restaurant</TabsTrigger>
			</TabsList>
			<TabsContent
				value='orders'
				className='p-10 space-y-5 rounded-lg bg-gray-50'>
				<h2 className='text-2xl font-bold'>0 active orders</h2>
			</TabsContent>
			<TabsContent value='manage-restaurant'>
				<ManageRestaurantForm
					restaurant={restaurant}
					onSave={isEditing ? updateRestaurant : createRestaurant}
					isLoading={isCreateLoading || isUpdateLoading}
				/>
			</TabsContent>
		</Tabs>
	);
};

export default ManageRestaurantPage;