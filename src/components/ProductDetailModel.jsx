import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModelSlice } from "../redux/modelSclice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ProductDetailModel() {
  const { open, data } = useSelector((state) => state.model.cart);
  const dispatch = useDispatch();
  var cart = [];
  const cartCurrent = JSON.parse(localStorage.getItem("cart")) || [];

  const handleClose = () => {
    dispatch(
      setModelSlice({
        open: false,
        data: [],
      })
    );
  };

  const addProductToCart = () => {
    cart.push(...cartCurrent, data);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(
      setModelSlice({
        open: false,
        data: [],
      })
    );
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
            <img
              src={data.image}
              title={data.title}
              style={{ width: "100%", height: "100%" }}
            />
            <Box display={"flex"} flexDirection={"column"} gap={3}>
              <Typography fontWeight={600} textAlign={"center"} fontSize={30}>
                {data.title}
              </Typography>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
                repellendus quibusdam aliquam est iusto, esse quidem amet,
                veritatis quasi saepe doloremque aspernatur numquam sit dolor at
                corporis similique nisi ea!
              </Typography>
              <Typography
                fontSize={30}
                fontWeight={600}
                color={"orange"}
                textAlign={"center"}
              >
                {data.price}
              </Typography>
              <Button
                variant="contained"
                color="success"
                onClick={addProductToCart}
              >
                <AddShoppingCartIcon />
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
