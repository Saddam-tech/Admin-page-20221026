import styled from "styled-components";
import I_noti from "../../asset/icon/I_noti.svg";
import E_icon from "../../asset/example/header/E_icon.svg";
import I_dnArw_white from "../../asset/icon/I_dnArw_white.svg";
import { useState } from "react";
import PopupBg from "../common/PopupBg";
import NotiPopup from "./NotiPopup";
import MenuPopup from "./MenuPopup";

export default function DefaultHeader() {
  const [notiPopup, setNotiPopup] = useState(false);
  const [menuPopup, setMenuPopup] = useState(false);

  return (
    <>
      <DefaultHeaderBox>
        <button className="alarmBtn" onClick={() => setNotiPopup(true)}>
          <img src={I_noti} alt="" />
        </button>

        <button className="profBtn" onClick={() => setMenuPopup(true)}>
          <div className="infoBox">
            <img className="profImg" src={E_icon} alt="" />

            <p>admin@gmail.com</p>
          </div>

          <img className="arw" src={I_dnArw_white} alt="" />
        </button>
      </DefaultHeaderBox>

      {notiPopup && (
        <>
          <NotiPopup off={setNotiPopup} />
          <PopupBg off={setNotiPopup} />
        </>
      )}

      {menuPopup && (
        <>
          <MenuPopup off={setMenuPopup} />
          <PopupBg off={setMenuPopup} />
        </>
      )}
    </>
  );
}

const DefaultHeaderBox = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  height: 80px;
  padding: 0 48px;
  color: #fff;
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 30;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);

  .alarmBtn {
    opacity: 0.25;

    &:hover {
      opacity: 1;
    }

    img {
      height: 32px;
    }
  }

  .profBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;

    .infoBox {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      font-weight: 500;
      overflow: hidden;

      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .profImg {
        height: 32px;
      }
    }

    .arw {
      width: 12px;
    }
  }
`;
