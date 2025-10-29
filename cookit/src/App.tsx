import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/mainPage";
import SearchPage from "./pages/searchPage";
import SelectDatePage from "./pages/selectDatePage";
import SelectTimePage from "./pages/selectTime";
import ConfirmationPage from "./pages/confirmationPage";


function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<MainPage />} />

        {/* Other pages */}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/date" element={<SelectDatePage />} />
        <Route path="/time" element={<SelectTimePage />} />
        <Route path="/confirm" element={<ConfirmationPage />} />


      </Routes>
    </Router>
  );
}

export default App;
