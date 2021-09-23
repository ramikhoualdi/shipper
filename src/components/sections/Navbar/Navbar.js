import './styles.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container" >
                <div className="inner" >
                    <div className="logo" >
                        <img src="http://qesco.themezinho.net/wp-content/uploads/2020/10/logo.png" alt="logo" />
                    </div>
                    <div className="custom-menu" >
                        <ul>
                            <li>
                                <a href="#" >En</a>
                            </li>
                            <li>
                                <a href="#" >Fr</a>
                            </li>
                        </ul>
                    </div>
                    <div className="site-menu" >
                        <div>
                            <ul>
                                <li>
                                    <a href="#" >Logistics</a>
                                </li>
                                <li>
                                    <a href="#" >Services</a>
                                </li>
                                <li>
                                    <a href="#" >News</a>
                                </li>
                                <li>
                                    <a href="#" >About</a>
                                </li>
                                <li>
                                    <a href="#" >Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hamburger-menu" >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="navbar-button" >
                        <a href="#" >GET A QUOTE</a>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Navbar
