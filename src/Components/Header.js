import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header">
            <Link to="/" className="title">International Quiz Center</Link>
            <hr className="divider" />

        </div>
    )
}

export default Header