import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Shipper from "./Shipper";
<<<<<<< HEAD
// import Header from "./Header";
import List from "./List";
=======
import Header from "./Header";
import Listt from "./List";
import { getPlacesData } from "../../../api";

//Material Ui Drawer
import { styled, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core";
import Drawer from "@material-ui/core";
import MuiAppBar from "@material-ui/core";
import Toolbar from "@material-ui/core";
import List from "@material-ui/core";
import Typography from "@material-ui/core";
import Divider from "@material-ui/core";
import IconButton from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core";
import ListItemIcon from "@material-ui/core";
import ListItemText from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

>>>>>>> 7f01a90170225e44dc011af390d5958235f0eb15
const IndexShipper = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    console.log(bounds);
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [bounds, coordinates]);

  return (
    <>
      <CssBaseline />
      {/* <Header /> */}
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={9}>
          <Shipper
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Listt />
        </Grid>

      </Grid>
    </>
  );
};

export default IndexShipper;
