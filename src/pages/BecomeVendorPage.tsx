import { API_BASE_URL, useGetMyUser } from "@/api/MyUserApi";
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const BecomeVendor = () => {
  const { getAccessTokenSilently } = useAuth0(); // Move hook call to top level
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();
  let navigate = useNavigate();

  const handelUpdate = async () => {
    try {
      setIsLoading(true);
      const accessToken = await getAccessTokenSilently(); // Use the value obtained from the hook
      await fetch(`${API_BASE_URL}/api/my/user/make-vendor`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      navigate("/manage-restaurant");
      toast.success("You are now a vendor");
    } catch (error: any) {
      console.log(error);
      toast.error(error.toString());
    } finally {
      setIsLoading(false);
    }
  };

  if (isGetUserLoading) {
    return <></>;
  }

  if (currentUser?.isVendor) {
    return (
      <div className="grid space-y-2">
        <p> You already a vendor</p>
        <Link to="/manage-restaurant">
          <Button>Manage My Restaurant</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-sm shadow-md p-6 rounded-md space-y-4">
      <p className="font-bold text-xl">Become A Vendor</p>
      <p className="opacity-50">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        iaculis aliquam felis, sed tristique odio egestas vel. Cras faucibus et
        urna at egestas. Ut facilisis scelerisque mi, auctor lacinia sapien
        eleifend ut. Quisque accumsan, metus eu rhoncus euismod, neque ipsum
        faucibus nunc, vel blandit metus dolor et neque. Nulla consequat posuere
        sem, ac auctor ipsum posuere quis. Proin fringilla sagittis leo eu
        suscipit. Maecenas faucibus tortor at rutrum ornare. Sed accumsan eu
        felis eu lacinia. Maecenas id vehicula metus. Vestibulum rhoncus urna
        sapien, at placerat lectus consequat quis.
      </p>
      <Button onClick={handelUpdate}>
        {isLoading ? "Please wait" : "Become A Vendor"}
      </Button>
    </div>
  );
};

export default BecomeVendor;
