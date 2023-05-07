import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { mainColor } from "../assets/Colors";
import { menuItems } from "../resources/data";

export default function MenuSelection() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 250,
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListItemButton
          onClick={handleClick}
          sx={{
            background: mainColor,
            color: "white",
            ":hover": { background: mainColor },
          }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText
            primary="All deppartments"
            sx={{ fontWeight: 600, fontSize: 26 }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      }
    >
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menuItems.map((item) => (
            <ListItemButton sx={{ p: 0.5, pl: 5 }} key={item.name}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
