import Footer from '../../sections/Footer/Footer'
import Navbar from '../../sections/Navbar/Navbar'
import Topbar from '../../sections/Topbar/Topbar'
import './styles.css'

const NewsPage = () => {
    return (
        <div>
            <Topbar />
            <Navbar />
            {/* Section 1 */}
            <header className="page-header" data-stellar-background-ratio="0.7" 
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/page-header-bg.jpg'})`, backgroundPosition: '0px -33px' }}
            >
                <div className="container">
                    <h2>News</h2>
                    <p>Small Programs Perfect For Beginners To Get Started With Personal Growth</p>
                </div>
            </header>
            {/* Section 2 */}
            <main>
                <section className="content-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div id="post-141" className="blog-post post-141 post type-post status-publish format-standard has-post-thumbnail hentry category-forwarding">
                                    <figure className="post-image">
                                        <img 
                                            src={process.env.PUBLIC_URL + '/images/news04.jpg'}
                                            alt="Expression alteration entreaties mrs can terminated estimating."
                                        />
                                    </figure>
                                    <div className="post-content">
                                        <div className="post-inner">
                                            <small className="post-date"> October 31, 2020</small>
                                            <h3 className="post-title">
                                                <a href="http://qesco.themezinho.net/expression-alteration-entreaties-mrs-can-terminated-estimating/">
                                                    Expression alteration entreaties mrs can terminated estimating.
                                                </a>
                                            </h3>
                                            <div className="author post-author">
                                                <img 
                                                    src={process.env.PUBLIC_URL + '/images/avatar-150x150.jpg'}
                                                    alt="Quesco LLC"
                                                />
                                                <span>by<b>Quesco LLC</b></span>
                                            </div>
                                        </div>
                                    </div>                            
                                </div>
                                <div id="post-139" className="blog-post post-139 post type-post status-publish format-standard has-post-thumbnail hentry category-outsourcing">
                                    <figure className="post-image">
                                        <img 
                                            src={process.env.PUBLIC_URL + '/images/news03.jpg'}
                                            alt="Subject but why ten earnest husband imagine sixteen brandon."
                                        />
                                    </figure>
                                    <div className="post-content">
                                        <div className="post-inner">
                                            <small className="post-date">October 31, 2020</small>
                                            <h3 className="post-title">
                                                <a href="http://qesco.themezinho.net/subject-but-why-ten-earnest-husband-imagine-sixteen-brandon/">
                                                    Subject but why ten earnest husband imagine sixteen brandon.
                                                </a>
                                            </h3>
                                            <div className="author post-author">
                                                <img 
                                                    src={process.env.PUBLIC_URL + '/images/avatar-150x150.jpg'}
                                                    alt="Quesco LLC" 
                                                /><span>by<b>Quesco LLC</b></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="post-137" className="blog-post post-137 post type-post status-publish format-standard has-post-thumbnail hentry category-supply-chain">
                                    <figure className="post-image">
                                        <img 
                                            src={process.env.PUBLIC_URL + '/images/news02.jpg'}
                                            alt="Sentiments way understood end partiality and his."
                                        />
                                    </figure>
                                    <div className="post-content">
                                        <div className="post-inner">
                                            <small className="post-date">October 31, 2020</small>
                                            <h3 className="post-title">
                                                <a href="http://qesco.themezinho.net/sentiments-way-understood-end-partiality-and-his/">
                                                    Sentiments way understood end partiality and his.
                                                </a>
                                            </h3>
                                            <div className="author post-author">
                                                <img 
                                                    src={process.env.PUBLIC_URL + '/images/avatar-150x150.jpg'}
                                                    alt="Quesco LLC"
                                                /> <span>by<b>Quesco LLC</b></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="post-1" className="blog-post post-1 post type-post status-publish format-standard has-post-thumbnail hentry category-technology">
                                    <figure className="post-image">
                                        <img 
                                            src={process.env.PUBLIC_URL + '/images/news01.jpg'}
                                            alt="An an valley indeed so no wonder future nature vanity."
                                        />
                                    </figure>
                                    <div className="post-content">
                                        <div className="post-inner">
                                            <small className="post-date">October 30, 2020</small>
                                            <h3 className="post-title">
                                                <a href="http://qesco.themezinho.net/hello-world/">
                                                    An an valley indeed so no wonder future nature vanity.
                                                </a>
                                            </h3>
                                            <div className="author post-author">
                                                <img 
                                                    src={process.env.PUBLIC_URL + '/images/avatar-150x150.jpg'}
                                                    alt="Quesco LLC"
                                                /> <span>by<b>Quesco LLC</b></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="sidebar widget-area">
                                    <div id="search-2" className="widget widget_search">
                                        <form role="search" method="get" className="search-form" action="http://qesco.themezinho.net/">
				                            <label>
                                                <span className="screen-reader-text">Search for:</span>
                                                <input type="search" className="search-field" placeholder="Search …" value="" name="s"/>
                                            </label>
                                            <input type="submit" className="search-submit" value="Search"/>
                                        </form>
                                    </div>
                                    <div id="categories-2" className="widget widget_categories">
                                        <h6 className="widget-title">Categories</h6>
                                        <ul>
                                            <li className="cat-item cat-item-3">
                                                <a href="http://qesco.themezinho.net/category/forwarding/">Forwarding</a>
                                            </li>
                                            <li className="cat-item cat-item-5">
                                                <a href="http://qesco.themezinho.net/category/outsourcing/">Outsourcing</a>
                                            </li>
                                            <li className="cat-item cat-item-4">
                                                <a href="http://qesco.themezinho.net/category/supply-chain/">Supply Chain</a>
                                            </li>
                                            <li className="cat-item cat-item-6">
                                                <a href="http://qesco.themezinho.net/category/technology/">Technology</a>
                                            </li>
			                            </ul>
                        			</div>
		                            <div id="recent-posts-2" className="widget widget_recent_entries">
                                        <h6 className="widget-title">Recent Posts</h6>
                                        <ul>
											<li>
					                            <a href="http://qesco.themezinho.net/expression-alteration-entreaties-mrs-can-terminated-estimating/">
                                                    Expression alteration entreaties mrs can terminated estimating.
                                                </a>
									        </li>
											<li>
					                            <a href="http://qesco.themezinho.net/subject-but-why-ten-earnest-husband-imagine-sixteen-brandon/">
                                                    Subject but why ten earnest husband imagine sixteen brandon.
                                                </a>
									        </li>
											<li>
					                            <a href="http://qesco.themezinho.net/sentiments-way-understood-end-partiality-and-his/">
                                                    Sentiments way understood end partiality and his.
                                                </a>
									        </li>
											<li>
					                            <a href="http://qesco.themezinho.net/hello-world/">
                                                    An an valley indeed so no wonder future nature vanity.
                                                </a>
									        </li>
					                    </ul>
		                            </div>
                                    <div id="media_gallery-2" className="widget widget_media_gallery">
                                        <h6 className="widget-title">Gallery</h6>
                                        <div id="gallery-1" className="gallery galleryid-1 gallery-columns-2 gallery-size-thumbnail">
                                            <figure className="gallery-item">
                                                <div className="gallery-icon landscape">
                                                    <a href="http://qesco.themezinho.net/wp-content/uploads/2020/10/tab-image02.jpg" data-fancybox="">
                                                        <img 
                                                            width="150" 
                                                            height="150" 
                                                            src={process.env.PUBLIC_URL + '/images/tab-image02-150x150.jpg'}
                                                            className="attachment-thumbnail size-thumbnail" 
                                                            alt="alt" loading="lazy"
                                                        />
                                                    </a>
                                                </div>
                                            </figure>
                                            <figure className="gallery-item">
                                                <div className="gallery-icon landscape">
                                                    <a 
                                                        href="http://qesco.themezinho.net/wp-content/uploads/2020/10/tab-image03.jpg" 
                                                        data-fancybox=""
                                                    >
                                                        <img 
                                                            width="150" 
                                                            height="150" 
                                                            src={process.env.PUBLIC_URL + '/images/tab-image03-150x150.jpg'}
                                                            className="attachment-thumbnail size-thumbnail" 
                                                            alt="" loading="lazy"
                                                        />
                                                    </a>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                    <div id="recent-comments-2" className="widget widget_recent_comments">
                                        <h6 className="widget-title">Recent Comments</h6>
                                        <ul id="recentcomments">
                                            <li className="recentcomments">
                                                <span className="comment-author-link">
                                                    <a href="http://qesco.themezinho.net" rel="external nofollow ugc" className="url">admin</a>
                                                </span> on 
                                                <a href="http://qesco.themezinho.net/expression-alteration-entreaties-mrs-can-terminated-estimating/#comment-2">
                                                    Expression alteration entreaties mrs can terminated estimating.</a>
                                            </li>
                                            <li className="recentcomments">
                                                <span className="comment-author-link">
                                                    <a href="https://wordpress.org/" rel="external nofollow ugc" className="url">A WordPress Commenter</a>
                                                </span> on 
                                                <a href="http://qesco.themezinho.net/hello-world/#comment-1">An an valley indeed so no wonder future nature vanity.</a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                      </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default NewsPage
