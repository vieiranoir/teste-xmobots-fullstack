import { LoginPage } from "./features/LoginPage/LoginPage.js";
import { MapPage } from "./features/MapPage/MapPage.js";
import { SignupPage } from "./features/SignupPage/SIgnupPage.js";
import GlobalStyle from "./styles/GlobalStyle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

function Root() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </>
  );
}
