import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./assets/pages/NotFound";
import { Home } from "./assets/pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
