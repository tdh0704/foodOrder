import React, { useEffect } from "react";
import { Header, MainContainer, CreateContainer, MenuContainer } from "./components";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./untils/firebaseFunctions";
import { actionType } from "./context/reducer";
import OrderForm from "./components/OrderForm";
import Pay from "./components/Pay";
import OrderList from "./components/OrderList";

const App = () => {
  const [, dispatch] = useStateValue();


  useEffect(() => {
     getAllFoodItems().then((data)=> {
     
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems : data
      });
    });
  },[dispatch]);
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
       
        <Header />
        
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/menu" element = {<MenuContainer/>}/>
            <Route path="/order" element = {<OrderForm/>}/>
            <Route path="/pay" element = {<Pay/>}/>
            <Route path="/quanlydonhang" element = {<OrderList/>}/>
            </Routes>
        </main>
       
       
      
      </div>
    </AnimatePresence>
  );
};

export default App;
