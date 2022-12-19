import React, { useState } from 'react'
import QrPay from "../img/QrPay.jpeg";

import { getInfoOrder } from '../untils/firebaseFunctions';


const Pay = () => {
    getInfoOrder().then(data => data)
        .then(item => (console.log(item)))
        
    const [active, setActive] = useState(false);
    const cartSt = localStorage?.getItem('cartItems');

    console.log( JSON.parse(cartSt))
  return (
    <div className='w-full flex items-center justify-center'>
        <div className='w-[1200px] bg-white flex pb-8'>
                <div className='w-[50%] cursor-pointer border-r-2 pl-8 pt-8 '>
                    <section className='py-32 flex flex-col'>
                        <div 
                        onClick={() => setActive(true)}
                        className={` text-lg font-semibold mb-2 ${active ? `text-orange-500` : ''}`}>Pay for online</div>
                        <div
                        onClick = {() => setActive(false)}
                        className={` text-lg font-semibold ${active ? '' : `text-orange-500` }`}>Cash</div>
                    </section>
                </div>
                <div className='w-[50%] pl-8 pt-8 flex flex-col justify-center items-center'>
                   {
                       active && (
                        <img className= "w-[50%]" src={QrPay} alt="" />
                       )
                   }
                    <button className='text-2xl font-semibold border-2 px-4 py-1 rounded-xl hover:bg-orange-500 hover:text-white
                    '>Confirm</button>
                </div>
        </div>
    </div>
  )
};



export default Pay;
