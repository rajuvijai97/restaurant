import React from 'react'
import { Link } from 'react-router-dom'
import headerlogo from "../images/restaurant-logo.png"

export default function Header() {
    return(
        <div className="restaurant-logo container">
            <Link to="/home"><img src={headerlogo} alt="logo" /></Link>
        </div>
    )
}