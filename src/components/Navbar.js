import React from "react"
import logo from "../images/Fill 213.png"


export default function Navbar(){
    return(
        <div className="main-container">
            <nav className="navbar">
                <img src={logo} alt="logo" className="nav---logo"/>
                <h2 className="nav---title">My travel Journal</h2>
            </nav>
        </div>
    )
}