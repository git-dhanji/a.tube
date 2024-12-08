import React from "react";
import LeftNav from "./LeftNav";
import images from "../assets/images";
import SearchResult from "./SearchResult";
import SearchResultVideoCard from "./SearchResultVideoCard";

const WatchHistory = () => {
  const clearHistory = () => {
    console.log("history clear");
  };
  const historyData = [
    {
      id: 1,
      title: "How to Learn React",
      description: "A comprehensive guide to learning React.js",
      thumbnail: images.image1,
      timeWatched: "2 hours ago",
    },
    {
      id: 2,
      title: "JavaScript Basics for Beginners",
      description: "Learn the basics of JavaScript with simple examples",
      thumbnail: images.image2,
      timeWatched: "1 day ago",
    },
    {
      id: 3,
      title: "Advanced CSS Techniques",
      description: "Explore advanced CSS concepts and styling tricks",
      thumbnail: images.image3,
      timeWatched: "3 days ago",
    },
  ];

  return (
    <div className="flex bg-black">
      {/* left navbar */}
      <div className="">{<LeftNav />}</div>
      {/* wathc History ui */}
      <div className="w-screen max-w-5xl p-4 bg-black relative">
        {
          historyData.map((data,index)=>(
            <div className="flex bg-black shadow-md rounded-lg overflow-hidden w-full max-w-3xl mx-auto cursor-pointer">
          {/* Thumbnail */}
          <div className="relative w-1/3 pb-4">
            <img
              src={data.thumbnail}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1.5 py-0.5 rounded">
              10:30
            </span>
          </div>
          {/* Details Section */}
          <div className="flex-1 p-4">
            <h3 className="text-lg font-semibold text-white line-clamp-2">
             {data.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {data.id} • 1.2M views • 1 week ago
            </p>
            <p className="text-sm text-gray-500 mt-2 line-clamp-3">
             {data.description}
            </p>
          </div>
        </div> 
          ))
        }
      </div>
    </div>
  );
};

export default WatchHistory;
