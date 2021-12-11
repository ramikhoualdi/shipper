import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
// import { FiArrowRight } from "react-icons/fi";
// import { AiOutlineGoogle } from "react-icons/ai";
// import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
// import AuthFooter from "../../../sections/AuthFooter/AuthFooter";
// import { signIn } from "../../../../redux/Main/main.actions";
import {useSelector } from "react-redux";
// import validator from "validator";

const mapState = ({ main }) => ({
  currentUser: main.currentUser,
  signInSuccess: main.signInSuccess,
  errors: main.errors,
});

const SignInShipper = () => {
  const { currentUser, signInSuccess, errors } = useSelector(mapState);
  // const dispatch = useDispatch();

  const [email, handleEmail] = useState("");
  const [password, handlePassword] = useState("");
  // const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("useEffect SignInShipper");
    console.log(currentUser, signInSuccess, errors);
  }, [currentUser, signInSuccess, errors]);

  // const handleSubmit = () => {
  //   let check = true;
  //   if (!validator.isEmail(email)) {
  //     check = false;
  //   }
  //   if (password.length < 8) {
  //     check = false;
  //   }
  //   if (check) {
  //     dispatch(signIn(email, password));
  //   } else {
  //     console.log("Can t Login !! ");
  //   }
  // };
  // const visibleClicked = () => {
  //   setVisible(!visible);
  // };

  return (
    <div
      className="sininshipper"
      style={{ display: "flex", flexDirection: "row" }}
    >
      {/* Section 1 */}
      {/* <div className="signin_navbar">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
        </Link>
        <Link to="/signupshipper">
          <button className="signin_btn-form">Sign Up As a Shipper</button>
        </Link>
      </div> */}
      {/* Section 2 */}
      {/* <div className="signin_form">
        <h1>Shipper</h1>
        <h2>Login</h2>
        <p>
          choose from over 200 online carrier in us with
          <br /> realtime secure and Frindly user UI{" "}
        </p>
      </div> */}
      {/* Section 3 */}
      {/* <div className="signinshipper_footer container">
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
              <p>Submit</p>
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
      </div> */}
      {/* Section 4*/}
      {/* <AuthFooter /> */}
      <div
        style={{
          width: "50vw",
          height: "100vh",
          backgroundColor: "white",
          padding: "10%",
        }}
      >
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            style={{ marginBottom: "20px" }}
            alt="logo"
          />
        </Link>
        <p style={{ fontSize: "16px", fontWeight: "600", color: "black" }}>
          Welcome back. Sign in to startshipping.
        </p>
        <label className="label">Email</label>
        <br />
        <input
          className="input"
          style={{ padding: "10px", height: "40px" }}
          type="text"
          value={email}
          onChange={handleEmail}
        />
        <label className="label">Password</label>
        <br />
        <input
          className="input"
          style={{ padding: "10px", height: "40px" }}
          type="password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ fontSize: "12px" }}>Having trouble logging in ?</p>
          <button
            style={{ fontSize: "12px", color: "blue", cursor: "pointer", border: "none", }}
            className="link"
          >
            Reset your password
          </button>
        </div>
        <Link to="/shipper">
          <button className="btn" style={{ maxWidth: "420px", height: "40px" }}>
            Sign in
          </button>
        </Link>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ fontSize: "12px" }}>Don't have an account?{"  "}</p>
          <Link to="/signupshipper">
            <p
              style={{ fontSize: "12px", color: "blue", cursor: "pointer" }}
              className="link"
            >
              Sign up
            </p>
          </Link>
        </div>
      </div>
      <div
        style={{
          width: "50vw",
          height: "100vh",
          backgroundColor: "yellow",
          overflow: "hidden",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/main/log1.jpeg"}
          style={{ height: "100vh" }}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default SignInShipper;
