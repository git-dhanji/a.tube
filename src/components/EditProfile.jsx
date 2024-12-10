import React, { useState } from "react";

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState("https://api.multiavatar.com/default.svg");
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [bio, setBio] = useState("This is my bio!");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleSave = () => {
    // Save updated profile data to the backend or local storage
    console.log({ profileImage, name, email, bio });
    alert("Profile Updated!");
  };

  return (
    <div className="min-h-screen bg-black dark:bg-gray-900 flex justify-center items-center">
      <div className="bg-black border border-white text-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-white dark:text-white mb-6">
          Edit Profile
        </h2>

        <div className="flex flex-col items-center mb-6">
          <img
            src={profileImage}
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover mb-4"
          />
          <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Upload New Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 dark:text-gray-300 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 dark:text-gray-300 mb-1">Email</label>
          <input
            type="email"
            value={email}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-400 focus:ring-2 focus:ring-blue-500 outline-none cursor-not-allowed"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 dark:text-gray-300 mb-1">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            rows="4"
          ></textarea>
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
