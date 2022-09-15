import { useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/aside/NavBar";
import EventListener from "./components/common/EventListener";
import GlobalStyle from "./components/common/globalStyle";
import DefaultHeader from "./components/header/DefaultHeader";
import DashBoard from "./page/DashBoard";
import Login from "./page/Login";
import Member from "./router/member/Membser";
import "react-datepicker/dist/react-datepicker.css";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <AppBox className={`${token ? "token" : ""} appBox`}>
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
              <Route path="/member/*" element={<Member />} />
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
  overflow-x: scroll;
  color: #fff;
  background: #000;
  position: relative;

  &.token {
    padding: 80px 160px 126px 240px;
  }
`;
