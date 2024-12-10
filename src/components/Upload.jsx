import React, { useState } from 'react';
import { CloudUploadIcon, PencilAltIcon, DocumentTextIcon, LockClosedIcon } from '@heroicons/react/outline';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [privacy, setPrivacy] = useState('public');
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!videoFile) {
      alert('Please select a video file to upload!');
      return;
    }

    console.log({
      title,
      description,
      privacy,
      videoFileName: videoFile.name,
    });

    alert('Video uploaded successfully!');
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center px-4">
      <div className="bg-black shadow-lg border-white border-2 rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-100 mb-6 flex items-center">
          <CloudUploadIcon className="h-8 w-8 text-blue-500 mr-3" />
          Upload Video
        </h1>

        {/* File Input */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-300 mb-1 flex items-center">
            <CloudUploadIcon className="h-5 w-5 text-gray-400 mr-2" />
            Select Video
          </label>
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-400 border border-gray-700 rounded-lg bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {videoFile && (
            <p className="mt-2 text-sm text-gray-400">
              Selected File: <span className="text-blue-500">{videoFile.name}</span>
            </p>
          )}
        </div>

        {/* Title Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center">
            <PencilAltIcon className="h-5 w-5 text-gray-400 mr-2" />
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter video title"
            className="mt-1 block w-full px-3 py-2 text-sm text-gray-300 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Description Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center">
            <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-2" />
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter video description"
            rows="4"
            className="mt-1 block w-full px-3 py-2 text-sm text-gray-300 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        {/* Privacy Options */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center">
            <LockClosedIcon className="h-5 w-5 text-gray-400 mr-2" />
            Privacy
          </label>
          <select
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
            className="mt-1 block w-full px-3 py-2 text-sm text-gray-300 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="public" className="bg-gray-800">
              Public
            </option>
            <option value="private" className="bg-gray-800">
              Private
            </option>
            <option value="unlisted" className="bg-gray-800">
              Unlisted
            </option>
          </select>
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
        >
          <CloudUploadIcon className="h-5 w-5 text-white mr-2" />
          Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;
