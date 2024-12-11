import { RouterProvider, createBrowserRouter } from "react-router-dom";
import axios from "axios";
import Layout from "./layout/Layout";
import Feed from "./components/Feed";
import VideoDetails from "./components/VideoDetails";
import SearchResult from "./components/SearchResult";
import WatchHistory from "./components/WatchHistroy";

import { AppContext } from "./context/contextApi";
import ChannelProfile from "./components/ChannelProfile";
import SubscripationPage from "./components/SubscripationPage";
import Upload from "./components/Upload";
import CreateChannel from "./components/CreateChannel";
import SignIn from "./components/SignIn";
import EditProfile from "./components/EditProfile";
import Register from "./components/Register";
import { useEffect } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "history",
        element: <WatchHistory />,
      },
      {
        path: "create-channel",
        element: <CreateChannel />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "/channel",
        element: <ChannelProfile />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/subscribe",
        element: <SubscripationPage />,
      },
      {
        path: "/upload",
        element: <Upload />,
      },
      {
        path: "/searchResult/:searchQuery",
        element: <SearchResult />,
      },
      {
        path: "/video/:id",
        element: <VideoDetails />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    Runner();
  }, []);
  return (
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  );
}

async function Runner() {
  const options = {
    method: "GET",
    url: "https://youtube138.p.rapidapi.com/home/",
    params: { hl: "en", gl: "US" },
    headers: {
      "x-rapidapi-key": "9cf3130877msh8ca27fcb0fb51ffp1390edjsnf51e1cb82b55",
      "x-rapidapi-host": "youtube138.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

Runner();

export default App;
