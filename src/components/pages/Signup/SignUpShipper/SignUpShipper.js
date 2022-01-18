import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../style.css";
// import { FiArrowRight } from "react-icons/fi";
// import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
// import AuthFooter from "../../../sections/AuthFooter/AuthFooter";
import {
  signUpUser,
  resetAuthSuccess,
} from "../../../../redux/Main/main.actions";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

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
  const [email, handleEmail] = useState("Alex@gmail.com");
  const [password, handlePassword] = useState("hellodude");
  const [cpassword, handleCpassword] = useState("hellodude");
  const [msgError, setMsgError] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (signUpSuccess) {
      history.push("/shipper");
      dispatch(resetAuthSuccess());
    }
    if (errors?.length > 0) {
      console.log("Error useEffect", errors.message);
      if (errors === "Firebase: Error (auth/email-already-in-use).") {
        setMsgError(
          `The provided email is already in use by an existing user.
           Each user must have a unique email.`
        );
      } else {
        setMsgError("Please check you credentials again.");
      }
      setVisible(true);
    }
  }, [signUpSuccess, errors]);

  const handleSubmit = async () => {
    let check = true;
    if (!validator.isEmail(email)) {
      check = false;
    }
    if (password.length < 8) {
      check = false;
    }
    if (check) {
      let type = "1";
      console.log({ fname, email, password, type });
      dispatch(signUpUser({ fname, email, password, type }));
    } else {
      setVisible(true);
      console.log("Can't Sign Up !! ");
    }
  };
  return (
    <div
      className="sininshipper"
      style={{ display: "flex", flexDirection: "row" }}
    >
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
        <label className="label">Username</label>
        <br />
        <input
          className="input"
          style={{ padding: "10px", height: "40px" }}
          type="text"
          value={fname}
          onChange={(e) => handleFname(e.target.value)}
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
        {/* confirm Password */}
        <label className="label">Confirm password</label>
        <br />
        <input
          className="input"
          style={{ padding: "10px", height: "40px" }}
          type="password"
          value={cpassword}
          onChange={(e) => handleCpassword(e.target.value)}
        />
        <br />
        {/* <Link to="/shipper"> */}
        {visible && <p className="error">{msgError}</p>}
        <button
          className="btn"
          style={{ maxWidth: "420px", height: "40px" }}
          onClick={handleSubmit}
        >
          Sign up
        </button>
        {/* </Link> */}
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
