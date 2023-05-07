import { Swiper, SwiperSlide } from "swiper/react";

import { Grid, Autoplay } from "swiper";
import { Avatar, Box, Typography } from "@mui/material";
const ProductSwiper = ({ props, title }) => {
  const products = props;

  const ProductShow = ({ product }) => (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
      <Avatar
        src={product?.image}
        sx={{ width: 100, height: 100 }}
        variant="square"
      />
      <Box p={1}>
        <Typography pb={2} fontSize={20}>
          {product?.title}
        </Typography>
        <Typography fontSize={20} fontWeight={600}>
          {product?.price}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box width={400}>
      <Typography fontWeight={600} fontSize={32}>
        {title}
      </Typography>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        grid={{
          rows: 3,
        }}
        modules={[Grid, Autoplay]}
        className="mySwiper"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {products?.map((product, i) => (
          <SwiperSlide key={i}>
            <ProductShow product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductSwiper;
