import './styles.css'
import { 
FaFacebookF,
FaTwitter,
FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className="topbar" >
            <div className="container" >
                <div className="phone" >
                    <span>Call Us Now:</span>
                    <Link to="/" >+1 (123) 123 0 12</Link>
                </div>
                <div className="email" >
                    Email: 
                    <Link to="/" >sales@sales.com</Link>
                </div>
                <div className="social-media" >
                    <span>Follow us</span>
                    <ul>
                        <li>
                            <Link to="www.facebook.com" >
                                <FaFacebookF style={{ color:'black', fontSize: '14px' }} />
                                <span>Facebook</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="www.twitter.com" >
                                <FaTwitter style={{ color:'black', fontSize: '14px' }} />
                                <span>Twitter</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="www.linkedin.com" >
                                <FaLinkedin style={{ color:'black', fontSize: '14px' }} />
                                <span>Linkedin</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Topbar
