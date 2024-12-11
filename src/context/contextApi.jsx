import { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [users, setUser] = useState(null);
  const [channelData, setChannelData] = useState(null);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);

    // Load user and channel data from localStorage
    // const storedUser = localStorage.getItem("user");
    // const storedChannel = localStorage.getItem("channelData");
    
    // if (storedUser) setUser(JSON.parse(storedUser));
    // if (storedChannel) setChannelData(JSON.parse(storedChannel));
  }, [selectCategories]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`)
      .then(({ contents }) => {
        setSearchResults(contents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);  // Ensure loading state is turned off in case of error
      });
  };

  const login = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data)); // Persist user data
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const createChannel = (data) => {
    setChannelData(data);
    localStorage.setItem("channelData", JSON.stringify(data));
  };

  return (
    <Context.Provider
      value={{
        loading,
        users,
        channelData,
        login,
        logout,
        createChannel,
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
