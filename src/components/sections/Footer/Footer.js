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
                                    />
                                </figure>
                                <p>+1 (850) 344 0 66<br/>
                                <a href="#">sales@qesco.co.uk</a></p>
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
                                        <a href="" >Air Freight</a>
                                    </li>
                                    <li>
                                        <a href="" >Sea Freight</a>
                                    </li>
                                    <li>
                                        <a href="" >Ground Cargo</a>
                                    </li>
                                    <li>
                                        <a href="" >Packaging Options</a>
                                    </li>
                                    <li>
                                        <a href="" >Track Your Shipment</a>
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
                            <span> Site created by <a href="#">Allied Technologies</a> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
