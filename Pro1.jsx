import React from 'react'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CartAmountToggle from './CartAmountToggle';


const Pro1 = () => {
    const [product, setProduct] = useState([]);
const dispatch = useDispatch();

const addProduct = (product) => {
  dispatch(addCart(product))
}

const [amount, setAmount] = useState(1);

const setDecrease = () =>{
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
}

const setIncrease = () =>{
    amount < 9 ? setAmount(amount + 1) : setAmount(9);
}

  return (
    <>
        <Navbar />
        <div style={{marginTop : "100px"}}>
            <div style={{display : "flex"}}>
                <div>
                    <img style={{width : "300px"}} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="pro1" />
                </div>
                <div  style={{color : "black"}}>
                <div style={{paddingLeft : "40px"}}>
                    <h2>Fjallraven - Foldsack No.1 Backpack, Fits 15 Laptops</h2>
                    <p style={{fontSize : "small", color : "grey"}}>Your perfect pack for everyday use and walks in the forest. <p>
                        Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p></p>
                   <div style={{color : "blue"}}> <p>Rating</p>
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon />(120) </div>
                    <br />
                    <br />
                    <p><h5> $109.95 </h5>
                    <p><h7 style={{fontSize : "small", color : "grey"}}> Suggesting payment within 6 months special financing </h7></p></p>
                    <br />
                    <br />
                    <div style={{display : "flex"}}>
                    <CartAmountToggle 
                        amount={amount}
                        setDecrease={setDecrease}
                        setIncrease={setIncrease}
                    />
                    <div style={{fontSize : "20px", paddingLeft : "100px"}}>
                    <p>Only <h7 style={{color : "#ff3d00"}}>9 items </h7> are left
                    <br /> Don't Miss </p>
                    </div></div>
                    <Link to="/payment" className="btn btn-dark m-1">Buy Now</Link>
                    <button className="btn btn-dark m-1" onClick={() =>  addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
                </div>
            </div>
            </div>
        <Footer /> 
    </>
  )
}

export default Pro1
