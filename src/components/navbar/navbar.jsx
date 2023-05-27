import React, { useState } from "react";
import classNames from "classnames";

import Logo from "../../assets/images/logo.svg";


function Navbar(props) {
    const data = props.data;
    const [drop, setDrop] = useState(false);

    const links = data.map((val) => 
        <li className="fw-bold ff-open-sans">{val.name}</li>
    );

    const linksmob = data.map((val) => {
        return <li className="ff-open-sans btn btn-dark rounded-0 text-start py-3 px-4">{val.name}</li>
    });

    const dropdown = () => {
        setDrop(!drop);
    }

    return <nav className="h-navbar bg-dark py-4">
        <div className="container-sm px-4 px-sm-0 d-flex justify-content-between align-items-center">
            <header className="d-flex align-items-center mt-2">
                <div className="pb-1">
                    <img
                        src={Logo}
                        alt="logo" 
                        className="img"
                        style={{
                            width: "40px",
                            height: "40px"
                        }} />
                </div>
                <div className="ms-3">
                    <h1 className="h2 ff-pt-sans fw-bold">Goofy's</h1>
                </div>
            </header>
            <div className="hapter-navbar d-none d-sm-block">
                <ul className="d-flex justify-content-between align-items-center">
                    {data == null ? "Undifined Navbar" : links}
                    <li><button className="btn btn-light rounded-pill px-5 py-2 fw-bold">Log In</button></li>
                </ul>
            </div>
            <div className="hapter-burger btn d-block d-sm-none" onClick={dropdown}>
                <div className="hapter-burger-item rounded-pill bg-white"></div>
                <div className="hapter-burger-item rounded-pill my-2 bg-white"></div>
                <div className="hapter-burger-item rounded-pill bg-white"></div>
            </div>
        </div>
        <div className="hapter-navbile d-block d-sm-none">
            <ul className={
                classNames("position-absolute", "z-n1", "overflow-y-hidden", "container-fluid", "p-0", "list-group",
                    {"h-height-0" : !drop},
                    {"h-height-250": drop}
                )}>
                {data == null ? "Undifined Navbar" : linksmob}
                <li className="btn btn-light rounded-0 text-start py-3 px-4">Log In</li>
            </ul>
        </div>
    </nav>
}

export default Navbar;