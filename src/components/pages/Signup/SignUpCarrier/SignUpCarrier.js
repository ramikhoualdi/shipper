import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import { FiArrowRight } from "react-icons/fi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import AuthFooter from "../../../sections/AuthFooter/AuthFooter";
import { signUpCarrier } from "../../../../redux/Carrier/carrier.actions";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

const mapState = ({ carrier }) => ({
  currentUser: carrier.currentUser,
  carrierSignUpSuccess: carrier.carrierSignUpSuccess,
});

const SignUpCarrier = () => {
  const { currentUser, carrierSignUpSuccess, errors } = useSelector(mapState);
  const dispatch = useDispatch();

  const [name, handleName] = useState("");
  const [email, handleEmail] = useState("");
  const [password, handlePassword] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("useEffect SignUpCarrier");
    console.log(currentUser, carrierSignUpSuccess, errors);
  }, [currentUser, carrierSignUpSuccess, errors]);

  const handleSubmit = () => {
    let check = true;
    if (!validator.isEmail(email)) {
      check = false;
    }
    if (password.length < 8) {
      check = false;
    }
    if (check) {
      dispatch(signUpCarrier(name, email, password));
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
        <Link to="/signincarrier">
          <button className="signin_btn-form">Sign In As a Carrier</button>
        </Link>
      </div>
      {/* Section 2 */}
      <div className="signin_form">
        <h1>Carrier</h1>
        <h2>Register</h2>
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
                type="text"
                className="email-field"
                value={name}
                placeholder="Full Name"
                onChange={(e) => handleName(e.target.value)}
                required
              />
            </div>
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
              <p>Submit</p>
              <FiArrowRight fontSize={25} />
            </div>
            <p>
              <Link to="/signupshipper">Already have an account?</Link>
              <br />
              <Link to="/privacy_policy">Privacy Policy</Link>{" "}
            </p>
          </div>
          {/* <div className="footer_center col-sm-12">
            <div className="horiz_line"></div>
            <p>or</p>
            <div className="horiz_line"></div>
          </div>
          <div className="footer_right col-sm-12">
            <div className="border-form-field signin-google">
              <AiOutlineGoogle fontSize={25} className="google_icon" />
              Sign In With Google
            </div>
          </div> */}
        </div>
      </div>
      {/* Section 4*/}
      <AuthFooter />
    </div>
  );
};

export default SignUpCarrier;
