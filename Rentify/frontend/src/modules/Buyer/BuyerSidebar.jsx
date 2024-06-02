import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { Cog6ToothIcon, PowerIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../StoreSlices/authSlice";
import { setBHKFilter, setCityFilter, setPriceFilter } from "../../StoreSlices/propertyFilterSlice";

const Sidebar = () => {

  const filters = [
    {
      label: "BHK Type",
      options: ["1", "2", "3", "4"],
    },
    {
      label: "Price",
      options: ["0-10000", "10000-20000", "20000-30000", "30000-40000","40000-50000"],
    },
    {
      label: "Location",
      options: ["Delhi", "Gurugram", "Noida", "Gaziabad"],
    },
  ];

  const dispatch = useDispatch();

  const handleFilterChange = (filter, option) => {
    switch (filter) {
      case "BHK Type":
        dispatch(setBHKFilter(option));
        break;
      case "Price":
        dispatch(setPriceFilter(option));
        break;
      case "Location":
        dispatch(setCityFilter(option));
        break;
      default:
        break;
    }
  };

  const [openModals, setOpenModals] = React.useState({});

  const toggleModal = (filter) => {
    setOpenModals((prevState) => ({
      ...prevState,
      [filter]: !prevState[filter],
    }));
  };

  const handleOptionClick = (filter, option) => {
    handleFilterChange(filter, option);
    toggleModal(filter);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Filters
          </Typography>
        </div>
        <List>
          {filters.map((filter) => (
            <ListItem key={filter.label} onClick={() => toggleModal(filter.label)}>
              <Typography color="blue-gray" className="mr-auto font-normal">
                {filter.label} 
              </Typography>
            </ListItem>
          ))}

          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>

          <ListItem onClick={handleLogout}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>

      {filters.map((filter) => (
        <Dialog
          key={filter.label}
          open={openModals[filter.label]}
          handler={() => toggleModal(filter.label)}
        >
          <DialogHeader className="text-blue-700">{filter.label}</DialogHeader>
          <DialogBody>
            <List className="p-0">
              {filter.options.map((option) => (
                <ListItem
                  key={option}
                  onClick={() => handleOptionClick(filter.label, option)}
                >
                  {option}
                </ListItem>
              ))}
            </List>
          </DialogBody>
        </Dialog>
      ))}
    </>
  );
};

export default Sidebar;
