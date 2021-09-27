import Footer from '../../sections/Footer/Footer'
import Navbar from '../../sections/Navbar/Navbar'
import Topbar from '../../sections/Topbar/Topbar'
import './styles.css'

const Shipper = () => {
    return (
        <div className="shipper" >
            <Topbar />
            <Navbar />
            <div className="main" >
                <div className="container" >
                    <div className="wpb_wrapper" >
                        <div className="track-shipping-form" >
                            <div className="inner" >
                                <form>
                                    <input type="hidden" id="track-shipment-nonce" name="track-shipment-nonce" />
                                    <input type="hidden" name="_wp_http_referer" value="/" />
                                    <h3>Track your shipment</h3>
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
                                            Submit
                                        </button>
                                        <button id="submit_wpcargo" name="wpcargo-submit" type="submit" >
                                            Submit
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
