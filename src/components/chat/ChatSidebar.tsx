
import React from "react";

const ChatSidebar = () => {
  return (
    <nav className="overflow-hidden self-start py-6 mt-28 text-base font-medium leading-none whitespace-nowrap bg-white text-neutral-800 max-md:mt-10">
      <ul>
        <li className="px-4 py-2 bg-white rounded-lg">Dashboard</li>
        <li className="px-4 py-2 bg-white rounded-lg max-md:pr-5">Messages</li>
        <li className="px-4 py-2 bg-white rounded-lg max-md:pr-5">Settings</li>
        <li className="px-4 py-2 bg-white rounded-lg max-md:pr-5">Help</li>
      </ul>
    </nav>
  );
};

export default ChatSidebar;
