import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {
  Avatar,
  Button,
  IconButton,
  List,
  Tooltip,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { mainColor } from "../assets/Colors";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../redux/cartSlice";
import { useReducer } from "react";

export default function Cart() {
  const open = useSelector((state) => state.cart.type).type;
  const dispatch = useDispatch();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const handleClose = () => {
    dispatch(setCart({ type: false }));
  };
  const price = cart.reduce((total, item) => total + parseInt(item.price, 0));
  const list = (data) => (
    <Box
      sx={{
        width: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      role="presentation"
    >
      <Box
        sx={{ display: "flex" }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Tooltip title={"close"} color={mainColor}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
        <Typography>Count({data.length})</Typography>
      </Box>
      <Box sx={{ height: 800, overflow: "auto" }}>
        {data?.map((product, i) => (
          <List key={i}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 3,
                alignItems: "center",
              }}
            >
              <Avatar
                variant="square"
                src={product.image}
                sx={{ width: 80, height: 80 }}
              />
              <Box>
                <Typography fontWeight={600}>{product.title}</Typography>
                <Typography>{product.price}</Typography>
              </Box>
            </Box>
          </List>
        ))}
      </Box>
      <Box sx={{ mt: "auto" }}>
        <Typography>Pay: </Typography>
        <Button color="success" variant="contained" fullWidth>
          Pay now
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        {cart.length > 0 ? (
          list(cart)
        ) : (
          <Typography>Chưa có sản phẩm</Typography>
        )}
      </Drawer>
    </div>
  );
}
