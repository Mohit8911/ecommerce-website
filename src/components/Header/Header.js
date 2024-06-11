import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo3.png';
import useProduct from "../../hooks/useProduct";
import useCart from "../../hooks/useCart";
import './Header.css';
import { useEffect, useState } from 'react';

const Header = ({cartQuantity}) => {

    // const [products] = useProduct();
    // const [cart, setCart] = useState(useCart(products));

    

    return (
      <div className="header">
        <div className="header__logo">
          <img className="logo" src={logo} alt="" />
        </div>
        <nav className="header__menu">
          <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order">Cart{<span style={{"background-color":"yellow", "border-radius":"50px", "padding":"10px", "margin-left":"10px", "color":'black'}}>{cartQuantity}</span> }</NavLink>
        </nav>
      </div>
    );
};

export default Header;