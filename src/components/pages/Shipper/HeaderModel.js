import React from "react";
import useStyles from "./ListStyles";
const HeaderModel = (props) => {
  const classes = useStyles();
  const { title } = props;
  return (
    <div className={classes.headerModelContaniner}>
      <div className={classes.headerModelIconContainer}>
        <img src={process.env.PUBLIC_URL + "icons/arrow_left.png"} className={classes.headerModelIcon} />
      </div>
      <div className={classes.headerModelTitle}>{title}</div>
      <div className={classes.headerModelIcon}></div>
    </div>
  );
};

export default HeaderModel;
