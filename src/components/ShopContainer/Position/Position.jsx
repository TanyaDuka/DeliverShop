import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Alert,
} from "@mui/material";

const Position = ({ shop }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = (item) => {
    if (selectedItems.some((selectedItem) => selectedItem.name === item.name)) {
      setShowAlert(true);
    } else {
      setSelectedItems((prevItems) => [...prevItems, item]);
      localStorage.setItem(
        "selectedItems",
        JSON.stringify([...selectedItems, item])
      );
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
      overflow="auto"
      height={"86vh"}
      padding={"45px"}
      marginLeft={"20px"}
    >
      {showAlert && (
        <Alert
          severity="warning"
          onClose={() => setShowAlert(false)}
          style={{ position: "absolute" }}
        >
          The product has already been added to the cart
        </Alert>
      )}
      <Grid container spacing={2}>
        {shop[0].items.map((item, i) => {
          return (
            <Grid item key={i} xs={12} sm={12} md={6} lg={6}>
              <Card sx={{ borderRadius: 4 }}>
                <CardMedia
                  component="img"
                  height="250"
                  width="300"
                  style={{ objectFit: "contain" }}
                  image={item.photo}
                  alt={item.name}
                />
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography>{item.price}USD</Typography>
                  <Button
                    id={item.name}
                    onClick={() => handleAddToCart(item)}
                    variant="contained"
                    style={{
                      backgroundColor: "#4fac08",
                    }}
                    sx={{
                      marginLeft: "auto",
                      borderRadius: "15px",
                      opacity: selectedItems.some(
                        (selectedItem) => selectedItem.name === item.name
                      )
                        ? 0.5
                        : 1,
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Position;
