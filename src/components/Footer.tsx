
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 mt-9 -mb-5 w-full text-base font-medium leading-none bg-slate-50 text-neutral-800">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/1092f1bffb6a11d0b63f064e37f27bdfa64b7223?placeholderIfAbsent=true"
        className="object-contain w-full aspect-[1000]"
        alt="Divider line"
      />
      <div className="flex gap-5 justify-between mt-6 ml-12 w-full max-w-[1199px] max-md:max-w-full max-md:flex-wrap max-md:ml-5">
        <div className="self-start mt-2 text-2xl tracking-tighter leading-none text-sky-600">
          <h2>Campus Mate</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/b462f5740917c1724a0162c19ed670a2c1ba5a76?placeholderIfAbsent=true"
            className="object-contain mt-14 w-24 aspect-[4] max-md:mt-10"
            alt="Company logo"
          />
        </div>
        <nav className="flex flex-col">
          <h3>Company</h3>
          <Link to="#" className="mt-2 max-md:mr-0.5 hover:text-sky-600">About Us</Link>
          <Link to="#" className="self-start mt-2 hover:text-sky-600">Careers</Link>
          <Link to="#" className="self-start mt-2 hover:text-sky-600">Blog</Link>
        </nav>
        <nav className="flex flex-col items-start">
          <h3>Resources</h3>
          <Link to="#" className="mt-2 hover:text-sky-600">Help Center</Link>
          <Link to="#" className="mt-2 hover:text-sky-600">Contact Support</Link>
          <Link to="#" className="self-stretch mt-2 hover:text-sky-600">API Documentation</Link>
        </nav>
        <nav className="flex flex-col items-start self-start">
          <h3>Legal</h3>
          <Link to="#" className="mt-2 hover:text-sky-600">Privacy Policy</Link>
          <Link to="#" className="self-stretch mt-2 hover:text-sky-600">Terms of Service</Link>
        </nav>
        <nav className="flex flex-col">
          <h3>Follow Us</h3>
          <Link to="#" className="self-start mt-2 hover:text-sky-600">Twitter</Link>
          <Link to="#" className="self-start mt-2 hover:text-sky-600">LinkedIn</Link>
          <Link to="#" className="mt-2 hover:text-sky-600">Facebook</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
