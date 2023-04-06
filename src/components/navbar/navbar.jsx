import Logo from "../../assets/images/logo.svg";


function Navbar(props) {
    const data = props.data;

    const links = data.map((val) => 
        <li className="fw-bold">{val.name}</li>
    );

    return <nav className="container py-3 d-flex justify-content-between align-items-center">
        <header className="d-flex pt-1">
            <div><img src={Logo} alt="logo" className="img-fluid" /></div>
            <div className="ms-2"><h1 className="h3 fw-bold">Goofy's</h1></div>
        </header>
        <div className="hapter-navbar">
            <ul className="d-flex justify-content-between align-items-center">
                {links}
                <li><button className="btn btn-light rounded-pill px-5 py-2 fw-bold">Log In</button></li>
            </ul>
        </div>
    </nav>
}

export default Navbar;