import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Hidden,
  List,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { AuthorsFilter } from "./AuthorsFilter";
import { CategoriesFilter } from "./CategoriesFilter";
import { PublicationsFilter } from "./PublicationsFilter";

interface SearchPanelProps {
  showCategoryFilter: boolean;
  showAuthorFilter: boolean;
  showPublicationFilter: boolean;
}

export const SearchPanel: React.FC<SearchPanelProps> = (props) => {
  const [expanded, setExpanded] = useState(true);

  const toggleAccordion = () => {
    setExpanded((currentValue) => !currentValue);
  };
  const classes = useStyles();

  const createFilters = () => {
    const {
      showAuthorFilter,
      showCategoryFilter,
      showPublicationFilter,
    } = props;
    return (
      <List style={{ width: "100%" }}>
        {showCategoryFilter && <CategoriesFilter />}
        {showAuthorFilter && <AuthorsFilter />}
        {showPublicationFilter && <PublicationsFilter />}
      </List>
    );
  };

  return (
    <React.Fragment>
      <Hidden mdUp>
        <Accordion expanded={expanded} onChange={toggleAccordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            id="panel1a-header"
            className={classes.accSummary}
          >
            <Typography style={{ color: "white" }}>Filters</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accDetails}>
            {createFilters()}
          </AccordionDetails>
        </Accordion>
      </Hidden>
      <Hidden smDown>
        <Accordion expanded={true} className={classes.staticAccordion}>
          <AccordionSummary id="panel1a-header" className={classes.accSummary}>
            <Typography style={{ color: "white" }}>Filters</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accDetails}>
            {createFilters()}
          </AccordionDetails>
        </Accordion>
      </Hidden>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      flexGrow: 1,
    },
    staticAccordion: {
      minHeight: 300,
    },
    accSummary: { backgroundColor: "#5f26b5", color: "white" },
    accDetails: { padding: 5 },
  })
);
