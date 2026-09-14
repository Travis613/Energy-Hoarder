import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Sign_up from "./pages/Sign-up";
import Help from "./pages/Help";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Sign_up />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
