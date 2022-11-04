import React, { useState } from "react";
import Logo from "../img/logo.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Avatar from "../img/avatar.png";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { getExtraUserInfo } from "../untils/firebaseFunctions";

const RoleComponent = (props) => {
  const { children, role = "" } = props;
  const [{ user }] = useStateValue();

  if (user?.extraUserInfo?.role !== role) return null;

  return <>{children}</>;
};

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const res = await signInWithPopup(firebaseAuth, provider);

      const {
        user: { refreshToken, providerData, reloadUserInfo },
      } = res;
      const extraUserInfo = await getExtraUserInfo(reloadUserInfo.localId);
      const userData = { ...providerData[0], extraUserInfo };

      console.log("userData", userData);
      dispatch({
        type: actionType.SET_USER,
        user: userData,
      });
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      setIsMenu(!isMenu);
    }
  };
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* {desktop & tablet} */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-x1 font-bold">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
            <Link to = "/">
              <li
                className="text-base text-textColor hover:text-headingColor duration-100
          transition-all ease-in-out
           cursor-pointer "
              >
                Home
              </li>
            </Link>
            <Link to="/menu">
              <li
                className="text-base text-textColor hover:text-headingColor duration-100
          transition-all ease-in-out
           cursor-pointer "
              >
                Menu
              </li>
            </Link>
            <li
              className="text-base text-textColor hover:text-headingColor duration-100
          transition-all ease-in-out
           cursor-pointer "
            >
              About Us
            </li>

            <li
              className="text-base text-textColor hover:text-headingColor duration-100
          transition-all ease-in-out
           cursor-pointer "
            >
              Service
            </li>
          </motion.ul>

          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-while font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>

          <div className="relative">
            {" "}
            {console.log(user)}
            <img
              whiletap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
              referrerPolicy="no-referrer"
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute
          top-12 right-0 px-4 py-2"
              >
                <RoleComponent role="admin">
                  {user && user.email && (
                    <Link to={"/createItem"}>
                      <p
                        className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
              transition-all duration-100 ease-in-out text-base"
                        onClick={() => setIsMenu(false)}
                      >
                        New Item <MdAdd />
                      </p>
                    </Link>
                  )}
                </RoleComponent>

                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
              transition-all duration-100 ease-in-out text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-while font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-x1 font-bold">City</p>
        </Link>

        <div className="relative">
          <motion.img
            whiletap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute
          top-12 right-0 px-4 py-2"
            >
              <RoleComponent role="admin">
                {user && user.email && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
              transition-all duration-100 ease-in-out text-base"
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
              </RoleComponent>

              <ul className="flex flex-col px-4 py-2">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100
          transition-all ease-in-out
           cursor-pointer hover:bg-slate-100 px-4 py-2"
                >
                  Home
                </li>
                <Link to={"/menu"}>
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100
          transition-all ease-in-out
           cursor-pointer hover:bg-slate-100 px-4 py-2"
                  >
                    Menu
                  </li>
                </Link>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100
          transition-all ease-in-out
           cursor-pointer hover:bg-slate-100 px-4 py-2"
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100
          transition-all ease-in-out
           cursor-pointer hover:bg-slate-100 px-4 py-2"
                >
                  Service
                </li>
              </ul>
              {/*  */}
              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center 
                bg-gray-200
                gap-3 cursor-pointer hover:bg-gray-300
              transition-all duration-100 ease-in-out text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
