import { useState } from "react";
import styled from "styled-components";

export default function RejectPopup({ off }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [reason, setReason] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  function onClickApproveBtn() {
    off();
  }

  return (
    <RejectPopupBox className="defaultPopup">
      <strong className="title">Registration Reject</strong>

      <ul className="inputList">
        <li>
          <p className="key">Member Name</p>
          <div className="value">
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </li>

        <li>
          <p className="key">CER quantity</p>
          <div className="value">
            <input
              type={"number"}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </li>

        <li>
          <p className="key">Reason</p>
          <div className="value">
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="사유를 입력해주세요."
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
          className="approveBtn"
          disabled={!(name && quantity && reason && phoneNum)}
          onClick={onClickApproveBtn}
        >
          Approve
        </button>
      </div>
    </RejectPopupBox>
  );
}

const RejectPopupBox = styled.section`
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
        overflow: hidden;

        &.fixed {
          background: rgba(0, 0, 0, 0.04);
        }

        &:has(textarea) {
          height: 100px;
        }

        p {
          padding: 0 14px;
        }

        input {
          flex: 1;
          height: 100%;
          padding: 0 14px;
        }

        textarea {
          flex: 1;
          height: 100%;
          padding: 14px;
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

      &.approveBtn {
        color: #fff;
        background: #4c96d9;
      }
    }
  }
`;
