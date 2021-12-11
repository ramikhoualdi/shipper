import "./styles.css";
import "../../main_styles.css";
import Topbar from "../../sections/Topbar/Topbar";
import Navbar from "../../sections/Navbar/Navbar";
import Footer from "../../sections/Footer/Footer";
import CarouselSection from "../../sections/Carousel/Carousel";
import { Link } from "react-router-dom";
import { 
  VscChevronRight,
} from 'react-icons/vsc';
import { 
  BiCommentDetail,
} from 'react-icons/bi';

const HomePage = () => {
  
  return (
    <div>
      <Topbar />
      <Navbar />
      <CarouselSection />
      {/* Section1 */}
      <section className="content-section section-note">
        <div className="container">
          <div className="vc_row">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="text-box">
                    <h6>
                      Barcodes, Inc. <strong>Logistics Facilities</strong> &amp;
                      Technical Support to Continue Operations as Essential
                      Services
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section2 */}
      <section className="content-section no-spacing">
        <div className="container">
          <div className="vc_row bottom-padding-100 vc_row-flex vc_row-o-equal-height row">
            <div className="vc_column_container col-md-5 col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <figure className="video-thumb">
                    <img
                      src={process.env.PUBLIC_URL + "/images/video-thumb.jpg"}
                      alt="logo"
                    />
                    <Link to="/" data-fancybox>
                      Play Button
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
            <div className="vc_column_container col-md-7 col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="track-shipping-form">
                    <div className="inner">
                      <form>
                        <h3>Track your shipment</h3>
                        <div className="form-group">Ex: 12345</div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="wpcargo_tracking_number"
                            placeholder="Enter Tracking Number"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <button
                            id="submit_wpcargo"
                            name="wpcargo-submit"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <section className="content-section no-spacing" >
        <div className="container" >
          <div className="row vc_row-flex" >
            <div className="vc_column_container col-sm-12 col-md-7" >
              <div className="vc_column_inner" >
                <div className="wpb_wrapper" >
                  <div className="side-content left" >
                    <h2>Worldwide Logistics, Air Freight Forwarding, Road Haulage.</h2>
                    <p>Qesco Logistics is a leading third party contract logistics company based in the Midlands, United Kingdom. We specialise in providing supply-chain warehousing and transport services throughout the UK, Ireland and Continental Europe.</p>
	                  <Link to="/logistics" className="custom-button">Discover All Solutions</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="vc_column_container col-sm-12 col-md-5" >
              <div className="vc_column_inner" >
                <div className="wpb_wrapper" >
                <figure className="side-image"> 
	                <img 
                    src={process.env.PUBLIC_URL + "/images/side-image01.jpg"}
                    alt="alt"
                  />
                </figure>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </section>
      {/* Section 4 */}
      <section className="content-section" >
        <div className="container" >
          <div className="row wpb_row vc_row-fluid justify-content-center">
            <div className="wpb_column vc_column_container col-sm-6 col-md-4">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="icon-box  ">
                    <div className="inner">
                      <figure> 
                        <img 
                          src={process.env.PUBLIC_URL + "/images/icon01.png"}
                          alt="icon01"
                        /> 
                      </figure>
                      <h6>Leadership</h6>
                      <p>Experts who have extensive, hands-on experience in supply chain management</p>
                      <Link to="/services" className="custom-link">Connect with an Expert</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpb_column vc_column_container col-sm-6 col-md-4">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="icon-box  ">
                    <div className="inner">
                      <figure>
                        <img 
                          src={process.env.PUBLIC_URL + "/images/icon02.png"}
                          alt="icon02" 
                        />
                      </figure>
                      <h6>Technology</h6>
                      <p>Innovative and varied use of technology on the road, ocean, railways, in the air.</p>
                      <Link to="/services" className="custom-link">Connect with an Expert</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpb_column vc_column_container col-sm-4 col-md-4">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="icon-box  ">
                    <div className="inner">
                      <figure>
                        <img 
                          src={process.env.PUBLIC_URL + "/images/icon03.png"}
                          alt="icon03"
                        />
                      </figure>
                      <h6>Solution</h6>
                      <p>Global leaders in intermodal, less-than-truckload, supply chain management.</p>
                      <Link to="/services" className="custom-link">Connect with an Expert</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 5 */}
      <section className="content-section" style={{ backgroundColor: 'var(--color-background)'}} >
        <div className="container" >
          <div className="row wpb_row vc_row-fluid">
            <div className="wpb_column vc_column_container col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="row wpb_row vc_inner vc_row-fluid">
                    <div className="wpb_column vc_column_container col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="section-title" style={{color:'#212223'}}>
                            <figure>
                              <img 
                                src={process.env.PUBLIC_URL + "/images/section-title-shape.png"}
                                alt="alt" 
                              />
                            </figure>
                            <h2>Global supply chain solutions</h2>
                            <p>Dedicated specialists taking care of your products</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row wpb_row vc_inner row-fluid">
                    <div className="wpb_column vc_column_container col-sm-12 col-md-3">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="solution-box ">
                            <figure>
                              <img 
                                src={process.env.PUBLIC_URL + "/images/solution-image01.jpg"}
                                alt="Food &amp; Beverage" 
                              />
                              <figcaption>
                                <small>Solutions</small>
                                <h6>Food &amp; Beverage</h6>
                                <Link to="/services" className="custom-link">Discover All</Link>
                              </figcaption>
                            </figure> 
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container col-sm-12 col-md-3">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="solution-box ">
                            <figure>
                              <img 
                                src={process.env.PUBLIC_URL + "/images/solution-image02.jpg"}
                                alt="Global 4PL"
                              />
                              <figcaption>
                                <small>Solutions</small>
                                <h6>Global 4PL</h6>
                                <Link to="/services" className="custom-link">Discover All</Link>
                              </figcaption>
                            </figure> 
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container col-sm-12 col-md-6">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="solution-box ">
                            <figure>
                              <img 
                                src={process.env.PUBLIC_URL + "/images/solution-image03.jpg"}
                                alt="Consumer Packaged Goods" 
                              />
                              <figcaption>
                                <small>Solutions</small>
                                <h6>Consumer Packaged Goods</h6>
                                <Link to="/services" className="custom-link">Discover All</Link>
                              </figcaption>
                            </figure> 
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container col-sm-12 offset-md-2 custom-offset-margin col-md-4">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="solution-box ">
                            <figure>
                              <img 
                                src={process.env.PUBLIC_URL + "/images/solution-image04.jpg"}
                                alt="Transportation" 
                              />
                              <figcaption>
                                <small>Solutions</small>
                                <h6>Transportation</h6>
                                <Link to="/services" className="custom-link">Discover All</Link>
                              </figcaption>
                            </figure> 
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container col-sm-12 col-md-4">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="solution-box ">
                            <figure>
                              <img 
                                src={process.env.PUBLIC_URL + "/images/solution-image05.jpg"}
                                alt="Retails" 
                              />
                              <figcaption>
                                <small>Solutions</small>
                                <h6>Retails</h6>
                                <Link to="/services" className="custom-link">Discover All</Link>
                              </figcaption>
                            </figure> 
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container col-sm-12 col-md-2">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
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
      {/* Section 6 */}
      <section className="content-section no-spacing">
        <div className="container">
          <div className="row wpb_row vc_row-fluid vc_custom_1604231701727 vc_row-o-content-middle vc_row-flex">
            <div className="wpb_column vc_column_container col-sm-12 col-md-6">
              <div className="vc_column-inner vc_custom_1604231712082">
                <div className="wpb_wrapper">
                  <div className="side-services rightleft ">
  	                <h6>Services</h6>
	 	                <h2>Quality delivered as standard</h2>
                    <ul>
                      <li>
                        <Link to="/logistics">Forwarding  
                          <VscChevronRight style={{ color:'var(--color-dark)', fontSize: '14px' }} />
                        </Link>
                      </li>
                      <li>
                        <Link to="/logistics">Supply Chain  
                          <VscChevronRight style={{ color:'var(--color-dark)', fontSize: '14px' }} />
                        </Link>
                      </li>
                      <li>
                        <Link to="/logistics">Outsourcing  
                          <VscChevronRight style={{ color:'var(--color-dark)', fontSize: '14px' }} />
                        </Link>
                      </li>
                      <li>
                        <Link to="/logistics">Technology  
                          <VscChevronRight style={{ color:'var(--color-dark)', fontSize: '14px' }} />
                        </Link>
                      </li>
                    </ul>
	                  <Link to="/services" className="custom-link">See All Services</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpb_column vc_column_container col-sm-12 col-md-6">
              <div className="vc_column-inner vc_custom_1604231717766">
                <div className="wpb_wrapper">
                  <figure className="side-image full-right "> 
                    <div className="info-box">
                      <figure>
                        <img 
                          src={process.env.PUBLIC_URL + "/images/icon-infobox.png"} 
                          alt="alt" 
                        />
                      </figure>
                      <p>Personnel deliver bespoke<br/>
                        solutions that are designed<br/>
                        to increase speed to market, <br/><strong>simplify inventory</strong><br/> management,<br/>
                        streamline product flow and<br/>
                        drive down costs.</p>
                    </div>
                    <img 
                      src={process.env.PUBLIC_URL + "/images/side-image02.jpg"}
                      alt="alt"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 7 */}
      <section className="content-section">
        <div className="container">
          <div className="row wpb_row vc_row-fluid justify-content-center">
            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-3 col-md-3">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="counter-box ">
                    <span className="odometer odometer-auto-theme" data-count="175" data-status="yes">
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">175</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </span>
                    <h6> UK operating centres </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-3 col-md-3">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="counter-box ">
                    <span className="odometer odometer-auto-theme" data-count="120" data-status="yes">
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">120</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </span>
                    <h6> Countries Worldwide </h6>
                  </div>
                  <div className="counter-box ">
                    <span className="odometer odometer-auto-theme" data-count="35" data-status="yes">
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">35</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </span>
                    <span className="symbol">k</span>
                    <h6> Project delivery vehicles </h6>
                  </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-3 col-md-3">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="counter-box ">
                      <span className="odometer odometer-auto-theme" data-count="50" data-status="yes">
                        <div className="odometer-inside">
                          <span className="odometer-digit">
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">50</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </span>
                      <span className="symbol">k</span>
                      <h6> Logistics Professionals </h6>
                    </div>
                    <div className="counter-box ">
                      <span className="odometer odometer-auto-theme" data-count="20" data-status="yes">
                        <div className="odometer-inside">
                          <span className="odometer-digit">
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">20</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </span>
                      <span className="symbol">l</span>
                      <h6> Sq.ft of warehousing </h6>
                    </div>
                  </div>
                </div>
              </div>
            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-3 col-md-3">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="counter-box ">
                    <span className="odometer odometer-auto-theme" data-count="450" data-status="yes">
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">450</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </span>
                    <span className="symbol">k</span>
                    <h6> Containers of freight </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 8 */}
      <section 
        className="content-section bg-image" 
        style={{ background: `url(${process.env.PUBLIC_URL + '/images/section-bg-01.jpg'}) center no-repeat` }}
      >
        <div className="vc_row row wpb_row vc_row-fluid vc_custom_1604247082648">
          <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
            <div className="vc_column-inner vc_custom_1604126379593">
              <div className="wpb_wrapper">
                <div className="cta-box" style={{ color: '#ffffff' }}>
	                <h2>We are now Logistics<br/>Industry Limited</h2>
  	              <p>We’re one of the UK’s leading shipping and logistics providers.</p>
                  <Link to="/contact" className="custom-button">Get a Qoute</Link>
                  <Link to="/contact" className="light-button">Estimate Cost</Link> 	
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 9 */}
      <section 
        // className="content-section bottom-bg-half no-spacing" 
        className="content-section no-spacing" 
        style={{ backgroundColor: '#f9f7ef' }}
      >
        <div className="container">
          <div className="vc_row row wpb_row vc_row-fluid vc_custom_1604399427350">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="vc_row row wpb_row vc_inner vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner vc_custom_1604126352374">
                        <div className="wpb_wrapper">
                          <div className="section-title text-left" style={{ color: '#212223', textAlign: 'left' }} >
                            <h6> TOTAL DELIVERY COST </h6>
                            <h2>Find out the approximate cost of<br/>delivery of your shipments</h2>
            	            </div>
                          <div className="calculator">
                            <div className="row inner">
                              <div className="form-group col-md-6"> <span>From</span>
                                <select id="value4">
                                  <option value="15000">From Your Place</option>
                                  <option value="20000">From Warehouse</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <span>Destination</span>
                                <select id="value5">
                                  <option value="10000">Near Region</option>
                                  <option value="15000">Domestic</option>
                                  <option value="20000">International</option>
                                </select>
                              </div>
                              <div className="form-group col-lg-3 col-md-6">
                                <span>Width</span>
                                <input type="text" id="value1" value="1000" />
                              </div>	  
                              <div className="form-group col-lg-3 col-md-6">
                                <span>Height</span>
                                <input type="text" id="value2" value="1500" />
                              </div>  	  
                              <div className="form-group col-lg-3 col-md-6">
                                <span>Weight</span>
                                <input type="text" id="value3" value="2000" />
                              </div>	  
                              <div className="form-group col-lg-3 col-md-6">
                                <span>Fragile</span>
                                <div className="yes-no" id="yes-no">
                                  <input type="radio" name="rdo" id="yes" value="15000" checked="" />
                                  <input type="radio" name="rdo" id="no" value="0" />
                                  <div className="switch">
                                    <label for="yes">Yes</label>
                                    <label for="no">No</label>
                                    <span></span> 
                                  </div>
                                </div>
                              </div>
                              <div className="form-group col-12">
                                <label>
                                  <input type="checkbox" id="checkbox4" value="2500" checked="checked" />
                                  Express Delivery
                                </label>
                                <label>
                                  <input type="checkbox" id="checkbox5" value="3500" />
                                  Insurance</label>
                                <label>
                                  <input type="checkbox" id="checkbox6" value="4500" />
                                  Packaging
                                </label>
                              </div>
                              <div className="form-group col-12">
                                <div className="estimated-price">
                                  <b>Estimated Price :</b><strong>$</strong><strong id="result">47000</strong>
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
            </div>
          </div>
        </div>
      </section>
      <div className="bg-section9" >
      </div>
      {/* Section 10 */}
      <section className="content-section bg-half">
        <div className="container">
          <div className="vc_row row wpb_row vc_row-fluid">
            <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12 vc_col-md-5 col-md-5">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="testimonials-slider swiper-container-horizontal">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide swiper-slide-active" style={{ width: '495px' }} >
                        <div className="testimonial">
                          <p>As a first time importer from the Far  East, the process can be quite daunting.  John Good has provided exceptional  service and support right through exceptional  the process.</p>
                          <h6>Steve Macholnad</h6>
                          <small>Manager Smart Move LTD</small> 
                        </div>
                      </div>
                      <div className="swiper-slide swiper-slide-next" style={{ width: '495px' }} >
                        <div className="testimonial">
                          <p>Far  East, the process can be quite daunting.  John Good has provided exceptional  service and support right through  the process As a first time importer from the.</p>
                          <h6>Alex Olevnik</h6>
                          <small>Sales Team Acrostishe</small> 
                        </div>
                      </div>
                      <div className="swiper-slide" style={{ width: '495px' }} >
                        <div className="testimonial">
                          <p>John Good has provided exceptional  service and support right through  the process As a first time importer from the. Far  East, the process can be quite daunting.          </p>
                          <h6>Jack Abraham</h6>
                          <small>Director of Envato LLC</small> 
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                      <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                      <span className="swiper-pagination-bullet"></span>
                      <span className="swiper-pagination-bullet"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12 vc_col-md-offset-1 offset-md-1 vc_col-md-6 col-md-6 zindex-974">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="section-title" style={{ color: '#212223' }} >
                    <h2>Trusted By Some The World's Companies for over 180 years</h2>
                  </div>
                  <div className="vc_row row wpb_row vc_inner vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-xs-6 col-xs-6">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <figure className="logo-item ">
                            <img 
                              src={process.env.PUBLIC_URL + '/images/logo01.jpg'}
                              alt="alt"
                            />
                          </figure>
                      </div>
                    </div>
                  </div>
                  <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-xs-6 col-xs-6">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <figure className="logo-item">
                          <img 
                            src={process.env.PUBLIC_URL + '/images/logo02.jpg'}
                            alt="alt"
                          />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-xs-6 col-xs-6">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <figure className="logo-item">
                            <img 
                              src={process.env.PUBLIC_URL + '/images/logo03.jpg'}
                              alt="alt"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-xs-6 col-xs-6">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <figure className="logo-item">
                            <img 
                              src={process.env.PUBLIC_URL + '/images/logo04.jpg'} 
                              alt="alt"
                            />
                          </figure>
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
      {/* Section 11 */}
      <section className="content-section">
        <div className="container">
          <div className="vc_row row wpb_row vc_row-fluid">
            <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="section-title" style={{ color: '#212223' }} >
                    <figure>
                      <img 
                        src={process.env.PUBLIC_URL + '/images/section-title-shape.png'}
                        alt="alt"
                      />
                    </figure>
                    <h2>Industry insight opinion</h2>
                    <p>Advice and best practice from our own team</p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">     
                      <div className="recent-news">
                        <figure>
                          <img 
                            style={{ width: '570px',height: '380px', }}
                            src={process.env.PUBLIC_URL + '/images/news04.jpg'}
                            className="attachment-full size-full wp-post-image" 
                            alt="alt" 
                            loading="lazy" 
                          />
                          <Link to="/blog/expression-alteration-entreaties-mrs-can-terminated-estimating">
                            <VscChevronRight style={{ color:'var(--color-dark)', fontSize: '18px' }} />
                          </Link> 
                        </figure>
                        <div className="content">
                          <h3>
                            <Link to="/blog/expression-alteration-entreaties-mrs-can-terminated-estimating">
                              Expression alteration entreaties mrs can terminated estimating.
                            </Link>
                          </h3>
                          <small> 31st October, 2021</small>
                          <p>Design is our playground. While we create an awesome experience, we like having fun. No an</p>
                          <span>
                            <BiCommentDetail style={{ color:'var(--color-dark)', fontSize: '18px', marginRight: '5px' }} />
                            11 Comments
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="recent-news ">
                        <figure>
                          <img 
                            style={{ width: '570px',height: '380px', }}
                            src={process.env.PUBLIC_URL + '/images/news03.jpg'}
                            className="attachment-full size-full wp-post-image" 
                            alt="alt" 
                            loading="lazy" 
                          />
                          <Link to="/blog/subject-but-why-ten-earnest-husband-imagine-sixteen-brandon">
                            <VscChevronRight style={{ color:'var(--color-dark)', fontSize: '18px' }} />
                          </Link> 
                        </figure>
                        <div className="content">
                          <h3>
                            <Link to="/blog/subject-but-why-ten-earnest-husband-imagine-sixteen-brandon">
                              Subject but why ten earnest husband imagine sixteen brandon.
                            </Link>
                          </h3>
                          <small> 31st October, 2021</small>
                          <p>Design is our playground. While we create an awesome experience, we like having fun. No an</p>
                          <span>
                            <BiCommentDetail style={{ color:'var(--color-dark)', fontSize: '18px', marginRight: '5px' }} />
                            6 Comments
                          </span>
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
      <Footer />
    </div>
  );
};

export default HomePage;
