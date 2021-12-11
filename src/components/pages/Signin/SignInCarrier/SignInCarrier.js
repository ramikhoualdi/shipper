import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import AuthFooter from "../../../sections/AuthFooter/AuthFooter";
import { signInCarrier } from "../../../../redux/Carrier/carrier.actions";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

const mapState = ({ carrier }) => ({
    currentUser: carrier.currentUser,
  carrierSignInSuccess: carrier.carrierSignInSuccess,
});

const SignInCarrier = () => {
    const { currentUser, carrierSignInSuccess, errors } = useSelector(mapState);
  const dispatch = useDispatch();

  const [email, handleEmail] = useState("");
  const [password, handlePassword] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("useEffect signInCarrier");
    console.log(currentUser, carrierSignInSuccess, errors);
  }, [currentUser, carrierSignInSuccess, errors]);

  const handleSubmit = () => {
    let check = true;
    if (!validator.isEmail(email)) {
      check = false;
    }
    if (password.length < 8) {
      check = false;
    }
    if (check) {
      dispatch(signInCarrier(email, password));
    } else {
      console.log("Can t Login !! ");
    }
  };
  const visibleClicked = () => {
    setVisible(!visible);
  };

  return (
    <div className="sininshipper">
      {/* Section 1 */}
      <div className="signin_navbar">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
        </Link>
        <Link to="/signupshipper">
          <button className="signin_btn-form">Sign Up As a Shipper</button>
        </Link>
      </div>
      {/* Section 2 */}
      <div className="signin_form">
        <h1>Login to your Shipper account</h1>
        <p>
          choose from over 200 online carrier in us with
          <br /> realtime secure and Frindly user UI{" "}
        </p>
      </div>
      {/* Section 3 */}
      <div className="signinshipper_footer container">
        <div className="signinshipper_footer-main">
          <div className="footer_left col-sm-12">
            <div className="input_container">
              <input
                type="email"
                className="email-field"
                value={email}
                placeholder="Email"
                onChange={(e) => handleEmail(e.target.value)}
                required
              />
            </div>
            <div className="input_container">
              <input
                type={!visible ? "password" : "text"}
                className="password-field"
                value={password}
                placeholder="Password"
                onChange={(e) => handlePassword(e.target.value)}
              />
              <div onClick={visibleClicked}>
                {!visible ? <BsEyeFill /> : <BsEyeSlashFill />}
              </div>
            </div>
            <div className="submit-btn" onClick={handleSubmit}>
              <p>Login to your Carrier account</p>
              <FiArrowRight fontSize={25} />
            </div>
            <p>
              <Link to="/recovery">Forget password?</Link>{" "}
              <Link to="/signupshipper">Don't have an account?</Link>
              <br />
              <Link to="/privacy_policy">Privacy Policy</Link>{" "}
            </p>
          </div>
          <div className="footer_center col-sm-12">
            <div className="horiz_line"></div>
            <p>or</p>
            <div className="horiz_line"></div>
          </div>
          <div className="footer_right col-sm-12">
            <div className="border-form-field signin-google">
              <AiOutlineGoogle fontSize={25} className="google_icon" />
              Sign In With Google
            </div>
          </div>
        </div>
      </div>
      {/* Section 4*/}
      <AuthFooter />
    </div>
  );
}

export default SignInCarrier
