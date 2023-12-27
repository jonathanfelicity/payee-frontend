import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { logo } from "../../assets";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [openMenu, setOpenMenu] = useState(false)


  return (
    <>
      <header className="bg-bg sticky top-0 z-20 shadow-md px-6 gap-4 flex items-center justify-between h-16">

        <div className="flex items-center">
          <Link
            to="/"
            className=" flex items-center justify-between gap-3 rounded-md text-sm font-medium"
          >
            <img
              src={logo}
              alt="logo"
              className="animate-spin rounded-full w-8 h-8"
            />
            <span className="font-bold">Payee</span>
          </Link>
        </div>

        <nav className={` bg-bg h-screen fixed top-0 right-0  z-10 overflow-y-auto flex flex-col-reverse gap-8 items-center justify-center w-[70%] transition duration-500 ${openMenu ? 'translate-x-[0]' : 'translate-x-[100%]'} phone:static phone:translate-x-0 phone:h-fit phone:flex-row phone:w-full`}>

          <IoMdClose onClick={()=>setOpenMenu(false)} className="absolute top-4 left-4 text-3xl cursor-pointer phone:hidden" />

          <div className="phone:block text-sm mx-6 text-center w-[16rem] tablet:w-fit">
            <span>
              👋 Enroll today and claim a 20% bonus credit when you transact
              online!
            </span>
          </div>

          {isAuthenticated ? (
            <div className="flex flex-col gap-5 items-center justify-center phone:flex-row">
              <Link
                to="/dashboard"
                className="bg-black text-gray-300  px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </Link>

              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <div className="flex flex-col gap-5 items-center justify-center phone:flex-row ">
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
        </nav>

        <MdMenu onClick={()=>setOpenMenu(true)} className="text-3xl cursor-pointer  phone:hidden" />
      </header>

      {/* <header className="bg-white md:hidden block sticky top-0 z-10 shadow-md">
        <nav className="flex items-center justify-between px-4 py-3">
          <Link to="/">
            <img src={logo} alt="logo" className="w-8 h-8" />
          </Link>

          <button className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/auth/signup"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Signup
            </Link>

            <Link
              to="/auth/login"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Header;
