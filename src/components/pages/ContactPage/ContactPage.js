import './styles.css'
import Navbar from '../../sections/Navbar/Navbar'
import Topbar from '../../sections/Topbar/Topbar'
import Footer from '../../sections/Footer/Footer'

const ContactPage = () => {
    return (
        <div className="" >
            <Topbar />
            <Navbar />
            {/* Section 1 */}
            <header 
                className="page-header" 
                style={{ 
                    backgroundImage: `url(${ process.env.PUBLIC_URL + '/images/page-header-bg.jpg'})`, 
                    // backgroundPosition: '0px -33px',
                }}
            >
                <div className="container">
                    <h2>Contact</h2>
                    <p>Take the complexity out of customs Freight Solutions<br/>with customs brokerage services</p>
                </div>
            </header>
            {/* Section 2 */}
            <main>
                <section className="content-section">
                    <div className="container">
                        <div className="vc_row row wpb_row vc_row-fluid">
                            <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                                <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                        <div className="section-title" style={{ color: '#212223', }}>
	 	                                    <figure>
                                                <img 
                                                    src={process.env.PUBLIC_URL + '/images/section-title-shape.png'}
                                                    alt="alt"
                                                />
                                            </figure>
                                    	    <h2>We’d love to hear from you</h2>
                                            <p>Please send your enquiry to <u>sales@qesco.co.uk</u>, or contact your local<br/>
                                            specialists using the contact details below.</p>
                                        </div>
                                        <div className="vc_row row wpb_row vc_inner vc_row-fluid justify-content-center">
                                            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-5 col-md-5">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="contact-box ">
                                                            <h5>Hull Office (Head Office)</h5>
                                                            <address>
                                                                Matthew Good House, Bridgehead<br/>
                                                                Business Park<br/>
                                                                Phone: +44 (0)1482 325781<br/>
                                                                Email: shipping@qesco.co.uk
                                                            </address>
                                                            <a 
                                                                href="https://www.google.com/maps/search/?api=1&amp;query=centurylink+field" 
                                                                data-fancybox="" 
                                                                data-width="640" 
                                                                data-height="360" 
                                                                className="custom-button"
                                                            >
                                                                FIND US ON MAP
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-5 col-md-5">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="contact-box ">
                                                            <h5>Hull Office (Head Office)</h5>
                                                            <address>
                                                                Matthew Good House, Bridgehead<br/>
                                                                Business Park<br/>
                                                                Phone: +44 (0)1482 325781<br/>
                                                                Email: shipping@qesco.co.uk
                                                            </address>
                                                            <a 
                                                                href="https://www.google.com/maps/search/?api=1&amp;query=centurylink+field" 
                                                                data-fancybox="" 
                                                                data-width="640" 
                                                                data-height="360" 
                                                                className="custom-button"
                                                            >
                                                                FIND US ON MAP
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section 
                    className="content-section" 
                    style={{ backgroundColor: '#f9f7ef'}}
                >
                    <div className="container"
                        style={{ height: '100%' }}
                    >
                        <div className="vc_row row wpb_row vc_row-fluid">
                            <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                                <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                        <div className="section-title text-left" style={{ color: '#212223', textAlign: 'left'}} >
                                            <h6> Have Any Question? </h6>
                                            <h2>
                                                If you would like to know more<br/>
                                                about our services, please contact<br/>
                                                us using this form
                                            </h2>
                                        </div>
                                        <div role="form" className="wpcf7" id="wpcf7-f6-p21-o1" lang="en-US" dir="ltr">
                                            <div className="screen-reader-response">
                                                <p role="status" aria-live="polite" aria-atomic="true"></p> 
                                                <ul></ul>
                                            </div>
                                            <form action="/contact/#wpcf7-f6-p21-o1" method="post" className="wpcf7-form init" novalidate="novalidate" data-status="init">
                                                <div style={{ display: 'none' }}>
                                                    <input type="hidden" name="_wpcf7" value="6" />
                                                    <input type="hidden" name="_wpcf7_version" value="5.4.2" />
                                                    <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                                    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f6-p21-o1" />
                                                    <input type="hidden" name="_wpcf7_container_post" value="21" />
                                                    <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                                                </div>
                                                <div className="contact-form">
                                                    <div className="row inner">
                                                        <div className="form-group col-lg-4">
                                                            <input type="text" placeholder="Complate Name" />
                                                        </div>
                                                        <p></p>
                                                        <div className="form-group col-lg-4 col-md-6">
                                                            <input type="text" placeholder="Email Address" />
                                                        </div>
                                                        <p></p>
                                                        <div className="form-group col-lg-4 col-md-6">
                                                            <input type="text" placeholder="Phone No" />
                                                        </div>
                                                        <p></p>
                                                        <div className="form-group col-12">
                                                            <textarea placeholder="Message"></textarea>
                                                        </div>
                                                        <p></p>
                                                        <div className="form-group col-12">
                                                            <input type="submit" value="SEND MESSAGE" />
                                                        </div>
                                                        <p></p>
                                                    </div>
                                                    <p></p>
                                                </div>
                                                <div className="wpcf7-response-output" aria-hidden="true"></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-section no-spacing">
                    <div className="vc_row row wpb_row vc_row-fluid vc_custom_1604136233786">
                        <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                            <div className="vc_column-inner vc_custom_1604136238073">
                                <div className="wpb_wrapper">
                                    <div className="google-maps ">
                                        <iframe 
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.347500897131!2d-0.13080758422975197!3d51.50684040221758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2zTG9uZHJhLCBCaXJsZcWfaWsgS3JhbGzEsWs!5e0!3m2!1str!2str!4v1599044515207!5m2!1str!2str" 
                                            width="100%" 
                                            height="" 
                                            frameborder="0" 
                                            allowfullscreen=""
                                            title="maps"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default ContactPage
