import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Search = () => {
  const open = true;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        p: 0,
        m: 0,
      }}
    >
      <List>
        <ListItemButton>
          <ListItemText primary="All Categories" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </List>
      <TextField
        variant="outlined"
        size="small"
        sx={{ borderRadius: 0, width: 350 }}
      />
      <Button variant="contained" sx={{ borderRadius: 0 }} color="success">
        SEARCH
      </Button>
    </Box>
  );
};

export default Search;
