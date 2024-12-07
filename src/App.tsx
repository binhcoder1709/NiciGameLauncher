import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Discover from "./pages/Discover";
import Library from "./pages/Library";
import Browse from "./pages/Browse";
import News from "./pages/News";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Discover />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/news" element={<News />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/library" element={<Library />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}
