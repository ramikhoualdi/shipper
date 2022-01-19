// import SideNav, {
//   Toggle,
//   Nav,
//   NavItem,
//   NavIcon,
//   NavText,
// } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./styles.css";
import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { signOutUser } from "../../../redux/Main/main.actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Shipper = ({ user }) => {
  const [valid, setValid] = useState(false);
  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyCYm0h7nJW8k0O-IPU4T3cKROKXWoBuy9A",
    onPlaceSelected: (place) => {
      console.log(place);
    },
    options: {
      types: ["(regions)"],
      componentRestrictions: { country: "ru" },
    },
  });
  const center = {
    lat: 59.95,
    lng: 30.33,
  };
  const toggleSidebar = () => {
    console.log("Toggle Sidebar !");
    setValid(!valid);
  };

  const dispatch = useDispatch();
  let history = useHistory();
  const logOut = () => {
    dispatch(signOutUser());
    history.push("/signinshipper");
  };
  const zoom = 11;
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="header">
        <div>
          {valid && (
            <img
              src={process.env.PUBLIC_URL + "/icons/arrow_left.png"}
              style={{ width: "20px", height: "20px", marginLeft: "10px" }}
              alt="back"
            />
          )}
        </div>
        <div>
          <p style={{ paddingTop: "15px" }}>Find a carrier</p>
        </div>
        <div onClick={toggleSidebar}>
          <img
            src={process.env.PUBLIC_URL + "/icons/more.png"}
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            alt="more"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          className="homeLayoutContainer"
          style={{
            flex: 1,
            width: "300px",
            height: "100%",
            backgroundColor: "white",
            marginLeft: "64px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "300px",
              // position: "absolute",
              top: "0",
              left: "0",
              backgroundColor: "grey",
              opacity: "0.8",
              borderRightWidth: "1",
              borderRightColor: "black",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                padding: "20px",
                backgroundColor: "white",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/icons/close.png"}
                style={{ height: "25px", width: "25px" }}
                alt="close"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "white",
                height: "100%",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/team-member03.jpg"}
                style={{ width: "50px", height: "50px", borderRadius: "50px" }}
                alt="profile pic"
              />
              <p className="profileName">Harry Arthur</p>
              <p className="profileName">harryArthur@shipways.com</p>
              <button onClick={logOut} className="btn">
                Logged Out
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "95vh",
            width: "80%",
            position: "relative",
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCYm0h7nJW8k0O-IPU4T3cKROKXWoBuy9A",
            }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <AnyReactComponent
              lat={38.8938672}
              lng={-77.0846156}
              text="My Marker"
            />
          </GoogleMapReact>
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              width: "25%",
              // height: "90px",
              borderRadius: 5,
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                flex: 1,
                padding: "0px 10px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "40px" }}>
                <img
                  src={process.env.PUBLIC_URL + "/icons/icon1.png"}
                  style={{ padding: "10px" }}
                  alt="pic"
                />
              </div>
              <div style={{ width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <input
                    ref={ref}
                    style={{
                      width: "100%",
                      height: "30px",
                      backgroundColor: "white",
                      marginBottom: "10px",
                      border: "none",
                      borderBottomWidth: "black",
                      fontSize: "12px",
                      paddingTop: "10px",
                    }}
                    type="text"
                    placeholder="Enter an origin location"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/icons/mic.png"}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "12px",
                      marginTop: "5px",
                    }}
                    alt="mic"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/icons/close.png"}
                    style={{
                      width: "15px",
                      height: "15px",
                      marginRight: "12px",
                      marginTop: "5px",
                    }}
                    alt="mic"
                  />
                </div>
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "rgba(0,0,0,0.2)",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <input
                    ref={ref}
                    style={{
                      width: "100%",
                      height: "30px",
                      backgroundColor: "white",
                      border: "none",
                      borderBottomWidth: "black",
                      fontSize: "12px",
                      paddingTop: "10px",
                    }}
                    type="text"
                    placeholder="Enter a destination location"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/icons/mic.png"}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "12px",
                      marginTop: "5px",
                    }}
                    alt="mic"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/icons/close.png"}
                    style={{
                      width: "15px",
                      height: "15px",
                      marginRight: "12px",
                      marginTop: "5px",
                    }}
                    alt="mic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Shipper.defaultProps = {
  user: { username: "Ramirez" },
};

export default Shipper;
