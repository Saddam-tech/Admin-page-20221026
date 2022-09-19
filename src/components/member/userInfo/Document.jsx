import { useState } from "react";
import styled from "styled-components";
import I_dnArw_white from "../../../asset/icon/I_dnArw_white.svg";

import E_idCard from "../../../asset/example/member/E_idCard.png";
import PopupBg from "../../common/PopupBg";
import SelectPopup from "../../common/SelectPopup";
import { D_approveList, D_userInfoCategoryList } from "../../../data/D_member";

export default function Document({ category, setCategory }) {
  const [frontApprove, setFrontApprove] = useState(D_approveList[0]);
  const [frontApprovePopup, setFrontApprovePopup] = useState(false);
  const [frontReason, setFrontReason] = useState("");
  const [backApprove, setBackApprove] = useState(D_approveList[0]);
  const [backApprovePopup, setBackApprovePopup] = useState(false);
  const [backReason, setBackReason] = useState("");
  const [selfApprove, setSelfApprove] = useState(D_approveList[0]);
  const [selfApprovePopup, setSelfApprovePopup] = useState(false);
  const [selfReason, setSelfReason] = useState("");

  return (
    <DocumentBox className="editSec">
      <article className="topBar">
        <ul className="contCategoryList">
          {D_userInfoCategoryList.map((v, i) => (
            <li
              key={i}
              className={`${category === v ? "on" : ""}`}
              onClick={() => setCategory(v)}
            >
              {v}
            </li>
          ))}
        </ul>

        <button className="saveBtn" onClick={() => {}}>
          SAVE
        </button>
      </article>

      <article className="contArea">
        <ul className="contList">
          <li>
            <p className="key">Government issued ID (Front)</p>

            <div className={`on imgBox`}>
              <img src={E_idCard} alt="" />
            </div>

            <ul className="editList">
              <li>
                <button
                  className="selBtn"
                  onClick={() => setFrontApprovePopup(true)}
                >
                  <p>{frontApprove}</p>
                  <img src={I_dnArw_white} alt="" />
                </button>
                {frontApprovePopup && (
                  <>
                    <SelectPopup
                      off={setFrontApprovePopup}
                      list={D_approveList}
                      setCont={setFrontApprove}
                    />
                    <PopupBg off={setFrontApprovePopup} />
                  </>
                )}
              </li>

              <li>
                <input
                  value={frontReason}
                  onChange={(e) => setFrontReason(e.target.value)}
                  placeholder="Please enter the reason for rejection."
                />
              </li>
            </ul>
          </li>

          <li>
            <p className="key">Government issued ID (Back)</p>

            <div className={`on imgBox`}>
              <img src={E_idCard} alt="" />
            </div>

            <ul className="editList">
              <li>
                <button
                  className="selBtn"
                  onClick={() => setBackApprovePopup(true)}
                >
                  <p>{backApprove}</p>
                  <img src={I_dnArw_white} alt="" />
                </button>
                {backApprovePopup && (
                  <>
                    <SelectPopup
                      off={setBackApprovePopup}
                      list={D_approveList}
                      setCont={setBackApprove}
                    />
                    <PopupBg off={setBackApprovePopup} />
                  </>
                )}
              </li>

              <li>
                <input
                  value={backReason}
                  onChange={(e) => setBackReason(e.target.value)}
                  placeholder="Please enter the reason for rejection."
                />
              </li>
            </ul>
          </li>

          <li>
            <p className="key">Take Selfie Photo</p>

            <div className={`imgBox`}></div>

            <ul className="editList">
              <li>
                <button
                  className="selBtn"
                  onClick={() => setSelfApprovePopup(true)}
                >
                  <p>{selfApprove}</p>
                  <img src={I_dnArw_white} alt="" />
                </button>
                {selfApprovePopup && (
                  <>
                    <SelectPopup
                      off={setSelfApprovePopup}
                      list={D_approveList}
                      setCont={setSelfApprove}
                    />
                    <PopupBg off={setSelfApprovePopup} />
                  </>
                )}
              </li>

              <li>
                <input
                  value={selfReason}
                  onChange={(e) => setSelfReason(e.target.value)}
                  placeholder="Please enter the reason for rejection."
                />
              </li>
            </ul>
          </li>
        </ul>
      </article>
    </DocumentBox>
  );
}

const DocumentBox = styled.main`
  margin: 60px 0 0;
  background: #202020;
  box-shadow: 0px 4px 14px rgba(255, 255, 255, 0.06);
  border-radius: 10px;

  .topBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 72px;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #333333;

    .contCategoryList {
      display: flex;
      gap: 10px;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 44px;
        padding: 0 25px;
        border: 1px solid #333;
        border-radius: 10px;
        cursor: pointer;

        &.on {
          color: #333;
          background: #fff;
        }
      }
    }

    .saveBtn {
      width: 200px;
      height: 44px;
      background: #4c96d9;
      border-radius: 10px;
    }
  }

  .contArea {
    display: flex;
    justify-content: center;
    padding: 34px 0 46px;

    .contList {
      display: flex;
      gap: 100px;

      & > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 384px;

        .key {
          font-size: 16px;
          font-weight: 500;
        }

        .imgBox {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 240px;
          padding: 15px 20px;
          margin: 18px 0 0;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;

          &.on {
            border: unset;
            background: #fff;
          }
        }

        .editList {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          margin: 24px 0 0;

          & > li {
            height: 38px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 6px;
            position: relative;

            &:focus-within {
              background: rgba(255, 255, 255, 0.06);
            }

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
        }
      }
    }
  }
`;
