import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Feed from "./components/Feed";
import VideoDetails from "./components/VideoDetails";
import SearchResult from "./components/SearchResult";
import WatchHistory from "./components/WatchHistroy";

import { AppContext } from "./context/contextApi";
import ChannelProfile from "./components/ChannelProfile";
import SubscripationPage from "./components/SubscripationPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Feed />
      },
      {
        path:'history',
        element:<WatchHistory/>
      },
      {
        path:'/profile',
        element:<ChannelProfile/>
      },
      {
        path:'/subscribe',
        element:<SubscripationPage/>
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
