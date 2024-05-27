import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../StoreSlices/authSlice";

const HomeNavbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated);

  const navItems = ["Properties", "Prices", "Localities"];
  const dispatch = useDispatch();

  const handleLogout = () =>{
    dispatch(logout());
    navigate("/login");
  }

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item, index) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
          key={index}
        >
          <a href="#" className="flex items-center">
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <div className=" max-h-[768px] w-screen">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            variant="h5"
            className="mr-4 cursor-pointer py-1.5 font-semibold "
          >
            Rentify
          </Typography>
          <div className="flex items-center gap-4">
            {isAuthenticated && (
              <div className="flex items-center gap-x-2">
                <div className="mr-4 hidden lg:block">{navList}</div>
                <Button
                  size="sm"
                  className="hidden lg:inline-block bg-blue-700"
                  onClick={handleLogout}
                >
                  <span>Logout</span>
                </Button>
              </div>
            )}
            {!isAuthenticated && (
              <div className="flex items-center gap-x-1">
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                  onClick={() => navigate("/login")}
                >
                  <span>Log In</span>
                </Button>
                <Button
                  size="sm"
                  className="hidden lg:inline-block bg-blue-700"
                  onClick={() => navigate("/signup")}
                >
                  <span>Sign Up</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default HomeNavbar;
