import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./styles.css";
// import { useState } from "react";
// import { signOutUser } from "../../../redux/Main/main.actions";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

// Google Maps And Material Ui
import GoogleMapReact from "google-map-react";
// import { useMediaQuery } from "@material-ui/core";
// import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
// import Rating from "@material-ui/lab";

import useStyles from "./styles";
<<<<<<< HEAD

const Shipper = ({ user }) => {
  // const [valid, setValid] = useState(false);
  const classes = useStyles();
  // const isMobile = useMediaQuery("(min-width:600)");
  const coordinates = { lat: 0, lng: 0 };
=======
// oussama1998ggapi azerty1998
const Shipper = ({ user, setCoordinates, setBounds, coordinates }) => {
  const [valid, setValid] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600)");
>>>>>>> 7f01a90170225e44dc011af390d5958235f0eb15

  // const toggleSidebar = () => {
  //   console.log("Toggle Sidebar !");
  //   setValid(!valid);
  // };

  // const dispatch = useDispatch();
  // let history = useHistory();
  // const logOut = () => {
  //   dispatch(signOutUser());
  //   history.push("/signinshipper");
  // };

  // const zoom = 11;
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
<<<<<<< HEAD
        // bootstrapURLKeys={{ key: "AIzaSyCia2LB-2uQ-LsDWZOLHDkzqinHxwZrqEQ" }}
        // bootstrapURLKeys={{ key: "AIzaSyBnOGp0Dx1ezNbGEmVdqe8G_9GlSqnnxtM" }}
=======
>>>>>>> 7f01a90170225e44dc011af390d5958235f0eb15
        bootstrapURLKeys={{ key: "AIzaSyDu4220ohlstEdfL47tpCPh9lo0MtwN13Q" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.se });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

Shipper.defaultProps = {
  user: { username: "Ramirez" },
};

export default Shipper;
