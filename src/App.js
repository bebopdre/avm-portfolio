import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/avm-portfolio" element={<HomePage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
