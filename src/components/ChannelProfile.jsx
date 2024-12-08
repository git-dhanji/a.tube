import React, { useState } from "react";
import LeftNav from "./LeftNav";

const ChannelProfile = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription = () => {
    setIsSubscribed(!isSubscribed);
  };
  return (
    <div className="h-full max-w-screen bg-black flex">
      <div className="absolute"><LeftNav/></div>
      <div className="bg-black text-white min-h-screen w-3/5 mx-auto">
        {/* Header Section */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Channel Banner"
            className="w-full h-48 object-cover"
          />
          <div className=" flex items-center space-x-4 p-4 bg-gradient-to-t from-black to-transparent">
            <img
              src="https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?t=st=1733634377~exp=1733637977~hmac=4b56d8e42c65eea6d2d90f12fcee63102e20da2f31e5bf41d0fa718e656332ec&w=826"
              alt="Channel Avatar"
              className="w-16 h-16 rounded-full border-2 border-white"
            />
            <div>
              <h1 className="text-xl font-bold">Channel Name..........</h1>
              <p className="text-sm text-gray-400">@UserName...</p>
              <p className="text-sm text-gray-400">
                19.4M subscribers 10K videos
              </p>
              <p className="text-sm text-gray-400">Bhojpuri Ganne </p>
            </div>
            <button
              onClick={handleSubscription}
              className={`ml-auto px-4 py-2 rounded-full font-semibold ${
                isSubscribed ? "bg-green-500 text-white" : "bg-red-700 text-black"
              }`}
            >
              {isSubscribed ? "Unsubscribe" : "Subscribe"}
            </button>
          </div>
        </div>

        {/* Videos Section */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">All Videos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-900 p-2 rounded-md hover:scale-105 transform transition"
              >
                <img
                  src="https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?t=st=1733634377~exp=1733637977~hmac=4b56d8e42c65eea6d2d90f12fcee63102e20da2f31e5bf41d0fa718e656332ec&w=826"
                  alt="Video Thumbnail"
                  className="w-full h-32 object-cover rounded-md"
                />
                <h3 className="text-sm font-bold mt-2">Video Heading...</h3>
                <p className="text-sm text-gray-400">7,012 views · 2h ago</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelProfile;
