import { useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/aside/NavBar";
import EventListener from "./components/common/EventListener";
import GlobalStyle from "./components/common/globalStyle";
import DefaultHeader from "./components/header/DefaultHeader";
import DashBoard from "./page/DashBoard";
import Login from "./page/Login";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <AppBox className="appBox">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <HashRouter>
        <EventListener />
        <GlobalStyle />

        {token ? (
          <>
            <NavBar />
            <DefaultHeader />

            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
          </>
        ) : (
          <Login setToken={setToken} />
        )}
      </HashRouter>
    </AppBox>
  );
}

const AppBox = styled.div`
  height: 100vh;
  padding: 80px 0 0 240px;
  color: #fff;
  background: #000;
  position: relative;
`;
