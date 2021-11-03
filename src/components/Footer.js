import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import { Email, GitHub, LinkedIn } from "@material-ui/icons";
import Link from "react"

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "Transparent",
    height: 900,
    
  },
  root: {
    "& .MuiSvgIcon-root": {
    
      fill: "white",
      "&:hover": {
        fill: "Tomato",
        fontSize: "8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction href = "https://github.com/Mohamedsucule" icon={<GitHub  />}  className={classes.root} />
      <BottomNavigationAction href = "https://www.linkedin.com/in/mohamed-sucule-672350195/" icon={<LinkedIn />} className={classes.root} />
      <BottomNavigationAction href= "mailto:mohamedsucule@outlook.com"  icon={<Email />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
