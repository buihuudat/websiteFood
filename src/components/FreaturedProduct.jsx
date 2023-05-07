import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { featureItem, productsData } from "../resources/data";
import ProductItem from "./ProductItem";
import { Pagination } from "@mui/material";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ minHeight: 650 }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FreaturedProduct() {
  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState(productsData);
  const [currentPage, setCurrentPage] = React.useState(0);

  const handlePageChange = (even, value) => {
    setCurrentPage(value - 1);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    setData(
      value ? productsData.filter((s) => s.category == value) : productsData
    );
  }, [value]);

  const itemsPerPage = 8;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = (currentPage + 1) * itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography textAlign={"center"} fontWeight={600} fontSize={40}>
        Featured Product
      </Typography>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {featureItem.map((item) => (
            <Tab
              key={item.value}
              label={item.label}
              {...a11yProps(item.value)}
            />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={value}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {currentData.map((item, i) => (
            <ProductItem props={item} key={i} />
          ))}
        </Box>
      </TabPanel>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {data.length > 10 && (
          <Pagination
            sx={{ m: "auto" }}
            count={Math.ceil(data.length / itemsPerPage)}
            onChange={handlePageChange}
            variant="contained"
            color="primary"
          />
        )}
      </Box>
    </Box>
  );
}
