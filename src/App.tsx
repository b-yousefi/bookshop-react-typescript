import React from "react";
import "./App.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
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

import { Container } from "@material-ui/core";

import { AppMenu } from "./components/menu/AppMenu";
import { HomePage } from "./routes/Home";
import { AboutPage } from "./routes/About";
import { AddressListPage } from "./routes/AddressList";
import { AuthorListPage } from "./routes/AuthorList";
import { BookContentPage } from "./routes/BookContent";
import { CategoryListPage } from "./routes/CategoryList";
import { LoginForm } from "./routes/LoginForm";
import { OrderPage } from "./routes/Order";
import { UserFormPage } from "./routes/UserForm";
import { PublicationListPage } from "./routes/PublicationList";
import { UserProfilePage } from "./routes/UserProfile";

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
        <Container style={{ marginTop: 24 }} maxWidth={false}>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/books" component={HomePage} />
          <Route path="/books/:id" component={BookContentPage} />
          <Route path="/authors" component={AuthorListPage} />
          <Route path="/publications" component={PublicationListPage} />
          <Route path="/user" component={UserFormPage} exact={true} />
          <Route path="/categories/:id" component={CategoryListPage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/order" component={OrderPage} exact={true} />
          <Route path="/addresses" component={AddressListPage} />
          <Route path="/user_info" component={UserProfilePage} />
          <Route path="/about" component={AboutPage} />
          <Route exact={true} path="/register" component={UserFormPage} />
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
