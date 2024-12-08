import LeftNavMenuItem from "./LeftNavMenuItem";
import React, { useContext, useEffect } from "react";
import { Context } from "../context/contextApi";
import { categories } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);
  const navigate = useNavigate();
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  useEffect(() => {
    // Add dark mode class to HTML element
    document.documentElement.classList.add("dark");
    // Cleanup on component unmount
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);
  return (
    <div
      className={`md:block w-[240px] overflow-y-auto  z-10 lg:z-0  h-screen-56 py-4 bg-black absolute md:relative scrollbar-hide  transition-all ${
        mobileMenu ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="flex px-5 flex-col ">
        {categories.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate(item.ref);
                }}
                className={`${
                  selectCategories === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        
      </div>
     
    </div>
  );
};

export default LeftNav;
