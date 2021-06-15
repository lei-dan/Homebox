import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import { mainListItems, secondaryListItems } from "./items";
import { getListIcon } from "./items-utils";

export const ListItems = ({ item }) => (
  <Link key={item.text} to={item.link}>
    <ListItem button>
      <ListItemIcon>{getListIcon(item.text)}</ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItem>
  </Link>
);

export const MainListItems = (
  <Fragment>
    {mainListItems.map((item) => (
      <ListItems item={item} key={item.text} />
    ))}
  </Fragment>
);

export const SecondaryListItems = (
  <Fragment>
    <ListSubheader inset>Settings</ListSubheader>

    {secondaryListItems.map((item) => (
      <ListItems item={item} key={item.text} />
    ))}
  </Fragment>
);
