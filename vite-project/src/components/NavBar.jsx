import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isSelected, setIsSelected] = useState("");
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    setIsSelected(location.pathname);
  }, [location.pathname]);
  const navElement = [
    {
      id: 0,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: "Calculator",
      link: "/calculate",
    },
    {
      id: 2,
      name: "Fee Details",
      link: "/feeDetails",
    },
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-around">
        {navElement.map((element) => (
          <Link
            key={element.id}
            to={element.link}
            className={` text-lg hover:underline ${
              isSelected === element.link ? "text-red-600" : "text-white"
            }`}
          >
            {element.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
