import { useState } from "react";
import style from "./ShopContainer.module.css";
import Store from "./Store/Store";
import mockGoods from "../../goods";
import Position from "./Position/Position";

const ShopContainer = () => {
  const [selectStore, setSelectStore] = useState("");

  const handleClick = (id) => {
    setSelectStore(id);
  };

  return (
    <div className={style.shop_block}>
      <Store mochItems={mockGoods} handleClick={handleClick} />
      {selectStore ? (
        <Position
          shop={mockGoods.filter((mochItem) => mochItem.shop === selectStore)}
        />
      ) : (
        <h1 className={style.shop_block_text}>Choose a store!</h1>
      )}
    </div>
  );
};

export default ShopContainer;
