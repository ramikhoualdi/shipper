import { Link } from 'react-router-dom'
import './styles.css'

const Footer = () => {
    return (
        <div className="footer" >
            <div className="container" >
                <div className="row" >
                    <div className="col-lg-4 col-md-6" >
                        <div className="widget_text widget footer-widget" >
                            <div className="textwidget custom-html-widget" >
                                <figure className="logo" >
                                    <img 
                                        src="http://qesco.themezinho.net/wp-content/themes/qesco/images/logo.png"
                                        alt=""
                                    />
                                </figure>
                                <p>+1 (850) 344 0 66<br/>
                                <Link to="/">sales@qesco.co.uk</Link></p>
                                <p>2075 Brandon Trail Alpharetta, <br/>
                                London - UK</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" >
                        <div className="widget_text widget footer-widget" >
                            <h6 className="widget-title" >Quick Links</h6>
                            <div className="textwidget custom-html-widget" >
                                <ul className="footer-menu" >
                                    <li>
                                        <Link to="/about" >Air Freight</Link>
                                    </li>
                                    <li>
                                        <Link to="/about" >Sea Freight</Link>
                                    </li>
                                    <li>
                                        <Link to="/about" >Ground Cargo</Link>
                                    </li>
                                    <li>
                                        <Link to="/about" >Packaging Options</Link>
                                    </li>
                                    <li>
                                        <Link to="/about" >Track Your Shipment</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4" >
                        <div className="widget footer-widget" >
                            <h6 className="widget-title" >Subscribe Newsletter</h6>
                            <form>
                                <input type="email" placeholder="enter your email address...." />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>

                    </div>
                    <div className="col-12" >
                        <div className="footer-bottom" >
                            <span>© 2021 Qesco | Shipping Company</span>
                            <span> Site created by <Link to="/">Allied Technologies</Link> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
