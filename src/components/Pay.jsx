import React, { useState } from 'react'
import QrPay from "../img/QrPay.jpeg";

const Pay = () => {
    const [active, setActive] = useState(false);
  return (
    <div className='w-full flex items-center justify-center'>
        <div className='w-[1200px] bg-white flex '>
                <div className='w-[50%] cursor-pointer border-r-2 pl-8 pt-8 '>
                    <section className='py-32 flex flex-col'>
                        <div className='text-lg font-semibold mb-2'>Pay for online</div>
                        <div className='text-lg font-semibold'>Cash</div>
                    </section>
                </div>
                <div className='w-[50%] pl-8 pt-8 flex flex-col justify-center items-center'>
                    <img className= "w-[50%]" src={QrPay} alt="" />
                    <button className='text-2xl font-semibold border-2 px-4 py-1 rounded-xl '>Confirm</button>
                </div>
        </div>
    </div>
  )
};



export default Pay;
