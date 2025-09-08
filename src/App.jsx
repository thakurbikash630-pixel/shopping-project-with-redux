import HomePage from "./Components/Pages/HomePage/homepage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./Components/Pages/CartPage/cartpage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
