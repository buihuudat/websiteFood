import { postsData } from "../resources/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Box, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CommentIcon from "@mui/icons-material/Comment";
import moment from "moment";
const Blog = () => {
  const posts = postsData;

  const Post = ({ post }) => (
    <Box p={3}>
      <img
        src={post?.image}
        style={{ width: 350, height: 350, objectFit: "containt" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <CalendarMonthIcon />
          <Typography>{moment(post?.createdAt).format("L")}</Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <CommentIcon />
          <Typography>{post?.countComment}</Typography>
        </Box>
      </Box>
      <Typography fontWeight={600} fontSize={20}>
        {post?.title}
      </Typography>
      <Typography>{post?.desc}</Typography>
    </Box>
  );

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {posts.map((post, i) => (
        <SwiperSlide key={i}>
          <Post post={post} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Blog;
