import React from "react";
import "./App.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faBook,
  faBookOpen,
  faCheckSquare,
  faChevronLeft,
  faCoffee,
  faEdit,
  faEye,
  faEyeSlash,
  faFilm,
  faLink,
  faSignInAlt,
  faSignOutAlt,
  faStar,
  faTimes,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { AppMenu } from "./components/menu/AppMenu";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faStar,
  faEdit,
  faTrash,
  faFilm,
  faBook,
  faBookOpen,
  faSignInAlt,
  faUser,
  faSignOutAlt,
  faChevronLeft,
  faBars,
  faEye,
  faEyeSlash,
  faTimes,
  faLink
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: "1rem",
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className={classes.root}>
        <AppMenu />
      </div>
    </BrowserRouter>
  );
};

export default App;
