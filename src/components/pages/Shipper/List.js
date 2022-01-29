import React from "react";
import HeaderModel from "./HeaderModel";
import useStyles from "./ListStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./screens/Profile/Profile";
import Home from "./screens/Home";
const ListContent = () => {
  const classes = useStyles();
<<<<<<< HEAD
=======
  const [type, setType] = useState("oussama");
  const [rating, setRating] = useState("");
  const places = [
    { name: "Carrier 1" },
    { name: "Carrier 2" },
    { name: "Carrier 3" },
    { name: "Carrier 4" },
    { name: "Carrier 5" },
    { name: "Carrier 6" },
    { name: "Carrier 7" },
    { name: "Carrier 8" },
    { name: "Carrier 9" },
  ];
>>>>>>> 7f01a90170225e44dc011af390d5958235f0eb15
  return (
    <div className={classes.container}>
      <Home />
      {/* <Switch>
        <Route path="/logout">
          <HeaderModel title="Logout" />
          <Profile />
        </Route>
        <Route path="/support">
          <HeaderModel title="Onlnine Support" />
          <Profile />
        </Route>
        <Route path="/settings">
          <HeaderModel title="Settings" />
          <Profile />
        </Route>
        <Route path="/promo">
          <HeaderModel title="Apply Promo Code" />
          <Profile />
        </Route>
        <Route path="/addresses">
          <HeaderModel title="My Addresses" />
          <Profile />
        </Route>
        <Route path="/history">
          <HeaderModel title="History" />
          <Profile />
        </Route>
        <Route path="/payments">
          <HeaderModel title="Payment Methods" />
          <Profile />
        </Route>
        <Route path="/profile">
          <HeaderModel title="Profile" />
          <Profile />
        </Route>
        <Route path="/">
          
        </Route>
      </Switch> */}
    </div>
  );
};

const List = () => {
  return (
    <Router>
      <ListContent />
    </Router>
  );
};

export default List;
