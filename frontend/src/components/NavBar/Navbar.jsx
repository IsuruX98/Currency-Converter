import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import AuthModal from "../AuthModel/AuthModel";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import UserProfileModal from "../UserProfileModal/UserProfileModal";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [nav, setNav] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  console.log("user", user);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLoginModal = () => {
    setShowLogin(true);
    setShowRegister(false); // Ensure register modal is closed
  };

  const handleRegisterModal = () => {
    setShowRegister(true);
    setShowLogin(false); // Ensure login modal is closed
  };

  const handleCloseModal = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowProfileModal(false);
  };

  return (
    <nav className="flex justify-between w-full py-4 lg:px-32 px-12 sticky top-0 z-[999]  bg-white">
      {/* Logo */}
      <div className="cursor-pointer lg:hidden">
        <Link to="/" className="text-2xl font-bold text-blue-500">
          Currency Converter
        </Link>
      </div>

      {/* Main Navigation Links */}
      <div className="items-center hidden space-x-12 lg:flex text-white">
        <div className="flex items-center text-blue-500">
          <h3 className="font-extrabold text-blue-500">
            <Link to="/" spy={true} smooth={true} duration={500}>
              <div className="cursor-pointer text-2xl">Currency Converter</div>
            </Link>
          </h3>
        </div>
      </div>

      {/* Auth Links or User Profile Button */}
      <div className="items-center hidden gap-8 lg:flex text-white">
        {user ? (
          <>
            <button
              onClick={() => setShowProfileModal(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-500 shadow-sm border transition-all duration-150 hover:bg-[#d1d5db] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <AiOutlineUser />
              {user.name}
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleLoginModal}
              className="flex items-center justify-center text-black"
            >
              Login
            </button>
            <button
              onClick={handleRegisterModal}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Join for Free
            </button>
          </>
        )}
      </div>

      {/* Login Modal */}
      <AuthModal isOpen={showLogin} onClose={handleCloseModal} mode="login" />

      {/* Register Modal */}
      <AuthModal
        isOpen={showRegister}
        onClose={handleCloseModal}
        mode="register"
      />

      {/* User Profile Modal */}
      {showProfileModal && (
        <UserProfileModal
          user={user}
          onClose={handleCloseModal}
          logout={logout}
        />
      )}

      {/* Mobile Navigation */}
      <div
        onClick={handleNav}
        className="flex items-center justify-center lg:hidden text-gray-800"
      >
        <div className="">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Navigation Content */}
      <div
        className={
          !nav
            ? "fixed left-[-100%] top-0 w-[60%] h-full bg-white ease-in-out duration-500 lg:hidden shadow"
            : "fixed left-0 top-0 w-[60%] h-full ease-in-out bg-white duration-500 lg:hidden shadow"
        }
      >
        <h1 className="font-bold m-8 text-gray-800">
          <Link
            to="/"
            onClick={() => {
              setNav(false);
            }}
            spy={true}
            smooth={true}
            duration={500}
          >
            <h1 className="text-2xl font-bold">Currency Converter</h1>
          </Link>
        </h1>

        {/* Sign In and Sign Up buttons */}
        <div className="flex flex-col mx-5">
          {user ? (
            <button
              onClick={() => setShowProfileModal(true)}
              className="inline-flex mt-8 items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#4f46e5] shadow-sm transition-all duration-150 hover:bg-[#d1d5db] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <AiOutlineUser />
              {user.name}
            </button>
          ) : (
            <>
              <button
                onClick={handleLoginModal}
                className="text-white mt-4 py-2 px-4 border border-transparent rounded-md text-sm font-medium bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Sign In
              </button>
              <button
                onClick={handleRegisterModal}
                className="text-white mt-4 py-2 px-4 border border-transparent rounded-md text-sm font-medium bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Sign Up for Free
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
