import React, { useState } from "react";

const SubscriptionCard = ({ channel }) => {
  const [isSubscribed, setIsSubscribed] = useState(true);

  const handleToggleSubscription = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition">
      <img
        src={channel.avatar}
        alt={`${channel.name} avatar`}
        className="w-12 h-12 rounded-full"
      />
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-semibold text-white">{channel.name}</h3>
        <div className="flex">
          <p className="text-gray-400 pr-4">Subscriber {channel.subscriber}</p>
          <p className="text-sm text-gray-500">{channel.videos} videos</p>
        </div>
      </div>
      <button
        className={`px-4 py-2 rounded-md border transition ${
          isSubscribed
            ? "text-red-600 border-red-600 hover:bg-red-100"
            : "text-green-600 border-green-600 hover:bg-green-100"
        }`}
        onClick={handleToggleSubscription}
      >
        {isSubscribed ? "Unsubscribe" : "Subscribe"}
      </button>
    </div>
  );
};

export default SubscriptionCard;
