import { createContext, useState, useMemo } from "react";

const OrderContext = createContext([]);

export const OrderProvider = (props) => {
  const [order, setOrder] = useState([]);

  const value = useMemo(() => ({
    order,
    setOrder
  }), [order])


  return (
    <OrderContext.Provider value={value}>
      {props.children}
    </OrderContext.Provider>
  )
}

export default OrderContext;