import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  chip: {
    margin: "5px 5px 5px 0",
  },

  subtitles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
    marginBottom: "12px",
  },

  spacing: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  locationIcon: {
    marginRight: "16px",
  },

  address: {
    width: "100%",
    textAlign: "right",
  },
}));
