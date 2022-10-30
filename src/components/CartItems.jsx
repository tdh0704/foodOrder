import React, { useState } from 'react'
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from 'framer-motion';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
const CartItems = ({item}) => {

    const [qty, setQty] = useState(1);
    const [items, setItems] = useState([]);
    const [{cartItems}, dispatch] = useStateValue();

    const cartDispatch = () => {
        localStorage.setItem("cartItem", JSON.stringify(items));
        dispatch({
            type: actionType.SET_CART,
            cartItem: items,
        });
    };

    const updateQty = (action, id) => {
        if (action == "add"){
            setQty(qty+1);
            cartItems.map(item => {
                if (item.id === id){
                    item.qty += 1;
                }
            });
        }
    }
  return (
    <div
   
    className="w-full p-1 px-2 rounded-lg bg-cartItem flex 
items-center gap-2 "
  >
    <img
      src={item?.imageURL}
      alt=""
      className="w-20 h-20 max-2-[60px] 
   rounded-full object-contain"
    />
    {/* Name section */}
    <div className="flex flex-col gap-2">
      <p className="text-base text-gray-50">{item?.title}</p>
      <p className="text-sm block text-gray-300 font-semibold">
        <span>$</span> {parseFloat(item?.price) * qty}
      </p>
    </div>
    {/* button section */}
    <div
      className="group flex items-center gap-2 ml-auto 
   cursor-pointer"
    >
      <motion.div whileTap={{ scale: 0.75 }} onClick = {() => updateQty("remove", item?.id)}>
        <BiMinus className="text-gray-50" />
      </motion.div>

      <p
        className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 
  flex items-center justify-center "
      >
        {qty}
      </p>

      <motion.div whileTap={{ scale: 0.75 }} onClick = {() => updateQty("add", item?.id)}>
        <BiPlus className="text-gray-50" />
      </motion.div>
    </div>
  </div>
  )
};

export default CartItems;
