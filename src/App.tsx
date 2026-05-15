import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./app/layouts/Layout";

import s from "./App.module.scss";

import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
