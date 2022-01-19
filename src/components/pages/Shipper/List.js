import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./ListStyles";
import PlaceDetails from "./PlaceDetails";
const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("oussama");
  const [rating, setRating] = useState("");
  const places = [
    { name: "Cool Place" },
    { name: "Cool Beer" },
    { name: "Cool Steak" },
    { name: "Cool Place" },
    { name: "Cool Beer" },
    { name: "Cool Steak" },
    { name: "Cool Place" },
    { name: "Cool Beer" },
    { name: "Cool Steak" },
  ];
  return (
    <div className={classes.container}>
      <Typography variant="h4">Carrier And Shipper</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="oussama">Oussama</MenuItem>
          <MenuItem value="kunal">Kunal</MenuItem>
          <MenuItem value="rami">Rami</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
