import React from 'react'
import { Link } from 'react-router-dom';



const OrderForm = () => {
    

  
  return (
    <div className='flex flex-col items-center justify-center bg-white'>
        <h2 className='text-orange-500 font-semibold text-5xl py-16'>Food Oder Form</h2>
        <form className="w-[1200px] flex flex-col " action="">
            <p className="text-xl font-medium my-3">Name</p>
            <div className='w-[50%]'>
                <input type="text" className="outline-none p-2 mr-16 border-2 rounded" placeholder='First Name'/>
                <input type="text" className="outline-none p-2 border-2 rounded" placeholder='Last Name' />
            </div>
            <p className="text-xl font-medium my-3">Address</p>
            <input type="text"  className="w-[50%] outline-none p-2 border-2 rounded" placeholder = "Adress"/>

            <p className="text-xl font-medium my-3">Phone number</p>
            <input type="text" className="w-[50%] outline-none p-2 border-2 rounded" placeholder='Phone Number'/>

            <Link to = "/pay">
                <button className='text-orange-500 font-bold text-xl border-2 px-5 mt-4 hover:bg-orange-500 hover:text-white rounded-md mb-12'>Pay</button>
            </Link>

        </form>
    </div>
  )
}

export default OrderForm;



