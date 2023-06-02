import React, { useState } from "react";
import { Typography, TextField, Button, Alert } from "@mui/material";
import style from "./Basket.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { mockCoupon } from "../Coupon/Coupon";

const Basket = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [dataErrors, setDataErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const selectedProducts = localStorage.getItem("selectedItems");
  const parsedSelectedProducts = JSON.parse(selectedProducts);
  const [products, setProducts] = useState(parsedSelectedProducts);
  const [couponCode, setCouponCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const validateChangeForm = (name, value) => {
    let errors = { ...dataErrors };
    switch (name) {
      case "name":
        errors.name = isValidData(value);
        break;
      case "email":
        errors.email = isValidEmail(value);
        break;
      case "phone":
        errors.phone = isValidData(value);
        break;
      case "address":
        errors.address = isValidData(value);
        break;
      default:
        break;
    }
    setDataErrors(errors);
  };

  function isValidEmail(value) {
    if (!value) {
      return "Enter Email";
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      return "Email is not valid";
    }
  }

  function isValidData(value) {
    if (!value) {
      return "Enter data";
    }
  }

  const changeDataHandler = (event) => {
    setDataForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
      orderedMeals: products,
      totalPrice: calculateTotalSum(),
    }));

    validateChangeForm(event.target.name, event.target.value);
  };

  const submitChangeHandler = (e) => {
    e.preventDefault();
    if (dataForm.name && dataForm.phone && dataForm.email && dataForm.address) {
      const existingData = JSON.parse(localStorage.getItem("order")) || [];
      existingData.push(dataForm);
      localStorage.setItem("order", JSON.stringify(existingData));
      setDataForm({
        name: "",
        phone: "",
        email: "",
        address: "",
      });
      setProducts([]);
      localStorage.removeItem("selectedItems");
    } else if (!dataForm.name) {
      validateChangeForm("name", null);
    } else if (!dataForm.email) {
      validateChangeForm("email", null);
    } else if (!dataForm.phone) {
      validateChangeForm("phone", null);
    } else if (!dataForm.address) {
      validateChangeForm("address", null);
    }
  };

  const handleIncrement = (productId) => {
    const updatedProducts = products.filter((product) =>
      product.id === productId ? (product.quantity += 1) : product.quantity
    );
    setProducts(updatedProducts);
  };

  const handleDecrement = (productId) => {
    const updatedProducts = products.filter((product) =>
      product.id === productId && product.quantity > 1
        ? (product.quantity -= 1)
        : product.quantity
    );
    setProducts(updatedProducts);
  };

  const handleRemoveProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    const updatedLocalStorageProducts = JSON.stringify(updatedProducts);
    localStorage.setItem("selectedItems", updatedLocalStorageProducts);
  };

  const couponHandler = (event) => {
    setCouponCode(event.target.value);
  };

  const applyCoupon = () => {
    const appliedCoupon = mockCoupon.find(
      (coupon) => coupon.code === couponCode
    );

    if (appliedCoupon) {
      const discount = -(parseFloat(appliedCoupon.discount) / 100);
      setDiscountAmount(discount);
      setCouponCode("");
    } else {
      setShowAlert(true);
    }
  };

  const calculateTotalSum = () => {
    let totalSum = 0;
    products?.forEach((product) => {
      const quantity = product.quantity;
      const price = product.price;
      totalSum += quantity * price;
    });
    if (discountAmount > 0) {
      const discountedSum = totalSum - totalSum * discountAmount;
      return discountedSum.toFixed(2);
    } else {
      return totalSum.toFixed(2);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.block_info}>
          <div className={style.block_data}>
            <div>
              <TextField
                name="name"
                size="small"
                value={dataForm.name}
                onChange={changeDataHandler}
                variant="filled"
                label="Name"
                fullWidth
              />
              {dataErrors.name && (
                <div className={style.error_message}>{dataErrors.name}</div>
              )}
            </div>
            <div>
              <TextField
                name="email"
                size="small"
                value={dataForm.email}
                onChange={changeDataHandler}
                variant="filled"
                label="Email"
                fullWidth
              />
              {dataErrors.email && (
                <div className={style.error_message}>{dataErrors.email}</div>
              )}
            </div>
            <div>
              <TextField
                name="phone"
                size="small"
                value={dataForm.phone}
                onChange={changeDataHandler}
                variant="filled"
                label="Phone"
                fullWidth
              />
              {dataErrors.phone && (
                <div className={style.error_message}>{dataErrors.phone}</div>
              )}
            </div>
            <div>
              <TextField
                name="address"
                size="small"
                value={dataForm.address}
                onChange={changeDataHandler}
                variant="filled"
                label="Address"
                fullWidth
              />
              {dataErrors.address && (
                <div className={style.error_message}>{dataErrors.address}</div>
              )}
            </div>
          </div>
        </div>

        <div className={style.block_items}>
          {products?.length > 0 ? (
            <>
              <ProductCard
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleRemoveProduct={handleRemoveProduct}
                data={products}
              />
              <div className={style.block_coupon}>
                {showAlert && (
                  <Alert
                    severity="warning"
                    onClose={() => setShowAlert(false)}
                    className={style.alert}
                  >
                    Invalid coupon code
                  </Alert>
                )}
                <TextField
                  style={{ width: "150px" }}
                  size="small"
                  name="coupon"
                  value={couponCode}
                  onChange={couponHandler}
                  label="Coupon code"
                  variant="outlined"
                />
                <Button
                  size="small"
                  variant="outlined"
                  onClick={applyCoupon}
                  style={{ backgroundColor: "#4fac08", color: "#fff" }}
                >
                  Apply
                </Button>
              </div>
            </>
          ) : (
            <Typography className={style.block_text}>Cart is empty!</Typography>
          )}
        </div>
      </div>
      <div className={style.block_btn}>
        <Typography variant="h6">
          <b>Total price: ${calculateTotalSum()}</b>
        </Typography>
        <Button
          type="submit"
          onClick={submitChangeHandler}
          variant="contained"
          style={{
            backgroundColor: "#4fac08",
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Basket;
