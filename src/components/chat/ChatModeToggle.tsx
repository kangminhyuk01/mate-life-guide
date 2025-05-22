
import React from "react";
import { Link } from "react-router-dom";

const ChatModeToggle = () => {
  return (
    <Link to="/formal-chat" className="flex gap-2 self-end text-base font-bold text-sky-500 whitespace-nowrap mt-[599px] max-md:mt-10">
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/ba9228467889a5c4b8eb820f798a7329ba956025?placeholderIfAbsent=true" 
        alt="Mode toggle" 
        className="object-contain shrink-0 aspect-square rounded-[90px] w-[45px]" 
      />
      <span className="my-auto">존댓말모드하기<br /></span>
    </Link>
  );
};

export default ChatModeToggle;
