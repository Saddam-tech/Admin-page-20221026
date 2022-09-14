import { useState } from "react";
import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import EventListener from "./components/common/EventListener";
import GlobalStyle from "./components/common/globalStyle";
import DashBoard from "./page/DashBoard";
import Login from "./page/Login";

export default function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    setToken(localStorage.getItem("token"));
  }, [localStorage.getItem("token")]);

  useEffect(() => {
    console.log(localStorage.getItem("token"));
  }, [localStorage.getItem("token")]);

  return (
    <AppBox className="appBox">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap"
        rel="stylesheet"
      />

      <HashRouter>
        <EventListener />
        <GlobalStyle />

        {token ? (
          <Routes>
            <Route path="/" element={<DashBoard />} />
          </Routes>
        ) : (
          <Login />
        )}
      </HashRouter>
    </AppBox>
  );
}

const AppBox = styled.div`
  height: 100vh;
  background: #000;
`;
