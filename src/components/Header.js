import React from "react";
import { Link } from "react-router-dom";
import "../components/Header.css";
import livingRoomImg from "../images/living-room.png";

export default function Header() {
    return (
        <header className="header">
            <img src={livingRoomImg} alt="Principal Banner" className="bg-image" />
            <div className="inner-content-header">
                <div className="left-side">
                    <span>NEW COLLECTION</span>
                    <h2>Embrace Quiet Living.</h2>
                    <p>
                        Discover our new line of sustainably sourced, mindfully crafted
                        essentials designed to bring tranquility to your space.
                    </p>
                    <button className="shop-now-button">
                        <Link to="/products">Shop Now!</Link>
                    </button>
                </div>
            </div>
        </header>
    );
}
