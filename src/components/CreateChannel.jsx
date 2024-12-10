import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/contextApi";

const CreateChannel = () => {
  const [channelName, setChannelName] = useState("");
  const [description, setDescription] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {login}= useContext(Context)
  const handleSubmit = (e) => {
    
    e.preventDefault();
    const data = {
      channelName,
      description,
      profilePicture
    }
    if (channelName.length > 0) {
      login(data)
      navigate("/channel");
    } else {
      setError("Channel name is required");
    }
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
        <h2 className="text-2xl font-semibold text-center">
          Create Your Channel
        </h2>
        <form onSubmit={handleSubmit} className="mt-6">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div className="mb-4">
            <label
              htmlFor="channelName"
              className="block text-sm font-bold mb-2"
            >
              Channel Name
            </label>
            <input
              id="channelName"
              type="text"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              className="w-full px-4 py-2 bg-black text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 bg-black text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              rows="4"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {profilePicture && (
              <img
                src={profilePicture}
                alt="Profile Preview"
                className="mt-4 h-16 w-16 rounded-full object-cover"
              />
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition"
          >
            Create Channel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateChannel;
