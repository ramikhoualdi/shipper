import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../style.css";
// import { FiArrowRight } from "react-icons/fi";
// import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
// import AuthFooter from "../../../sections/AuthFooter/AuthFooter";
import {
  // signUpUser,
  resetAuthSuccess,
} from "../../../../redux/Main/main.actions";
import { useDispatch, useSelector } from "react-redux";
// import validator from "validator";

const mapState = ({ main }) => ({
  currentUser: main.currentUser,
  signUpSuccess: main.signUpSuccess,
  errors: main.errors,
});

const SignUpShipper = () => {
  const { currentUser, signUpSuccess, errors } = useSelector(mapState);
  console.log({ currentUser, signUpSuccess, errors });
  const dispatch = useDispatch();
  let history = useHistory();

  const [fname, handleFname] = useState("Alex");
  const [lname, handleLname] = useState("Harry");
  const [company, handleCompany] = useState("xyz");
  const [job, handleJob] = useState("carrier");
  const [email, handleEmail] = useState("Alex@gmail.com");
  const [phone, handlePhone] = useState("+1 1002003333");
  const [password, handlePassword] = useState("hellodude");
  // const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (signUpSuccess) {
      history.push("/shipper");
      dispatch(resetAuthSuccess());
    }
  });

  // const handleSubmit = () => {
  //   let check = true;
  //   if (!validator.isEmail(email)) {
  //     check = false;
  //   }
  //   if (password.length < 8) {
  //     check = false;
  //   }
  //   if (check) {
  //     let type = "1";
  //     console.log({ name, email, password, type });
  //     let myObj = { name, email, password, type };
  //     // dispatch(signUpUser(myObj));
  //     history.push("/shipper");
  //   } else {
  //     console.log("Can't Sign Up !! ");
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
        <Link to="/signinshipper">
          <button className="signin_btn-form">Sign In As a Shipper</button>
        </Link>
      </div> */}
      {/* Section 2 */}
      {/* <div className="signin_form">
        <h1>Shipper</h1>
        <h2>Register</h2>
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
              <Link to="/signinshipper">Already have an account?</Link>
              <br />
              <Link to="/privacy_policy">Privacy Policy</Link>{" "}
            </p>
          </div> */}
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
      {/* </div>
      </div> */}
      {/* Section 4*/}
      {/* <AuthFooter /> */}
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
          alt="logo1"
        />
      </div>
      <div
        style={{
          width: "50vw",
          height: "100vh",
          backgroundColor: "white",
          padding: "2% 10%",
          overflow: "scroll",
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
          Welcome to new kind of freight partnership.
        </p>
        {/* First Name */}
        <label className="label">First Name</label>
        <br />
        <input
          className="input"
          style={{ padding: "10px", height: "40px" }}
          type="text"
          value={fname}
          onChange={(e) => handleFname(e.target.value)}
        />
        {/* Last Name */}
        <label className="label">Last Name</label>
        <br />
        <input
          className="input"
          style={{ padding: "10px", height: "40px" }}
          type="text"
          value={lname}
          onChange={(e) => handleLname(e.target.value)}
        />
        {/* Company Name */}
        <label className="label">Company Name</label>
        <br />
        <input
          className="input"
          style={{ padding: "10px", height: "40px" }}
          type="text"
          value={company}
          onChange={(e)=> handleCompany(e.target.value)}
        />
        {/* Job Title */}
        <label className="label">Job Title</label>
        <br />
        <input
          className="input"
          style={{ padding: "10px", height: "40px" }}
          type="text"
          value={job}
          onChange={(e) => handleJob(e.target.value)}
        />
        {/* Work Email */}
        <label className="label">Work Email</label>
        <br />
        <input
          className="input"
          style={{ padding: "10px", height: "40px" }}
          type="text"
          value={email}
          onChange={(e) => handleEmail(e.target.value)}
        />
        {/* Phone Number */}
        <label className="label">Phone Number</label>
        <br />
        <input
          className="input"
          style={{ padding: "10px", height: "40px" }}
          type="text"
          value={phone}
          onChange={(e) => handlePhone(e.target.value)}
        />
        {/* Password */}
        <label className="label">Password</label>
        <br />
        <input
          className="input"
          style={{ padding: "10px", height: "40px" }}
          type="password"
          value={password}
          onChange={(e) => handlePassword(e.target.value)}
        />
        <br />
        <Link to="/shipper">
          <button className="btn" style={{ maxWidth: "420px", height: "40px" }}>
            Sign up
          </button>
        </Link>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ fontSize: "12px" }}>Already have an account?{"  "}</p>
          <Link to="/signinshipper">
            <p
              style={{ fontSize: "12px", color: "blue", cursor: "pointer" }}
              className="link"
            >
              Sign in
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpShipper;
