import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import I_warningTriangle_black from "../../asset/icon/I_warningTriangle_black.svg";

export default function OtpAuthPopup({ setToken, off }) {
  const navigate = useNavigate();

  const [code, setCode] = useState("");

  function onClickConfirmBtn() {
    off();
    navigate("/");
    localStorage.setItem("token", "token");
    setToken("token");
  }

  return (
    <OtpAuthPopupBox className="defaultPopup">
      <div className="titleBox">
        <img src={I_warningTriangle_black} alt="" />
        <strong className="title">OTP 인증</strong>
      </div>

      <p className="explain">OTP 코드를 입력해주세요.</p>

      <div className="inputBox">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="OTP 코드"
        />
      </div>

      <div className="btnBox">
        <button className="cancelBtn" onClick={() => off()}>
          <strong>Cancel</strong>
        </button>

        <button
          className="confirmBtn"
          disabled={!code}
          onClick={onClickConfirmBtn}
        >
          <strong>Confirm</strong>
        </button>
      </div>
    </OtpAuthPopupBox>
  );
}

const OtpAuthPopupBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 440px;
  padding: 40px;

  .titleBox {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      height: 24px;
    }

    .title {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .explain {
    font-size: 14px;
    font-weight: 500;
    color: #24282d;
  }

  .inputBox {
    display: flex;
    border: 1px solid #ddd;
    border-radius: 4px;

    &:focus-within {
      border: 1px solid #888899;
      box-shadow: 0px 2px 4px rgba(136, 136, 153, 0.3);
    }

    input {
      flex: 1;
      height: 48px;
      padding: 0 14px;
      font-size: 14px;
      font-weight: 500;
    }
  }

  .btnBox {
    display: flex;
    gap: 16px;

    button {
      flex: 1;
      height: 56px;
      border: 1px solid #ccc;
      border-radius: 4px;

      &:hover {
        background: #f1f1f1;
      }

      strong {
        font-size: 16px;
        font-weight: 700;
        color: #888899;
      }

      &.confirmBtn {
        background: #202020;
        border: none;

        &:enabled {
          &:hover {
            background: #4d4d4d;
          }
        }

        &:disabled {
          strong {
            opacity: 0.4;
          }
        }

        strong {
          color: #fff;
        }
      }
    }
  }
`;
