
import { Link } from "react-router-dom";

interface NavbarProps {
  isLoggedIn?: boolean;
}

const Navbar = ({ isLoggedIn = false }: NavbarProps) => {
  return (
    <nav className="flex flex-col items-start pt-4 w-full text-base font-medium leading-none bg-slate-50 text-neutral-800">
      <div className="flex flex-wrap gap-5 justify-between w-full">
        <div className="flex gap-7 my-auto">
          <h1 className="grow text-2xl tracking-tighter leading-none text-sky-600">
            Campus Mate
          </h1>
          <Link to={isLoggedIn ? "/home-logged-in" : "/"} className="hover:text-sky-600">
            Home
          </Link>
          <Link to="#" className="hover:text-sky-600">
            Features
          </Link>
        </div>
        <div className="flex gap-8 items-center">
          <Link to="#" className="self-stretch my-auto hover:text-sky-600">
            Download app
          </Link>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/eee0d79f4477db59b98ca51a827958476e4f1c9a?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-px rounded-sm aspect-[0.03]"
            alt="Divider"
          />
          {isLoggedIn ? (
            <Link to="/" className="self-stretch my-auto hover:text-sky-600">
              Log out
            </Link>
          ) : (
            <Link to="/login" className="self-stretch my-auto hover:text-sky-600">
              Log in
            </Link>
          )}
          <Link
            to={isLoggedIn ? "#" : "/login"}
            className="self-stretch px-4 py-2 bg-sky-500 text-white hover:bg-sky-600 transition-colors"
          >
            Try it free
          </Link>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/1092f1bffb6a11d0b63f064e37f27bdfa64b7223?placeholderIfAbsent=true"
        className="object-contain mt-4 w-full aspect-[1000]"
        alt="Decorative line"
      />
    </nav>
  );
};

export default Navbar;
