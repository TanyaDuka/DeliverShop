import { Button, Box } from "@mui/material";
import React, { useState } from "react";

const Store = ({ mochItems, handleClick }) => {
  const [selectedShop, setSelectedShop] = useState(null);

  const handleShopClick = (shopId) => {
    setSelectedShop(shopId);
    handleClick(shopId);
  };

  const handleResetClick = () => {
    setSelectedShop(null);
    handleClick(null);
    localStorage.setItem("selectedItems", JSON.stringify([]));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
      boxShadow={"0px 1px 4px rgb(195, 195, 195)"}
      padding={[0, "50px"]}
      height={"86vh"}
    >
      <h3>Shops:</h3>
      {mochItems.map((item) => (
        <Button
          key={item.shop}
          id={item.shop}
          onClick={() => handleShopClick(item.shop)}
          variant="contained"
          style={{
            width: "160px",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "8px",
            borderRadius: "8px",
            padding: "10px 25px",
            backgroundColor:
              selectedShop === item.shop ? "rgb(153 247 82)" : "#FFF",
            border: "1px solid black",
            color: "inherit",
          }}
          disabled={selectedShop && selectedShop !== item.shop}
        >
          {item.shop}
        </Button>
      ))}
      <Button
        onClick={handleResetClick}
        variant="contained"
        style={{
          width: "160px",
          marginBottom: "8px",
          borderRadius: "8px",
          padding: "10px 30px",
          backgroundColor: "#4fac08",
          color: "white",
          border: "none",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        RESET
      </Button>
    </Box>
  );
};

export default Store;
