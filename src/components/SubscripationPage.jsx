import React from "react";
import SubscriptionCard from "./SubscriptionCard";
import LeftNav from "./LeftNav";
import {man,panda,profile} from '../assets/avatar'
const subscriptions = [
  {
    id: 1,
    name: "TechSavvy",
    avatar: man,
    videos: 120,
    subscriber:"100"
    
  },
  {
    id: 2,
    name: "GamingWorld",
    avatar: panda,
    videos: 85,
    subscriber:'1M'
  },
  {
    id: 3,
    name: "Daily Vlogs",
    avatar: profile,
    videos: 45,
    subscriber:"300K"
  },
];

const Subscriptions = () => {
  return (
    <>
    <div>
    <div className='absolute  left-0'>{<LeftNav/>}</div>
    <div className="p-6 max-w-4xl mx-auto bg-black">
      <h1 className="text-2xl font-bold mb-6 text-white">Subscriptions</h1>
      <div className="grid gap-4">
        {subscriptions.map((channel) => (
          <SubscriptionCard key={channel.id} channel={channel} />
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Subscriptions;
