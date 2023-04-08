import Logo from "../../assets/images/logo.svg";


function Navbar(props) {
    const data = props.data;

    const links = data.map((val) => 
        <li className="fw-bold ff-open-sans">{val.name}</li>
    );

    return <nav className="container d-flex justify-content-between align-items-center">
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
        <div className="hapter-navbar">
            <ul className="d-flex justify-content-between align-items-center">
                {data == null ? "Undifined Navbar" : links}
                <li><button className="btn btn-light rounded-pill px-5 py-2 fw-bold">Log In</button></li>
            </ul>
        </div>
    </nav>
}

export default Navbar;