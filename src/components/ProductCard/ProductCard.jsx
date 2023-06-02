import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import style from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <>
      {props.data.map((product) => (
        <React.Fragment key={product.id}>
          <Card className={style.card}>
            <CardMedia
              className={style.card_image}
              component="img"
              src={product.photo}
              style={{ objectFit: "contain", height: "180px" }}
            />
            <CardContent style={{ textAlign: "center" }}>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">
                <b>Price: ${product.price}</b>
              </Typography>
              <div className={style.card_quantity}>
                <Button
                  style={{
                    minWidth: "45px",
                    backgroundColor: "#4fac08",
                  }}
                  size="small"
                  variant="contained"
                  onClick={() => props.handleDecrement(product.id)}
                >
                  -
                </Button>
                <TextField
                  style={{ width: "80px" }}
                  size="small"
                  value={product.quantity}
                />
                <Button
                  style={{
                    minWidth: "45px",
                    backgroundColor: "#4fac08",
                  }}
                  size="small"
                  variant="contained"
                  onClick={() => props.handleIncrement(product.id)}
                >
                  +
                </Button>
              </div>
              <IconButton
                className={style.card_delete}
                size="small"
                onClick={() => props.handleRemoveProduct(product.id)}
              >
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </Card>
        </React.Fragment>
      ))}
    </>
  );
};

export default ProductCard;
