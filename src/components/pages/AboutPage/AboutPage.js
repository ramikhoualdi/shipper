import Footer from '../../sections/Footer/Footer'
import Navbar from '../../sections/Navbar/Navbar'
import Topbar from '../../sections/Topbar/Topbar'
import './styles.css'

const AboutPage = () => {
    return (
        <div>
            <Topbar />
            <Navbar />
            {/* Section 1 */}
            <header 
                className="page-header" 
                data-stellar-background-ratio="0.7" 
                style={{ 
                    backgroundImage: 'url(http://qesco.themezinho.net/wp-content/uploads/2020/10/page-header-bg.jpg)',
                    backgroundPosition: '0px -33px'
                }}
            >
                <div className="container">
                    <h2>About</h2>
                    <p>Take the complexity out of customs Freight Solutions<br/>
                    with customs brokerage services
                    </p>
                </div>    
            </header>
            {/* Section 2 */}
            <main>
                {/* Section 3 */}
                <section className="content-section">
                    <div className="vc_row row wpb_row vc_row-fluid vc_custom_1604136462742">
                        <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                            <div className="vc_column-inner vc_custom_1604136467430">
                                <div className="wpb_wrapper">
                                    <div className="container">
                                        <div className="vc_row row wpb_row vc_inner vc_row-fluid">
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
                                                            <h2>Everyone within our business<br/>understands our mission</h2>
                                                            <p>It means we don’t just come to work to do a job, we come to work to make a difference.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vc_row row wpb_row vc_inner vc_row-fluid vc_custom_1604145652773">
                                        <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                                            <div className="vc_column-inner vc_custom_1604145657504">
                                                <div className="wpb_wrapper">
                                                    <div 
                                                        data-background={process.env.PUBLIC_URL + '/images/section-bg-02.jpg'} 
                                                        className="image-quote"
                                                        style={{ 
                                                            background: `url(${process.env.PUBLIC_URL + '/images/section-bg-02.jpg'})`
                                                         }} 
                                                    >
                                                    <div className="quote-box">
                                                        <blockquote>
                                                            “ To make the process of buying and managing shipping and logistics services simple, efficient, stress free and cost effective.”
                                                        </blockquote>
                                                        <p>We do this by providing a friendly, efficient and personalised service combined with innovative IT solutions that enable our customers to always be in control of their supply chains.</p>
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
                {/* Section 4 */}
                <section className="content-section no-spacing">
                    <div className="container">
                        <div className="vc_row row wpb_row vc_row-fluid">
                            <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12 vc_col-md-6 col-md-6">
                                <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                        <div className="section-title text-left" style={{ color: '#212223' }} >
                                            <h6> Our Values </h6>
                                            <h2>Giving customers a unique experience of partnership.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12 vc_col-md-offset-1 offset-md-1 vc_col-md-5 col-md-5">
                                <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                        <div className="accordion-box ">
                                            <h6> </h6>
                                            <div className="accordion" id="accordion" role="tablist">
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="Provide a service we are proud of">
                                                        <a data-toggle="collapse" href="#collapse1" aria-expanded="true">Provide a service we are proud of </a>
                                                    </div>
                                                    <div id="collapse1" className="collapse show" data-parent="#accordion">
                                                        <div className="card-body">
                                                            We are committed to the long-term, profitable  future of our business and aim to achieve sustained growth that provides enhanced value to customers  and industry partners and opportunities
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id=" Support each other and work together">
                                                        <a data-toggle="collapse" href="#collapse2" aria-expanded="false"> Support each other and work together </a>
                                                    </div>
                                                    <div id="collapse2" className="collapse" data-parent="#accordion">
                                                        <div className="card-body">
                                                            We are committed to the long-term, profitable  future of our business and aim to achieve sustained growth that provides enhanced value to customers  and industry partners and opportunities
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id=" Make long-term business decisions">
                                                        <a data-toggle="collapse" href="#collapse3" aria-expanded="false"> Make long-term business decisions </a>
                                                    </div>
                                                    <div id="collapse3" className="collapse" data-parent="#accordion">
                                                        <div className="card-body">
                                                            We are committed to the long-term, profitable  future of our business and aim to achieve sustained growth that provides enhanced value to customers  and industry partners and opportunities
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id=" Always seek to improve">
                                                        <a data-toggle="collapse" href="#collapse4" aria-expanded="false"> Always seek to improve </a>
                                                    </div>
                                                    <div id="collapse4" className="collapse" data-parent="#accordion">
                                                        <div className="card-body">
                                                            We are committed to the long-term, profitable  future of our business and aim to achieve sustained growth that provides enhanced value to customers  and industry partners and opportunities
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id=" Member of the community">
                                                        <a data-toggle="collapse" href="#collapse5" aria-expanded="false"> Member of the community </a>
                                                    </div>
                                                    <div id="collapse5" className="collapse" data-parent="#accordion">
                                                        <div className="card-body">
                                                            We are committed to the long-term, profitable  future of our business and aim to achieve sustained growth that provides enhanced value to customers  and industry partners and opportunities
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
                {/* Section 5 */}
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
                {/* Section 6 */}
                <section className="content-section" style={{ backgroundColor: '#f9f7ef' }} >
                    <div className="container">
                        <div className="vc_row row wpb_row vc_row-fluid">
                            <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                                <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                        <div className="section-title" style={{ color: '#212223' }}>
                                            <figure>
                                                <img 
                                                    src={process.env.PUBLIC_URL + '/images/section-title-shape.png'}
                                                    alt="alt" 
                                                />
                                            </figure>
                                            <h2>Qesco UK LLC has grown from<br/>strength to strength</h2>
                                            <p>It means we don’t just come to work to do a job, we come to work to make a difference.</p>
                                        </div>
                                        <ul className="history-box-list masonry" style={{ position: 'relative', height: '943px' }} >
                                            <li style={{ position: 'absolute', left: '0px', top: '0px' }} >
                                                <div className="history-box">
                                                    <div className="description">
                                                        <h6>ISO ACCREDITATION</h6>
                                                        <p>In November 2016 after a lot of work Atlas Logistics UK Ltd became ISO 9001 and ISO 27001 accredited, complying with The Provision of Import and Export Solutions and Associated Services.</p>
                                                    </div>
                                                    <small className="date">11-23-2016</small>
                                                </div>
                                            </li>
                                            <li style={{ position: 'absolute', left: '615px', top: '0px' }} >
                                                <div className="history-box">
                                                    <div className="description">
                                                        <h6>2016 RE BRAND</h6>
                                                        <p>New logo, new website, fresh new brand but still the same reliable team. Follow our blog article for more information.</p>
                                                    </div>
                                                    <small className="date">11-23-2017</small>
                                                </div>
                                            </li>	
                                            <li style={{ position: 'absolute', left: '615px', top: '256px' }} >
                                                <div className="history-box">
                                                    <div className="description">
                                                        <h6>LOGISTICS PVT WERE</h6>
                                                        <p>In September 2015 the shares of Logistics PVT were acquired by the UK Company, meaning Atlas Logistics</p>
                                                    </div>
                                                    <small className="date">11-23-2017</small>
                                                </div>
                                            </li>
                                            <li style={{ position: 'absolute', left: '0px', top: '306px' }} >
                                                <div className="history-box">
                                                    <div className="description">
                                                        <h6>2013 BOTH OFFICES</h6>
                                                        <p>In March 2013 both offices moved to larger premises, London being strategically placed close to Heathrow Airport, and Birmingham moving to a facility giving the Company access to 30,000 square feet of Logistics warehousing.</p>
                                                    </div>
                                                    <small className="date">11-23-2017</small>
                                                </div>
                                            </li>	
                                            <li style={{ position: 'absolute', left: '615px', top: '512px' }} >
                                                <div className="history-box">
                                                    <div className="description">
                                                        <h6>2012 QESCO UK LTD</h6>
                                                        <p>In June 2012 Qesco UK Ltd became members of the WCA, the world’s largest and most powerful network of independent freight forwarders,</p>
                                                    </div>
                                                    <small className="date">11-23-2012</small>
                                                </div>
                                            </li>
                                            <li style={{ position: 'absolute', left: '0px', top: '637px' }} >
                                                <div className="history-box">
                                                    <div className="description">
                                                        <h6>COMPANY ACCREDITATION</h6>
                                                        <p>In November 2011 after a lot of work Qesco Logistics UK Ltd became ISO 9001 and ISO 27001 accredited, complying with The Provision of Import and Export Solutions and Associated Services.</p>
                                                    </div>
                                                    <small className="date">11-23-2012</small>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section 7 */}
                <section className="content-section no-spacing">
                    <div className="vc_row row wpb_row vc_row-fluid vc_custom_1604157258669">
                        <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                            <div className="vc_column-inner vc_custom_1604157264263">
                                <div className="wpb_wrapper">
                                    <div className="tab-content">
                                        <ul className="tab-nav">
                                            <li className="active">
                                                <a href="#tab1">
                                                    Postal
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#tab2">
                                                    Retail
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#tab3">
                                                    Logistics
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#tab4">
                                                    Ticketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#tab5">
                                                    Industrial
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#tab6">
                                                    Other
                                                </a>
                                            </li>
                                        </ul>
                                        <div id="tab1" className="tab-item" style={{ display: 'block' }} >
                                            <div className="tab-inner">
                                                <figure>
                                                    <img 
                                                        src={process.env.PUBLIC_URL + '/images/tab-image01.jpg'}
                                                        alt="Postal"
                                                    />    
                                                </figure>
                                                <div className="content">
                                                    <h3>Postal</h3>
                                                    <p>The retail industry is not only shaped by the quality 
                                                    of services and goods, but also by economic trends 
                                                    that are beyond an organization's control. In order to 
                                                    maximize shareholder value, retailers constantly 
                                                    endeavor to optimize their service and the flow of 
                                                    goods from the supply chain to the store. </p><p> Such dynamic optimization cannot be realized 
                                                    without proactive handling of accurate data.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tab2" className="tab-item">
                                            <div className="tab-inner">
                                                <figure>
                                                    <img 
                                                        src={process.env.PUBLIC_URL + '/images/tab-image02.jpg'}
                                                        alt="Retail" 
                                                    />
                                                </figure>
                                                <div className="content">
                                                    <h3>Retail</h3>
                                                    <p>The retail industry is not only shaped by the quality 
                                                    of services and goods, but also by economic trends 
                                                    that are beyond an organization's control. In order to 
                                                    maximize shareholder value, retailers constantly 
                                                    endeavor to optimize their service and the flow of 
                                                    goods from the supply chain to the store. </p><p> Such dynamic optimization cannot be realized 
                                                    without proactive handling of accurate data.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tab3" className="tab-item">
                                            <div className="tab-inner">
                                                <figure>
                                                    <img 
                                                        src={process.env.PUBLIC_URL + '/images/tab-image03.jpg'} 
                                                        alt="Logistics"
                                                    />
                                                </figure>
                                                <div className="content">
                                                    <h3>Logistics</h3>
                                                    <p>The retail industry is not only shaped by the quality 
                                                    of services and goods, but also by economic trends 
                                                    that are beyond an organization's control. In order to 
                                                    maximize shareholder value, retailers constantly 
                                                    endeavor to optimize their service and the flow of 
                                                    goods from the supply chain to the store. </p><p> Such dynamic optimization cannot be realized 
                                                    without proactive handling of accurate data.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tab4" className="tab-item">
                                            <div className="tab-inner">
                                                <figure>
                                                    <img 
                                                        src={process.env.PUBLIC_URL + '/images/tab-image04.jpg'} 
                                                        alt="Ticketing" 
                                                    />
                                                </figure>
                                                <div className="content">
                                                    <h3>Ticketing</h3>
                                                    <p>The retail industry is not only shaped by the quality 
                                                    of services and goods, but also by economic trends 
                                                    that are beyond an organization's control. In order to 
                                                    maximize shareholder value, retailers constantly 
                                                    endeavor to optimize their service and the flow of 
                                                    goods from the supply chain to the store. </p><p> Such dynamic optimization cannot be realized 
                                                    without proactive handling of accurate data.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tab5" className="tab-item">
                                            <div className="tab-inner">
                                                <figure>
                                                    <img 
                                                        src={process.env.PUBLIC_URL + '/images/tab-image05.jpg'} 
                                                        alt="Industrial"
                                                    />
                                                </figure>
                                                <div className="content">
                                                    <h3>Industrial</h3>
                                                    <p>The retail industry is not only shaped by the quality 
                                                    of services and goods, but also by economic trends 
                                                    that are beyond an organization's control. In order to 
                                                    maximize shareholder value, retailers constantly 
                                                    endeavor to optimize their service and the flow of 
                                                    goods from the supply chain to the store. </p><p> Such dynamic optimization cannot be realized 
                                                    without proactive handling of accurate data.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tab6" className="tab-item">
                                            <div className="tab-inner">
                                                <figure>
                                                    <img 
                                                        src={process.env.PUBLIC_URL + '/images/tab-image06.jpg'} 
                                                        alt="Other"
                                                    />
                                                </figure>
                                                <div className="content">
                                                    <h3>Other</h3>
                                                    <p>The retail industry is not only shaped by the quality 
                                                    of services and goods, but also by economic trends 
                                                    that are beyond an organization's control. In order to 
                                                    maximize shareholder value, retailers constantly 
                                                    endeavor to optimize their service and the flow of 
                                                    goods from the supply chain to the store. </p><p> Such dynamic optimization cannot be realized 
                                                    without proactive handling of accurate data.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section 8 */}
                <section className="content-section">
                    <div className="container">
                        <div className="vc_row row wpb_row vc_row-fluid">
                            <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                                <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                        <div className="vc_row row wpb_row vc_inner vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="section-title" style={{ color: '#212223' }}>
                                                            <figure>
                                                                <img 
                                                                    src={process.env.PUBLIC_URL + '/images/section-title-shape.png'} 
                                                                    alt="alt"
                                                                />
                                                            </figure>
                                                            <h2>Meet our team of experts</h2>
                                                            <p>Advice and best practice from our own team</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row row wpb_row vc_inner vc_row-fluid justify-content-center">
                                            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-4 col-md-4">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="team-member ">
                                                            <div className="inner">
                                                                <figure>
                                                                    <img 
                                                                        src={process.env.PUBLIC_URL + '/images/team-member01.jpg'} 
                                                                        alt="ALEXANDER RICHIEZ"
                                                                    />
                                                                </figure>
                                                                <h6>ALEXANDER RICHIEZ</h6>
                                                                <small>Chief Operations Officer</small>
                                                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-4 col-md-4">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="team-member ">
                                                            <div className="inner">
                                                                <figure>
                                                                    <img 
                                                                        src={process.env.PUBLIC_URL + '/images/team-member02.jpg'}  
                                                                        alt="RICHARD HILL" 
                                                                    />
                                                                </figure>
                                                                <h6>RICHARD HILL</h6>
                                                                <small>Head of Administration</small>
                                                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-4 col-md-4">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <div className="team-member ">
                                                            <div className="inner">
                                                                <figure>
                                                                    <img 
                                                                        src={process.env.PUBLIC_URL + '/images/team-member03.jpg'} 
                                                                        alt="DYLAN TAYLOR" 
                                                                    />
                                                                </figure>
                                                                <h6>DYLAN TAYLOR</h6>
                                                                <small>Financial Manager</small>
                                                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
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
                {/* Section 9 */}
                <section className="content-section bg-image" style={{ background: `url(${process.env.PUBLIC_URL + '/images/section-bg-02.jpg'}) center no-repeat` }} >
                    <div className="vc_row row wpb_row vc_row-fluid vc_custom_1604247320751">
                        <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                            <div className="vc_column-inner vc_custom_1604159363199">
                                <div className="wpb_wrapper">
                                    <div className="vc_empty_space" style={{ height: '60vh' }}>
                                        <span className="vc_empty_space_inner"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section 10 */}
                <section className="content-section no-spacing">
                    <div className="container">
                        <div className="vc_row row wpb_row vc_row-fluid">
                            <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                                <div className="vc_column-inner vc_custom_1604162243608">
                                    <div className="wpb_wrapper">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="testimonial">
                                                    <p>As a first time importer from the Far  East, the process can be quite daunting.  John Good has provided exceptional  service and support right through exceptional  the process.</p>
                                                    <h6>Steve Macholnad</h6>
                                                    <small>Manager Smart Move LTD</small>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="testimonial">
                                                    <p>Far  East, the process can be quite daunting.  John Good has provided exceptional  service and support right through  the process As a first time importer from the.</p>
                                                    <h6>Alex Olevnik</h6>
                                                    <small>Sales Team Acrostishe</small>
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
                                        <div className="vc_row row wpb_row vc_inner vc_row-fluid">
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
                                                            <h2>Our Accreditations</h2>
                                                            <p>We are committed to delivering professional services of the highest standard</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_row row wpb_row vc_inner vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-3 col-md-3 vc_col-xs-6 col-xs-6">
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
                                            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-3 col-md-3 vc_col-xs-6 col-xs-6">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <figure className="logo-item ">
                                                            <img 
                                                                src={process.env.PUBLIC_URL + '/images/logo03.jpg'} 
                                                                alt="alt"
                                                            />
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-3 col-md-3 vc_col-xs-6 col-xs-6">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <figure className="logo-item ">
                                                            <img 
                                                                src={process.env.PUBLIC_URL + '/images/logo02.jpg'} 
                                                                alt="alt"
                                                            />
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6 vc_col-md-3 col-md-3 vc_col-xs-6 col-xs-6">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <figure className="logo-item ">
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
                {/* Section 12 */}
                <section className="content-section no-spacing">
                    <div className="container">
                        <div className="vc_row row wpb_row vc_row-fluid">
                            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6">
                                <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                        <figure className="gallery-item ">
                                            <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item01.jpg" data-fancybox="">
                                                <img 
                                                    src={process.env.PUBLIC_URL + '/images/gallery-item01.jpg'}
                                                    alt="alt"
                                                />
                                            </a>
                                        </figure>
                                        <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item01.jpg" data-fancybox="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6">
                                <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                        <div className="vc_row row wpb_row vc_inner vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <figure className="gallery-item ">
                                                            <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item01.jpg" data-fancybox=""> </a>
                                                            <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item02.jpg" data-fancybox="">
                                                                <img 
                                                                    src={process.env.PUBLIC_URL + '/images/gallery-item02.jpg'}
                                                                    alt="alt"
                                                                />
                                                            </a>
                                                        </figure>
                                                        <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item02.jpg" data-fancybox=""> </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <figure className="gallery-item ">
                                                            <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item02.jpg" data-fancybox=""> </a>
                                                            <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item03.jpg" data-fancybox="">
                                                                <img src={process.env.PUBLIC_URL + '/images/gallery-item03.jpg'} alt="alt" />
                                                            </a>
                                                        </figure>
                                                        <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item03.jpg" data-fancybox=""> </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <figure className="gallery-item ">
                                                            <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item03.jpg" data-fancybox=""> </a>
                                                            <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item04.jpg" data-fancybox="">
                                                                <img src={process.env.PUBLIC_URL + '/images/gallery-item04.jpg'} alt="alt" />
                                                            </a>
                                                        </figure>
                                                        <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item04.jpg" data-fancybox=""> </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-6 col-sm-6">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <figure className="gallery-item ">
                                                            <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item04.jpg" data-fancybox=""> </a>
                                                            <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item05.jpg" data-fancybox="">
                                                                <img src={process.env.PUBLIC_URL + '/images/gallery-item05.jpg'} alt="alt" />
                                                            </a>
                                                        </figure>
                                                        <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item05.jpg" data-fancybox=""> </a>
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
                {/* Section 13 */}
                <section className="content-section no-spacing">
                    <div className="container">
                        <div className="vc_row row wpb_row vc_row-fluid section-note">
                            <div className="wpb_column vc_column_container vc_col-sm-12 col-sm-12">
                                <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                        <div className="text-box ">
                                            <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item05.jpg" data-fancybox="">
                                                <h6>Barcodes, Inc. <strong>Logistics Facilities</strong> &amp; Technical Support to Continue Operations as Essential Services</h6>
                                            </a>
                                        </div>
                                        <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item05.jpg" data-fancybox=""> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section 14 */}
                <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/gallery-item05.jpg" data-fancybox=""> </a>
            </main>
            <Footer />
            
        </div>
    )
}

export default AboutPage
