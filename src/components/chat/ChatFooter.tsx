
import React from "react";

const ChatFooter = () => {
  return (
    <footer className="flex flex-col pt-24 pb-8 w-full text-base font-medium leading-none text-gray-800 bg-white max-md:max-w-full">
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/72736308ef58234350c9db67fdcac42557a7e0ba?placeholderIfAbsent=true" 
        alt="Divider" 
        className="object-contain w-full aspect-[1000] max-md:max-w-full" 
      />

      <div className="flex gap-5 justify-between self-center mt-10 w-full max-w-[1218px] max-md:max-w-full">
        {/* Company Logo and Info */}
        <div className="self-start mt-2 text-2xl font-extrabold tracking-tighter leading-none text-cyan-800">
          <h2>Campus Mate</h2>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/737595f120a8f9e6edc2a45562435d7a13ca300b?placeholderIfAbsent=true" 
            alt="Payment options" 
            className="object-contain mt-14 w-24 aspect-[4] max-md:mt-10" 
          />
        </div>

        {/* Footer Links */}
        <nav className="flex flex-col">
          <h3 className="text-neutral-800">Company</h3>
          <a href="#" className="mt-2 max-md:mr-1.5">About Us</a>
          <a href="#" className="self-start mt-2">Careers</a>
          <a href="#" className="self-start mt-2">Press</a>
        </nav>

        <nav className="flex flex-col items-start">
          <h3 className="text-neutral-800">Support</h3>
          <a href="#" className="mt-2">Help Center</a>
          <a href="#" className="mt-2">Contact Us</a>
          <a href="#" className="self-stretch mt-2">Privacy Policy</a>
        </nav>

        <nav className="flex flex-col items-start self-start">
          <h3 className="text-neutral-800">Legal</h3>
          <a href="#" className="self-stretch mt-2">Terms of Service</a>
          <a href="#" className="mt-2">Cookie Policy</a>
        </nav>

        <nav className="flex flex-col items-start whitespace-nowrap">
          <h3 className="text-neutral-800">Social</h3>
          <a href="#" className="self-stretch mt-2">Facebook</a>
          <a href="#" className="mt-2">Twitter</a>
          <a href="#" className="mt-2">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
};

export default ChatFooter;
