import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setModelSlice } from "../redux/modelSclice";

const ProductItem = ({ props }) => {
  const { image, title, price } = props;

  const dispatch = useDispatch();
  const viewProductDeatail = () => {
    dispatch(
      setModelSlice({
        open: true,
        data: props,
      })
    );
  };
  return (
    <Card>
      <CardActionArea onClick={viewProductDeatail}>
        <CardMedia
          image={image}
          title={title}
          sx={{ height: 200, width: 250, objectFit: "cover" }}
        />
        <CardContent>
          <Typography textAlign={"center"} fontWeight={500} fontSize={18}>
            {title}
          </Typography>
          <Typography textAlign={"center"} fontWeight={600} fontSize={25}>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductItem;
