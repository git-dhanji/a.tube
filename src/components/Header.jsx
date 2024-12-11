

import { useContext, useState, useEffect } from "react";
import { Context } from "./../context/contextApi";
import { Link, unstable_HistoryRouter, useLocation, useNavigate } from "react-router-dom";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";



const Header = () => {
  
  
  const [searchQuery, setSearchQuery] = useState("");
  const {  mobileMenu, setMobileMenu, users, logout } =
    useContext(Context);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
  const data=JSON.parse(localStorage.getItem('user'))
 
  const userData =data

  useEffect(() => {
    
    document.documentElement.classList.add("dark");
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/:${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    navigate("/");
    logout();
  };

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black dark:bg-black">
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center text-3xl text-red-500">
          Streaming
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e?.target?.value)}
            onKeyUp={searchQueryHandler}
            placeholder="Search"
            value={searchQuery}
          />
        </div>
        <button
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>
      <div className="flex items-center relative">
        <div className="hidden md:flex">
          {userData && (
            <div
              className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
              onClick={() => navigate("/upload")}
            >
              <RiVideoAddLine className="text-white text-xl cursor-pointer" />
            </div>
          )}
        </div>
        <div
          className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4 cursor-pointer relative"
          onClick={toggleDropdown}
        >
          <img
            src={userData?.avatar}
            alt="User Avatar"
          />
        </div>
        {dropdownOpen && (
          <div className="absolute right-0 top-12 bg-gray-900 text-white text-sm rounded-md shadow-lg py-2 w-64">
            {userData ? (
              <>
                <div className="px-4 py-3 border-b border-gray-700">
                  <div className="flex items-center">
                    <img
                      src={userData?.avatar}
                      alt="User Avatar"
                      className="h-10 w-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold">{userData?.username}</p>
                      <p className="text-gray-400 text-xs">{userData?.email}</p>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-4 flex justify-between">
                  {users ? (
                    <div
                      className="border cursor-pointer hover:bg-gray-600 hover:text-black border-white rounded text-center p-1"
                      onClick={() => {
                        navigate("/channel");
                        setDropdownOpen(!dropdownOpen);
                      }}
                    >
                      View Channel
                    </div>
                  ) : (
                    <div
                      className="border cursor-pointer hover:bg-gray-600 hover:text-black border-white rounded text-center p-1"
                      onClick={() => {
                        navigate("/create-channel");
                        setDropdownOpen(!dropdownOpen);
                      }}
                    >
                      Create Channel
                    </div>
                  )}
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  onClick={() => {
                    navigate("/edit-profile");
                  }}
                >
                  Edit Profile
                </div>

                <div
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </div>
                <div
                  className="px-4 border border-red-300 py-2 hover:bg-gray-800 cursor-pointer text-red-700 mx-4 my-4 text-center text-md rounded-md"
                  onClick={() => {
                    setDropdownOpen(!dropdownOpen);
                  }}
                >
                  Close
                </div>
              </>
            ) : (
              <>
                <div
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  onClick={() => {
                    setDropdownOpen(!dropdownOpen);
                    navigate("/register");
                  }}
                >
                 Register
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  onClick={() => {
                    navigate("/sign-in");
                    setDropdownOpen(!dropdownOpen);
                  }}
                >
                  Login
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
