import React from "react";
import {NavLink} from "react-router-dom";

function Navigation(props) {

    return (
        <div>
            <NavLink to="/about">About </NavLink>
            <NavLink to = "/contact">Contact</NavLink>
        </div>
    )
}

export default Navigation;