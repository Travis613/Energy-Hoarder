import { Route, Routes } from "react-router-dom";

import Home from "./components/custom/pages/Home";
import Login from "./components/custom/pages/Login";
import Sign_up from "./components/custom/pages/Sign-up";
import Help from "./components/custom/pages/Help";

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
