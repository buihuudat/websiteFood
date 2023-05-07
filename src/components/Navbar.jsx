import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useLocation, useNavigate } from "react-router-dom";
import { mainColor } from "../assets/Colors";
import { useDispatch } from "react-redux";
import { setCart } from "../redux/cartSlice";
import { navItem } from "../resources/data";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = localStorage.getItem("cart") || [];

  const [boxTop, setBoxTop] = useState(30);

  function handleScroll() {
    if (window.pageYOffset > 20) {
      setBoxTop(0);
    } else {
      setBoxTop(30);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const viewCart = () => {
    dispatch(setCart({ type: true }));
  };
  const addFavorite = () => {};

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <EmailIcon />
          buihuudat.dev@gmail.com | Free Shipping for all Order or $99
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <PinterestIcon />
          </Box>
          <Button onClick={() => navigate("login")}>
            <PersonIcon />
            <b>Login</b>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: boxTop,
          transition: "top 0 ease-in-out",
          boxShadow: boxTop ? "none" : "0 2px 4px rgba(0, 0, 0, 0.1)",
          left: 0,
          right: 0,
          zIndex: 999,
          p: 1,
          background: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItem: "center",
          }}
        >
          <Box
            component={Link}
            href="/"
            sx={{
              textDecoration: "none",
              color: mainColor,
            }}
          >
            <Typography variant="h4" fontWeight={600}>
              OGANI
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              textAlign: "center",
              gap: 3,
              alignItems: "center",
            }}
          >
            {navItem.map((item, i) => (
              <Typography
                fontWeight={600}
                key={i}
                color={item.path === pathname && mainColor}
                sx={{ cursor: "pointer" }}
                onClick={() => navigate(item.path)}
              >
                {item.tile}
              </Typography>
            ))}
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={2}
            alignItems={"center"}
          >
            <Tooltip title="cart">
              <IconButton onClick={addFavorite}>
                <Badge badgeContent={5} color="success">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="cart">
              <IconButton onClick={viewCart}>
                <Badge badgeContent={cart.length} color="success">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Typography fontWeight={400}>
              item: <b>500</b>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
