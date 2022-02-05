import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Shipper from "./Shipper";
// import Header from "./Header";
import List from "./List";
import { getPlacesData } from "../../../api";

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
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Shipper
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default IndexShipper;
