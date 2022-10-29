import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
const CartContainer = () => {
  return (
    <div
      className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md  
    flex flex-col z-[101]"
    >
      <div
        className="w-full flex items-center justify-between 
        p-4 cursor-pointer"
      >
        <motion.div 
        whileTap={{scale : 0.75}}>
          <MdOutlineKeyboardBackspace
            className="text-textColor text-3xl 
            "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CartContainer;
