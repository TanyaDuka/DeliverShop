import React, { useState } from "react";
import style from "./History.module.css";
import {
  Card,
  TextField,
  Typography,
  CardContent,
  CardMedia,
} from "@mui/material";

const History = () => {
  const [emailSearchValue, setEmailSearchValue] = useState("");
  const [phoneSearchValue, setPhoneSearchValue] = useState("");
  const [orderedProducts, setOrderedProducts] = useState([]);
  const storedDataString = localStorage.getItem("order");
  const storedData = JSON.parse(storedDataString) || [];
  const totalPriceArray = storedData?.map((item) => Number(item.totalPrice));

  const handleEmailSearchChange = (event) => {
    setEmailSearchValue(event.target.value);
    const filteredData = storedData.filter(
      (obj) => obj.email === event.target.value
    );
    const orderedMeals = filteredData.map((obj) => obj.orderedMeals);
    setOrderedProducts(orderedMeals);
  };

  const handlePhoneSearchChange = (event) => {
    setPhoneSearchValue(event.target.value);
    const filteredData = storedData.filter(
      (obj) => obj.phone === event.target.value
    );
    const orderedMeals = filteredData.map((obj) => obj.orderedMeals);
    setOrderedProducts(orderedMeals);
  };

  const firstRow = orderedProducts[0]?.map((product, index) => (
    <div className={style.history_row}>
      <div key={product.id}>
        <Card className={style.card}>
          <CardMedia
            className={style.card_image}
            component="img"
            src={product.photo}
            style={{ objectFit: "contain", height: "180px" }}
          />
          <CardContent key={product.id}>
            <Typography>{product.name}</Typography>
            <Typography>${product.price}</Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        {index === orderedProducts[0].length - 1 && (
          <p>Total price: ${totalPriceArray[0]}</p>
        )}
      </div>
    </div>
  ));

  const secondRow = orderedProducts[1]?.map((product, index) => (
    <div className={style.history_row}>
      <div key={product.id}>
        <Card className={style.card}>
          <CardMedia
            className={style.card_image}
            component="img"
            src={product.photo}
            style={{ objectFit: "contain", height: "180px" }}
          />
          <CardContent key={product.id}>
            <Typography>{product.name}</Typography>
            <Typography>${product.price}</Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        {index === orderedProducts[1].length - 1 && (
          <p>Total price: ${totalPriceArray[1]}</p>
        )}
      </div>
    </div>
  ));

  const thirdRow = orderedProducts[2]?.map((product, index) => (
    <div className={style.history_row}>
      <div key={product.id}>
        <Card className={style.card}>
          <CardMedia
            className={style.card_image}
            component="img"
            src={product.photo}
            style={{ objectFit: "contain", height: "180px" }}
          />
          <CardContent key={product.id}>
            <Typography>{product.name}</Typography>
            <Typography>${product.price}</Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        {index === orderedProducts[2].length - 1 && (
          <p>Total price: ${totalPriceArray[2]}</p>
        )}
      </div>
    </div>
  ));

  const fourthRow = orderedProducts[3]?.map((product, index) => (
    <div className={style.history_row}>
      <div key={product.id}>
        <Card className={style.card}>
          <CardMedia
            className={style.card_image}
            component="img"
            src={product.photo}
            style={{ objectFit: "contain", height: "180px" }}
          />
          <CardContent key={product.id}>
            <Typography>{product.name}</Typography>
            <Typography>${product.price}</Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        {index === orderedProducts[3].length - 1 && (
          <p>Total price: ${totalPriceArray[3]}</p>
        )}
      </div>
    </div>
  ));
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.block_search}>
          <div style={{ maxWidth: "420px", width: "100%" }}>
            <TextField
              size="small"
              name="email"
              label="Email"
              fullWidth
              value={emailSearchValue}
              onChange={handleEmailSearchChange}
            />
          </div>
          <div style={{ maxWidth: "420px", width: "100%" }}>
            <TextField
              size="small"
              name="phone"
              label="Phone"
              fullWidth
              value={phoneSearchValue}
              onChange={handlePhoneSearchChange}
            />
          </div>
        </div>

        {orderedProducts.length > 0 ? (
          <div className={style.block_history}>
            <div className={style.block_history_items}>{firstRow}</div>
            <div className={style.block_history_items}>{secondRow}</div>
            <div className={style.block_history_items}>{thirdRow}</div>
            <div className={style.block_history_items}>{fourthRow}</div>
          </div>
        ) : (
          <Typography className={style.block_text}>No orders!</Typography>
        )}
      </div>
    </div>
  );
};

export default History;
