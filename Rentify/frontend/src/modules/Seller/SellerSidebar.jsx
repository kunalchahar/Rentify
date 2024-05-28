import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../StoreSlices/authSlice";

const SellerSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout =()=>{
    dispatch(logout());
    navigate("/login")
  }
  const sidebarValues = [
    {
      value: "Add Property",
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
      link: "addProperty",
    },
    {
      value: "My Properties",
      icon: <ShoppingBagIcon className="h-5 w-5" />,
      link: "properties",
    },
  ];

  return (
    <Card className="h-screen max-h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h4" color="blue-gray">
          Rentify
        </Typography>
      </div>
      <List>
        {sidebarValues.map((item, index) => (
          <ListItem key={index} onClick={() => navigate(item.link)}>
            <ListItemPrefix>{item.icon}</ListItemPrefix>
            {item.value}
          </ListItem>
        ))}
        <ListItem onClick={handleLogout}>
          <ListItemPrefix><PowerIcon className="h-5 w-5" /></ListItemPrefix>
          Logout
        </ListItem>
      </List>
    </Card>
  );
};

export default SellerSidebar;
