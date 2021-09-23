import './styles.css'
import { 
FaFacebookF,
FaTwitter,
FaLinkedin,
} from 'react-icons/fa';

const Topbar = () => {
    return (
        <div className="topbar" >
            <div className="container" >
                <div className="phone" >
                    <span>Call Us Now:</span>
                    <a href="#" >+1 (123) 123 0 12</a>
                </div>
                <div className="email" >
                    Email: 
                    <a href="#" >sales@sales.com</a>
                </div>
                <div className="social-media" >
                    <span>Follow us</span>
                    <ul>
                        <li>
                            <a href="#" >
                                <FaFacebookF style={{ color:'black', fontSize: '14px' }} />
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" >
                                <FaTwitter style={{ color:'black', fontSize: '14px' }} />
                                <span>Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" >
                                <FaLinkedin style={{ color:'black', fontSize: '14px' }} />
                                <span>Linkedin</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Topbar
