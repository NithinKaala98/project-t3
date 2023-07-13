import React from 'react';
import { FaMinus, FaPlus} from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease}) => {
  return (
    <div className='cart-button'>
        <div className='amount-toggle' style={{display : "flex"}}>
            <button onClick={() => setDecrease()} style={{borderRadius: ".7rem", border: "transparent", backgroundColor: "grey" }}>
                <FaMinus />
            </button>
            <div className='amount-style' style={{padding : "10px"}}>{amount}</div>
            <button onClick={() => setIncrease()} style={{borderRadius: ".7rem", border: "transparent", backgroundColor: "grey" }}>
                <FaPlus />
            </button>
        </div>
    </div>
  )
}

export default CartAmountToggle