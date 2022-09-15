import styled from "styled-components";
import I_noti from "../../asset/icon/I_noti.svg";
import E_icon from "../../asset/example/header/E_icon.svg";
import I_dnArw_white from "../../asset/icon/I_dnArw_white.svg";

export default function DefaultHeader() {
  return (
    <DefaultHeaderBox>
      <button className="alarmBtn" onClick={() => {}}>
        <img src={I_noti} alt="" />
      </button>

      <button className="profBtn" onClick={() => {}}>
        <div className="infoBox">
          <img className="profImg" src={E_icon} alt="" />

          <p>admin@gmail.com</p>
        </div>

        <img className="arw" src={I_dnArw_white} alt="" />
      </button>
    </DefaultHeaderBox>
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
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 30;

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
    align-items: center;
    gap: 14px;

    .infoBox {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      font-weight: 500;

      .profImg {
        height: 32px;
      }
    }

    .arw {
      width: 12px;
    }
  }
`;
