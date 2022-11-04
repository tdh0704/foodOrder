import React, { useState } from "react";
import { Link } from "react-router-dom";
import { saveOrder } from "../untils/firebaseFunctions";
import { getAllOrders} from "../untils/firebaseFunctions";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
// const [{orders}, dispatch] = useStateValue();
const OrderForm = () => {
  const [firstName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!firstName || !lastName || !address || !number) {
        setFields(true);
        setMsg("Dữ liệu không được để trống");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      }else {
        const data = {
          id: `${Date.now()}`,
          name: `${firstName} ${lastName}`,
          address: address,
          number: number
        };
        saveOrder(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Cập nhật dữ liệu thành công");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
          
        }, 4000);
        
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Lỗi tải file lên!");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
    // fetchData();
  };

  

  // const fetchData = async () => {
  //   await getAllOrders().then((data) => {
  //     dispatch({
  //       type: actionType.SET_ORDER,
  //       orders : data
  //     })
  //   });
  // };

  // const Input = document.querySelector("input");
  // const phoneInput = document.querySelector("phone__input");

  // const submitBtn = document.querySelector(".button");
  // submitBtn?.addEventListener("click", () => {
  //   console.log(Input?.value.length);
  //   if (Input?.value?.length <= 0 || phoneInput?.value?.length < 10) {
  //     alert("Thông tin bạn điền chưa dủ hoặc số điện thoại không đúng");
  //   } else {
  //     const data = {
  //       id: `${Date.now()}`,
  //       name:  `${firstName} ${lastName}`,
  //       address: address,
  //       phone: number,
  //     };
  //     saveOrder(data);
  //   }
  // });

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <h2 className="text-orange-500 font-semibold text-5xl py-16">
        Food Oder Form
      </h2>
      <form className="w-[1200px] flex flex-col " action="">
        <p className="text-xl font-medium my-3">Name</p>
        <div className="w-[50%]">
          <input
           required
            type="text"
            value = {firstName}
            onChange = {(e) => setFistName(e.target.value)}
            className=" outline-none p-2 mr-16 border-2 rounded"
            placeholder="First Name"
          />
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value = {lastName}
            className="outline-none p-2 border-2 rounded"
            placeholder="Last Name"
          />
        </div>
        <p className="text-xl font-medium my-3">Address</p>
        <input
         required
         onChange={(e) => setAddress(e.target.value)}
          type="text"
          value = {address}
          className="w-[50%] outline-none p-2 border-2 rounded"
          placeholder="Adress"
        />

        <p className="phone__Input text-xl font-medium my-3">Phone number</p>
        <input
         required
          type="text"
          onChange={(e) => setNumber(e.target.value)}
          value = {number}
          className="w-[50%] outline-none p-2 border-2 rounded"
          placeholder="Phone Number"
        />

        <Link to="/pay">
          <button onClick={saveDetails} className="button text-orange-500 font-bold text-xl border-2 px-5 mt-4 hover:bg-orange-500 hover:text-white rounded-md mb-12">
            Pay
          </button>
        </Link>
      </form>
    </div>
  );
};

export default OrderForm;
