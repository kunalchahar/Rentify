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

const BrokerSidebar = () => {

const navigate = useNavigate();
  const sidebarValues = [
    {
      value: "Add Property",
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
      link: "/addProperty"
    },
    {
      value: "My Properties",
      icon: <ShoppingBagIcon className="h-5 w-5" />,
      link: ""
    },
    {
      value: "Logout",
      icon: <PowerIcon className="h-5 w-5" />,
      link: ""
    },
  ];

  return (
    <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        {sidebarValues.map((item, index)=><ListItem key={index} onClick={()=>navigate(item.link)}>
          <ListItemPrefix>
            {item.icon}
          </ListItemPrefix>
          {item.value}
        </ListItem>)}
        
      </List>
    </Card>
  );
};

export default BrokerSidebar;
