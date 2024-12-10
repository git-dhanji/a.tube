import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/contextApi";

const CreateChannel = () => {
  const [channelName, setChannelName] = useState("");
  const [description, setDescription] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { users, login } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!channelName) {
      setError("Channel name is required");
      return;
    }
  
    const channelData = {
      channelName,
      description,
      profilePicture,
    };
  
    login({ ...users, channel: channelData }); // Add channel data to user context
    navigate("/channel");
  };
  
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="w-full max-w-md bg-[#1e1e1e] rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center">Create Your Channel</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="channelName" className="block text-sm font-medium">
              Channel Name
            </label>
            <input
              type="text"
              id="channelName"
              className="w-full px-3 py-2 mt-1 bg-[#2c2c2c] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              className="w-full px-3 py-2 mt-1 bg-[#2c2c2c] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
            />
          </div>
          <div>
            <label htmlFor="profilePicture" className="block text-sm font-medium">
              Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              className="mt-1"
              onChange={handleProfilePictureChange}
            />
            {profilePicture && (
              <div className="mt-2">
                <img
                  src={profilePicture}
                  alt="Profile Preview"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
            )}
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Channel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateChannel;
