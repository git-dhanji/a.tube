import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
        element: <Register/>,
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
  
  return (
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  );
}

export default App;
