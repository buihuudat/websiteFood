import { Box, LinearProgress } from "@mui/material";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import ProductDetailModel from "../components/ProductDetailModel";

const AppLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  return isLoading ? (
    <LinearProgress />
  ) : (
    <div>
      <Navbar />
      <Box pt={8} pb={3}>
        <Outlet />
        <Cart />
        <ProductDetailModel />
      </Box>
      <Footer />
    </div>
  );
};

export default AppLayout;
