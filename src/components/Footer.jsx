import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Grid container spacing={2} sx={{ backgroundColor: "#555" }}>
      <Grid item xs={4}>
        <Item>
          <Typography fontWeight={600} fontSize={23}>
            ORANI
          </Typography>
          <Typography>Address: 60-49 Road 11378 New York</Typography>
          <Typography>Phone: +84 0987654321</Typography>
          <Typography>Email: buihuudat@gmail.com</Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              textAlign: "start",
              gap: 2,
              m: "auto",
            }}
          >
            <Box>
              <Typography fontWeight={600}>Useful Links</Typography>
              <Typography>About Us</Typography>
              <Typography>About Our Shop</Typography>
              <Typography>Secure Shopping</Typography>
              <Typography>Delivery infomation</Typography>
              <Typography>Private Policay</Typography>
              <Typography>Our Sitemap</Typography>
            </Box>
            <Box>
              <Typography>&nbsp;</Typography>
              <Typography>Who we are</Typography>
              <Typography>Our Services</Typography>
              <Typography>Projects</Typography>
              <Typography>Contact</Typography>
              <Typography>Innovation</Typography>
              <Typography>Testimonasls</Typography>
            </Box>
          </Box>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Typography fontWeight={600} fontSize={25}>
            Jone Out NewLetter nom
          </Typography>
          <Typography>
            Get E-mail updates anout our latest shop and special offers
          </Typography>
          <Box>
            <TextField placeholder="Enter your email" size="small" />{" "}
            <Button variant="contained">SUBCRIBE</Button>
          </Box>
          <Box>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <EmailIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <PinterestIcon />
            </IconButton>
          </Box>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Typography>
            Copyright @2023 All rights reserved | by{" "}
            <a href="https://facebook.com/1150694301">buihuudat</a>
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Footer;
