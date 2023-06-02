import { Routes, Route } from "react-router-dom";
import BasketPage from "./pages/BasketPage";
import HistoryPage from "./pages/HistoryPage";
import ShopPage from "./pages/ShopPage";
import CouponPage from "./pages/CouponPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/cart" element={<BasketPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/coupon" element={<CouponPage />} />
    </Routes>
  );
}

export default App;
