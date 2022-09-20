import { useState } from "react";
import styled from "styled-components";

export default function ContractPopup({ off }) {
  const [symbol, setSymbol] = useState("");
  const [name, setName] = useState("");
  const [decimal, setDecimal] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  function onClickCreateBtn() {
    off();
  }

  return (
    <ContractPopupBox className="defaultPopup">
      <strong className="title">Registration Approval</strong>

      <ul className="inputList">
        <li>
          <p className="key">Project No</p>
          <div className="value fixed">
            <p>{String(222).padStart(4, "0")}</p>
          </div>
        </li>

        <li>
          <p className="key">Contract Name</p>
          <div className="value">
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </li>

        <li>
          <p className="key">Symbol</p>
          <div className="value">
            <input value={symbol} onChange={(e) => setSymbol(e.target.value)} />

            <button className="doubleChkBtn" onClick={() => {}}>
              Double check
            </button>
          </div>
        </li>

        <li>
          <p className="key">Decimals</p>
          <div className="value">
            <input
              type={"number"}
              value={decimal}
              onChange={(e) => setDecimal(e.target.value)}
            />
          </div>
        </li>

        <li>
          <p className="key">
            *An authorization number is sent to the registered phone.
          </p>
          <div className="value">
            <input
              type={"number"}
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
              placeholder="Please enter your number"
            />

            <button className="sendBtn" onClick={() => {}}>
              Send
            </button>
          </div>
        </li>
      </ul>

      <div className="btnBox">
        <button className="cancelBtn" onClick={() => off()}>
          Cancel
        </button>
        <button
          className="creationBtn"
          disabled={!(name && symbol && decimal && phoneNum)}
          onClick={onClickCreateBtn}
        >
          Creation
        </button>
      </div>
    </ContractPopupBox>
  );
}

const ContractPopupBox = styled.section`
  width: 520px;
  padding: 40px 40px 60px;

  .title {
    display: block;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }

  .inputList {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    margin: 30px 0 0;

    & > li {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 14px;

      .key {
        font-weight: 500;
      }

      .value {
        display: flex;
        align-items: center;
        height: 48px;
        border: 1px solid #ddd;
        border-radius: 10px;
        position: relative;

        &.fixed {
          background: rgba(0, 0, 0, 0.04);
        }

        p {
          padding: 0 14px;
        }

        input {
          flex: 1;
          height: 100%;
          padding: 0 14px;
        }

        .doubleChkBtn {
          margin: 0 14px 0 0;
          color: #45a7ff;
        }

        .sendBtn {
          margin: 0 14px 0 0;
          color: #ca223a;
        }
      }
    }
  }

  .btnBox {
    display: flex;
    gap: 16px;
    margin: 40px 0 0;

    button {
      flex: 1;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      background: #f1f1f1;
      border-radius: 10px;

      &.creationBtn {
        color: #fff;
        background: #ca223a;
      }
    }
  }
`;
