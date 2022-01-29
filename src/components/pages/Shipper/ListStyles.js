import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  // Main
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: "25px",
    backgroundColor: "white",
    height: "100%",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "75vh",
    overflow: "auto",
  },
  // HeaderModel
  headerModelContaniner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerModelIconContainer: {
    padding: 5,
  },
  headerModelIcon: {
    width: "20px",
    height: "20px",
  },
  headerModelTitle: {
    fontSize: 22,
    fontWeight: "400",
  },
  headerModelIcon: {
    width: "20px",
  },
}));
