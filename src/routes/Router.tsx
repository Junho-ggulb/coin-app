import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/:coinId/*" element={<Coin></Coin>}></Route>
        <Route path="/" element={<Coins></Coins>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
