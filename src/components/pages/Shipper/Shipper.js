import Footer from '../../sections/Footer/Footer'
import Navbar from '../../sections/Navbar/Navbar'
import Topbar from '../../sections/Topbar/Topbar'
import './styles.css'

const Shipper = () => {
    return (
        <div className="shipper" >
            <Topbar />
            <Navbar />
            {/* Section 1 */}
            <header className="page-header" data-stellar-background-ratio="0.7" 
                style={{ backgroundImage: 'url(http://qesco.themezinho.net/wp-content/uploads/2020/10/page-header-bg.jpg)', backgroundPosition: '0px -33px' }}
            >
 
                <div className="container">
                <h2>Register</h2>
                <p>As A Shipper</p>
                </div>
            
            </header>
            {/* Section 2 */}
            <div className="main" >
                <div className="container" >
                    <div className="wpb_wrapper" >
                        <div className="track-shipping-form" >
                            <div className="inner" >
                                <form>
                                    <input type="hidden" id="track-shipment-nonce" name="track-shipment-nonce" />
                                    <input type="hidden" name="_wp_http_referer" value="/" />
                                    <h3>Register</h3>
                                    {/* <div className="form-group" >Ex: 12345</div> */}
                                    <div className="form-group" >
                                        <label>Email</label>
                                        <input 
                                            type="text"
                                            name="wpcargo_tracking_number"
                                            placeholder="Email"
                                            required
                                        />
                                        
                                    </div>
                                    <div className="form-group" >
                                        <label>Password</label>
                                        <input     
                                            type="text" 
                                            name="wpcargo_tracking_number"
                                            placeholder="Password"
                                            required
                                        />
                                    </div>
                                    <div className="form-group" >
                                        <button id="submit_wpcargo" name="wpcargo-submit" type="submit" >
                                            Continue
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shipper
