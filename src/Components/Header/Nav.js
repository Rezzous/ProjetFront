import React, { useState} from "react";
import { Link } from "react-router-dom";

import logo from '../../assets/logo/logo.jpg';

import "./Nav.Module.css";


export default function Nav(props) {
    const [toggle, setToggle] = useState(false)

    const toggleNavbar = () => {
		setToggle(!toggle);
	};
    
    return(
    
        <nav className={`navbar ${toggle ? "navOpen" : "navClose"}`}>
         <img src={logo} alt="logo"/>
            <ul className="navbarList">
                <li className="navbarLink">
                    <Link onClick={toggleNavbar} to={"/"}>Accueil</Link>
                </li>
                <li className="navbarLink">
                    <Link onClick={toggleNavbar} to={"/coaching"}>Coaching</Link>
                </li>
                <li className="navbarLink">
                    <Link onClick={toggleNavbar} to={"/testimony"}>Témoignages</Link>
                </li>
                <li className="navbarLink">
                    <Link onClick={toggleNavbar} to={"/software"}>Logiciels</Link>
                </li>
                <li className="navbarLink">
                    <Link onClick={toggleNavbar} to={"/prevention"}>Risques</Link>
                </li>
                
                {props.isLogged ? 
                    <>
                        <Link onClick={toggleNavbar} to={"/logout"}>Se deconnecter</Link>
                    </>
                    :
                    <Link onClick={toggleNavbar} to={"/login"}>Se connecter</Link>
				}
            </ul>
            <button className="navbarBurger" onClick={toggleNavbar}>
                <span className="burgerBar"></span>
            </button>
       
       </nav>
       
    );

}