import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

export const mockCoupon = [
  {
    photo:
      "https://rover-it.me/upload/iblock/eb6/eb66f7373da94469d2a1bc3f4b1a7e18.png",
    code: "74D58l",
    discount: "-10%",
  },
  {
    photo:
      "https://rover-it.me/upload/iblock/eb6/eb66f7373da94469d2a1bc3f4b1a7e18.png",
    code: "99D58l",
    discount: "-50%",
  },
  {
    photo:
      "https://rover-it.me/upload/iblock/eb6/eb66f7373da94469d2a1bc3f4b1a7e18.png",
    code: "85dsdl",
    discount: "-100%",
  },
  {
    photo:
      "https://rover-it.me/upload/iblock/eb6/eb66f7373da94469d2a1bc3f4b1a7e18.png",
    code: "74D58l",
    discount: "-5%",
  },
  {
    photo:
      "https://rover-it.me/upload/iblock/eb6/eb66f7373da94469d2a1bc3f4b1a7e18.png",
    code: "99D58l",
    discount: "-15%",
  },
  {
    photo:
      "https://rover-it.me/upload/iblock/eb6/eb66f7373da94469d2a1bc3f4b1a7e18.png",
    code: "85dsdl",
    discount: "-30%",
  },
];

const Coupon = () => {
  const handleCopyClick = (discount) => {
    navigator.clipboard.writeText(discount);
    console.log(`Copied: ${discount}`);
  };
  return (
    <div style={{ width: "80%", margin: "60px auto" }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={2}
        // borderRadius={8}
        // border={1}
        boxShadow={"0px 1px 4px rgb(195, 195, 195)"}
        overflow="auto"
        height={"86vh"}
        padding={"45px"}
      >
        <Grid container spacing={3}>
          {mockCoupon.map((item) => {
            // console.log(item);
            return (
              <Grid item key={item.code} xs={12} sm={12} md={6} lg={4}>
                <Card sx={{ borderRadius: 4 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    width="150"
                    image={item.photo}
                    alt={item.discount}
                    style={{ objectFit: "cover" }}
                  />
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Typography variant="h4" gutterBottom>
                      {item.discount}:
                    </Typography>

                    <Button
                      id={item.name}
                      onClick={() => handleCopyClick(item.code)}
                      variant="contained"
                      sx={{
                        marginLeft: "auto",
                        borderRadius: "15px",
                      }}
                      style={{
                        backgroundColor: "#4fac08",
                      }}
                    >
                      Copy
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Coupon;
