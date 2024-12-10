/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext, useState } from "react";
import { useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [users, setUser] = useState(null); // `user` is null if not logged in
 


  useEffect(() => {
    featchSelectedCategoryData(selectCategories);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [selectCategories]);
  const featchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      setSearchResults(contents);
      setLoading(false);
    });
  };

 

  // Login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    // navigate('/')
    localStorage.removeItem("user");
  };

  return (
    <Context.Provider
      value={{
        loading,
        users,
        login,
        logout,
        setLoading,
        searchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
