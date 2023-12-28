import { Link } from "react-router-dom";
import { logo } from "../../assets";
import useAuth from "../../hooks/useAuth";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white sticky top-0 z-20 shadow-md  ">
        <div className="px-6 gap-4 hidden md:flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className=" flex items-center justify-between gap-3 rounded-md text-sm font-medium"
            >
              <img src={logo} alt="logo" className=" rounded-full w-8 h-8" />
              {" / "}
              <span className="font-bold"> payee@example.io</span>
            </Link>
          </div>

          <div className="text-sm mx-6 text-center w-[16rem] tablet:w-fit">
            <span>
              👋 Enroll today and claim a 20% bonus credit when you transact
              online!
            </span>
          </div>

          {isAuthenticated ? (
            <div className="">
              <Link
                to="/dashboard"
                className="bg-black text-gray-300  px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </Link>

              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <div className="">
              <Link
                to="/auth/login"
                className="text-black font-bold px-3 py-2 rounded-md text-sm"
              >
                login
              </Link>

              <Link
                to="/auth/signup"
                className="bg-black text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                <span className="font-bold">Signup</span> - it's free
              </Link>
            </div>
          )}
        </div>

        <div className="flex md:hidden items-center justify-between bg-white sticky top-0 z-20 shadow-md px-6 h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className=" flex items-center justify-between gap-3 rounded-md text-sm font-medium"
            >
              <img src={logo} alt="logo" className=" rounded-full w-8 h-8" />
              {" / "}
              <span className="font-bold"> payee@jonathanfelicity.ng</span>
            </Link>
          </div>

          <div className="div">
            <HiMenuAlt1 className="w-6 h-6 stroke-1" onClick={toggleMenu} />
          </div>
        </div>

        {/* Slide-in menu */}
        <div
          className={`fixed top-0 right-0 h-full bg-white z-30 shadow-md transition-all duration-300 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: "250px" }}
        >
          <div className="h-full w-full flex flex-col gap-4 px-4 py-6">
            {isAuthenticated ? (
              <div className="">
                <Link
                  to="/dashboard"
                  className="bg-black text-gray-300  px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>

                <button onClick={logout}>Logout</button>
              </div>
            ) : (
              <div className="">
                <Link
                  to="/auth/login"
                  className="text-black font-bold px-3 py-2 rounded-md text-sm"
                >
                  login
                </Link>

                <Link
                  to="/auth/signup"
                  className="bg-black text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <span className="font-bold">Signup</span> - it's free
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Overlay for closing menu */}
        {isMenuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20"
            onClick={toggleMenu}
          />
        )}
      </header>
    </>
  );
};

export default Header;
