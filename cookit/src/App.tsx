import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/mainPage";
import SelectDatePage from "./pages/detailsPage";
import CheckoutPage from "./pages/checkoutPage";
import ConfirmationPage from "./pages/confirmationPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<MainPage />} />

        {/* Experience details page */}
        <Route path="/experience/:id" element={<SelectDatePage />} />

        {/* Other pages */}
        <Route path="/date" element={<SelectDatePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirm" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
