import { useContext } from "react";
import { Context } from "../context/contextApi";

const Channel = () => {
  const { users } = useContext(Context);
  const VidData = [
    {
      id: 1,
      title: "How to Build a React App",
      description:
        "In this tutorial, we'll walk through building a React app from scratch.",
      thumbnail: "https://via.placeholder.com/300x180.png?text=React+App",
      uploadDate: "2024-12-05",
      views: 1500,
      tags: ["React", "JavaScript", "Frontend"],
      duration: "15:30", // duration in minutes and seconds
      author: {
        name: "John Doe",
        avatar: "https://api.multiavatar.com/johndoe.svg",
      },
      videoUrl: "/videos/1",
    },
    {
      id: 2,
      title: "Understanding JavaScript Closures",
      description: "A deep dive into JavaScript closures and how they work.",
      thumbnail:
        "https://via.placeholder.com/300x180.png?text=JavaScript+Closures",
      uploadDate: "2024-11-25",
      views: 3200,
      tags: ["JavaScript", "Closures", "Programming"],
      duration: "10:45",
      author: {
        name: "Jane Smith",
        avatar: "https://api.multiavatar.com/janesmith.svg",
      },
      videoUrl: "/videos/2",
    },
    {
      id: 3,
      title: "CSS Grid Tutorial for Beginners",
      description:
        "Learn the basics of CSS Grid layout with hands-on examples.",
      thumbnail: "https://via.placeholder.com/300x180.png?text=CSS+Grid",
      uploadDate: "2024-12-01",
      views: 1800,
      tags: ["CSS", "Grid", "Frontend"],
      duration: "12:10",
      author: {
        name: "Mike Lee",
        avatar: "https://api.multiavatar.com/mikelee.svg",
      },
      videoUrl: "/videos/3",
    },
    // Add more videos as needed
  ];

  if (!users?.channel) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <p className="text-xl">No channel found. Please create one!</p>
      </div>
    );
  }

  const { channelName, description, profilePicture } = users.channel;

  return (
    <div className="bg-black text-white min-h-screen max-w-7xl mx-auto">
      {/* Banner */}
      <div className="relative bg-gray-800 h-48">
        <div className="absolute -bottom-12 left-4 flex items-center">
          {/* Profile Picture */}
          <img
            src={profilePicture }
            alt="Channel Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-black"
          />
          <div className="ml-4">
            <h2 className="text-2xl font-semibold">{channelName}</h2>
            <p className="text-sm text-gray-400">
              {description || "No description provided"}
            </p>
          </div>
        </div>
      </div>

      {/* Channel Navigation */}
      <div className="mt-16 border-t border-gray-700">
        <div className="flex justify-center space-x-6 py-4">
          <button className="px-4 py-2 text-gray-300 hover:text-white border-b-2 border-transparent hover:border-red-500">
            Videos
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 md:px-8 mt-4">
        <h3 className="text-xl font-semibold mb-4">Videos</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {VidData.map((video, index) => (
            <div key={index} className="bg-gray-800 p-2 rounded-lg">
              {/* Thumbnail Section */}
              <div
                className="h-40 bg-gray-700 rounded-md mb-2"
                style={{
                  backgroundImage: `url(${video.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Title Section */}
              <p className="text-sm truncate">{video.title}</p>
            </div>
          ))}
        
        </div>
      </div>
    </div>
  );
};

export default Channel;
