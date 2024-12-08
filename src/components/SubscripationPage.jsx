import React from "react";
import SubscriptionCard from "./SubscriptionCard";

const subscriptions = [
  {
    id: 1,
    name: "TechSavvy",
    avatar: "https://via.placeholder.com/50",
    videos: 120,
    subscriber:"100"
    
  },
  {
    id: 2,
    name: "GamingWorld",
    avatar: "https://via.placeholder.com/50",
    videos: 85,
    subscriber:'1M'
  },
  {
    id: 3,
    name: "Daily Vlogs",
    avatar: "https://via.placeholder.com/50",
    videos: 45,
    subscriber:"300K"
  },
];

const Subscriptions = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-black">
      <h1 className="text-2xl font-bold mb-6 text-white">Subscriptions</h1>
      <div className="grid gap-4">
        {subscriptions.map((channel) => (
          <SubscriptionCard key={channel.id} channel={channel} />
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
