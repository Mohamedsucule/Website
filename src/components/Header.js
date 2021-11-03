import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer"

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "White",
  },
  subtitle: {
    color: "white",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <><div>
      <Box className={classes.typedContainer}>

        <Typography className={classes.title} variant="h4">
          <Typed strings={["Mohamed Sucule!"]} typeSpeed={40} />
        </Typography>

        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Frontend Developer",
              "React Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop />
        </Typography>
      </Box>
    </div><Footer /></>

  );
};

export default Header;
