import MenuSelection from "../components/MenuSelection";
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Search from "../components/Search";
import CallIcon from "@mui/icons-material/Call";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import { mainColor } from "../assets/Colors";
import { banner } from "../resources/images";
import { dataSwiper, productsData } from "../resources/data";
import ProductSwiper from "../components/ProductSwiper";
import Blog from "../components/Blog";
import FreaturedProduct from "../components/FreaturedProduct";

const HomePage = () => {
  const data = productsData;
  return (
    <Container>
      {/* top */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "start",
        }}
      >
        <MenuSelection />
        <Box>
          <Box display={"flex"} flexDirection={"row"} gap={5}>
            <Search />
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={1}
            >
              <IconButton size="large" href={"tel:0987651053"}>
                <CallIcon fontSize="lagre" color="success" />
              </IconButton>
              <Box>
                <Typography fontWeight={600}>+84 987.651.053</Typography>
                <Typography fontSize={15}>support 24/7 time</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              background: `url(${banner})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              width: "auto",
              height: 500,
            }}
          >
            <Box sx={{ p: 5 }}>
              <Typography
                color={mainColor}
                fontWeight={600}
                fontSize={30}
                sx={{
                  letterSpacing: 3,
                }}
              >
                FRUIT FRESH
              </Typography>
              <Typography fontWeight={600} fontSize={45} pt={3} pb={4}>
                Vegetable <br />
                100% Organic
              </Typography>
              <Typography fontWeight={200}>
                Free Pickup and Delivery Available
              </Typography>
              <Button
                color="success"
                variant="contained"
                sx={{ fontWeight: 600, mt: 5 }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* prroduct swiper */}
      <Box pt={5} pb={5}>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          loop={true}
        >
          {dataSwiper.map((data, i) => (
            <SwiperSlide key={i}>
              <Paper
                sx={{
                  background: `url(${data.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  height: 200,
                  width: 170,
                  mt: "auto",
                  p: 3,
                  display: "flex",
                }}
              >
                <Button
                  sx={{ mt: "auto" }}
                  variant="contained"
                  color="success"
                  fullWidth
                >
                  {data.title}
                </Button>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* freature */}
      <FreaturedProduct />

      {/* banner 2 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          p: 5,
        }}
      >
        <Paper
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "column",
            p: 3,
            width: 450,
          }}
        >
          <Typography fontWeight={600} fontSize={32}>
            Summer Fruit
          </Typography>
          <Typography>100% Pure Natural Fruit Juice</Typography>
          <Button variant="contained">SHOP NOW</Button>
        </Paper>
        <Paper
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "column",
            p: 3,
            width: 450,
          }}
        >
          <Typography fontWeight={600} fontSize={32}>
            Dried $& Drink Fruits
          </Typography>
          <Typography>With 25% Off All Teas</Typography>
          <Button variant="contained">SHOP NOW</Button>
        </Paper>
      </Box>

      {/* products swiper */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: 300,
        }}
      >
        <ProductSwiper props={data} title="Latest Products" />
        <ProductSwiper props={data} title="Top Rared Products" />
        <ProductSwiper props={data} title="Review Products" />
      </Box>
      {/* posts */}
      <Blog />
    </Container>
  );
};

export default HomePage;
