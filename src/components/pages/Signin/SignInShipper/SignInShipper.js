import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../style.css";
// import { FiArrowRight } from "react-icons/fi";
// import { AiOutlineGoogle } from "react-icons/ai";
// import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
// import AuthFooter from "../../../sections/AuthFooter/AuthFooter";
// import { signIn } from "../../../../redux/Main/main.actions";
import {useSelector,useDispatch } from "react-redux";
import { signInUser } from "../../../../redux/Main/main.actions";
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
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    console.log("useEffect SignInShipper");
    console.log(currentUser, signInSuccess, errors);
  }, [currentUser, signInSuccess, errors]);

  const handleSubmit = async () => {
    let check = true;


    if (check) {

      dispatch(signInUser({ email, password}));
      history.push("/shipper");
    } else {
      console.log("Can't Sign In !! ");
    }
  };

  return (
    <div
      className="sininshipper"
      style={{ display: "flex", flexDirection: "row" }}
    >
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
          onChange={(e) => handleEmail(e.target.value)}
        />
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
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ fontSize: "12px" }}>Having trouble logging in ?</p>
          <button
            style={{ fontSize: "12px", color: "blue", cursor: "pointer", border: "none", }}
            className="link"
          >
            Reset your password
          </button>
        </div>
        
          <button className="btn" style={{ maxWidth: "420px", height: "40px" }}  onClick={handleSubmit}>
            Sign in
          </button>
        
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
