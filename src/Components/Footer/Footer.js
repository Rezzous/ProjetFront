import React from 'react';
import { Link } from "react-router-dom";

import "./Footer.Module.css";


export default function Footer (props) {
    return (
        <div id="footerDiv">
        <footer>
            <div id="navigation">
                    <h2>Navigation</h2>
                        <ul className="navbarList">
                            <li className="navbarLink">
                                <Link to={"/"}>Page d'acceuil</Link>
                            </li>
                            <li className="navbarLink">
                                <Link to={"/coaching"}>Coaching</Link>
                            </li>
                            <li className="navbarLink">
                                <Link to={"/testimony"}>Témoignages</Link>
                            </li>
                            <li className="navbarLink">
                                <Link to={"/software"}>Logiciels de poker</Link>
                            </li>
                            <li className="navbarLink">
                                <Link to={"/login"}>Se connecter</Link>
                            </li>
                            <li className="navbarLink">
                                <Link to={"/register"}>S'inscrire</Link>
                            </li>
                            <li>
                                <Link to={"/dashboard"}>Admin</Link>
                            </li>
                        </ul>
                </div>
                <div id="about">
                    <h2>About</h2>
                        <ul className="navbarList">
                            <li className="navbarLink">
                                <a href="#">Company</a>
                            </li>
                            <li className="navbarLink">
                                <a href="#">Team</a>
                            </li>
                            <li className="navbarLink">
                                <a href="#">About us</a>
                            </li>
                        </ul>
                </div>
                <div id="socialMedias">
                    <h2>Social Medias</h2>
                        <ul className="navbarList">
                            <li className="navbarLink">
                            <img src="https://img.icons8.com/ios/50/000000/facebook--v1.png" alt="logoFacebook"/>
                            </li>
                            <li className="navbarLink">
                            <img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" alt="logoInstagram"/>
                            </li>
                            <li className="navbarLink">
                            <img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" alt="logoTwitter"/>
                            </li>
                        </ul>
                </div>
        </footer>
        </div>
    )
}
