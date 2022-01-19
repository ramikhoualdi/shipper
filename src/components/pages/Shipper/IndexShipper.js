import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Shipper from "./Shipper";
import Header from "./Header";
import List from "./List";
const IndexShipper = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Shipper />
        </Grid>
      </Grid>
    </>
  );
};

export default IndexShipper;
