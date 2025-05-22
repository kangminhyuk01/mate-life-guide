
import { useState } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatContent from "@/components/chat/ChatContent";
import ChatModeToggle from "@/components/chat/ChatModeToggle";
import ChatFooter from "@/components/chat/ChatFooter";

const FriendlyChat = () => {
  return (
    <main className="flex overflow-hidden flex-col pt-14 pb-32 bg-white max-md:pb-24">
      <div className="flex self-center w-full max-w-[1362px] max-md:max-w-full">
        {/* Side Panel Navigation */}
        <ChatSidebar />

        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          {/* Header Section */}
          <ChatHeader />

          {/* Main Chat Interface */}
          <section className="flex z-10 flex-wrap gap-10 self-end -mt-4 w-full max-w-[1189px] max-md:mr-2.5 max-md:max-w-full">
            <ChatContent />

            {/* Mode Toggle Button */}
            <ChatModeToggle />
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <ChatFooter />
    </main>
  );
};

export default FriendlyChat;
