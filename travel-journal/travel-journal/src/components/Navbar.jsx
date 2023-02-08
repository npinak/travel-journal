import React from "react"
import earth_icon_2 from "../assets/earth_icon_2.png"

export default function Navbar() {
    return (
        <nav>
            <img src={earth_icon_2} className="earth"/>
            <h2>My Travel Journal</h2>
        </nav>
    )
}