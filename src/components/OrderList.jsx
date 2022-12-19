import React from 'react'
import { getInfoOrder } from '../untils/firebaseFunctions';

const OrderList = () => {
    
  return (
    <div>

        {
              getInfoOrder().then(data => data)
              .then(item => {
                  item.map((i, index) => {
                      return (
                        <div key = {index}>
                        {console.log(i.id)}
                        <li>id: {i.id}</li>
                  </div>
                      )
                  })
              })
              
        }
    </div>
  )
}

export default OrderList;
