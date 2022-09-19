import { useRef, useState } from "react";
import styled from "styled-components";
import { D_approveList } from "../../../data/D_member";
import I_dnArw from "../../../asset/icon/I_dnArw.svg";
import PopupBg from "../../common/PopupBg";
import SelectPopup from "../../common/SelectPopup";

export default function UploadDocPopup({ off }) {
  const photoInputRef = useRef();

  const [photo, setPhoto] = useState("");
  const [approve, setApprove] = useState(D_approveList[0]);
  const [approvePopup, setApprovePopup] = useState(false);
  const [reason, setReason] = useState("");

  function onChangeFile(file) {
    const reader = new FileReader();

    reader.onloadend = (e) => {
      const result = e.target.result;
      setPhoto(result);
    };

    reader.readAsDataURL(file);
  }

  function onClickSaveBtn() {
    off();
  }

  return (
    <UploadDocPopupBox className="defaultPopup">
      <strong className="title">Upload Document Photos</strong>

      <ul className="inputList">
        <li className="card">
          <p className="key">ID Card</p>
          <div className="value" onClick={() => photoInputRef.current.click()}>
            {photo && <img src={photo} alt="" />}
            <input
              ref={photoInputRef}
              type={"file"}
              accept={"image/*"}
              onChange={(e) => onChangeFile(e.target.files[0])}
            />
          </div>
        </li>

        <li>
          <div className="value">
            <button className="selBtn" onClick={() => setApprovePopup(true)}>
              <p>{approve}</p>
              <img src={I_dnArw} alt="" />
            </button>
            {approvePopup && (
              <>
                <SelectPopup
                  off={setApprovePopup}
                  list={D_approveList}
                  setCont={setApprove}
                  dark
                />
                <PopupBg off={setApprovePopup} />
              </>
            )}
          </div>
        </li>

        <li>
          <div className="value">
            <input
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Please enter the reason for rejection."
            />
          </div>
        </li>
      </ul>

      <div className="btnBox">
        <button className="cancelBtn" onClick={() => off()}>
          Cancel
        </button>
        <button
          className="saveBtn"
          disabled={!(photo && approve && reason)}
          onClick={onClickSaveBtn}
        >
          Save
        </button>
      </div>
    </UploadDocPopupBox>
  );
}

const UploadDocPopupBox = styled.section`
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
    gap: 12px;
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
        height: 48px;
        border: 1px solid #ddd;
        border-radius: 10px;
        position: relative;

        .selBtn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: 0 14px;
        }

        input {
          flex: 1;
          height: 100%;
          padding: 0 14px;
        }
      }

      &.card {
        .value {
          padding: 15px 20px;
          height: 254px;
          cursor: pointer;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          input {
            width: 0;
            height: 0;
            position: absolute;
          }
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

      &.saveBtn {
        color: #fff;
        background: #4c96d9;
      }
    }
  }
`;
