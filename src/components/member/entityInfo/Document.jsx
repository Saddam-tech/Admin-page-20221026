import { useState } from "react";
import styled from "styled-components";
import I_dnArw_white from "../../../asset/icon/I_dnArw_white.svg";
import PopupBg from "../../common/PopupBg";
import SelectPopup from "../../common/SelectPopup";
import {
  D_approveList,
  D_entityInfoCategoryList,
} from "../../../data/D_member";

export default function Document({ category, setCategory }) {
  const [certificateApprove, setCertificateApprove] = useState(
    D_approveList[0]
  );
  const [certificateApprovePopup, setCertificateApprovePopup] = useState(false);
  const [certificateReason, setCertificateReason] = useState("");
  const [dunsApprove, setDunsApprove] = useState(D_approveList[0]);
  const [dunsApprovePopup, setDunsApprovePopup] = useState(false);
  const [dunsReason, setDunsReason] = useState("");

  return (
    <DocumentBox className="editSec">
      <article className="topBar">
        <ul className="contCategoryList">
          {D_entityInfoCategoryList.map((v, i) => (
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
            <p className="key">Certificate of Incorporation</p>

            <div className={`imgBox`}></div>

            <ul className="editList">
              <li>
                <button
                  className="selBtn"
                  onClick={() => setCertificateApprovePopup(true)}
                >
                  <p>{certificateApprove}</p>
                  <img src={I_dnArw_white} alt="" />
                </button>
                {certificateApprovePopup && (
                  <>
                    <SelectPopup
                      off={setCertificateApprovePopup}
                      list={D_approveList}
                      setCont={setCertificateApprove}
                    />
                    <PopupBg off={setCertificateApprovePopup} />
                  </>
                )}
              </li>

              <li>
                <input
                  value={certificateReason}
                  onChange={(e) => setCertificateReason(e.target.value)}
                  placeholder="Please enter the reason for rejection."
                />
              </li>
            </ul>
          </li>

          <li>
            <p className="key">DUNS number</p>

            <div className={`imgBox`}></div>

            <ul className="editList">
              <li>
                <button
                  className="selBtn"
                  onClick={() => setDunsApprovePopup(true)}
                >
                  <p>{dunsApprove}</p>
                  <img src={I_dnArw_white} alt="" />
                </button>
                {dunsApprovePopup && (
                  <>
                    <SelectPopup
                      off={setDunsApprovePopup}
                      list={D_approveList}
                      setCont={setDunsApprove}
                    />
                    <PopupBg off={setDunsApprovePopup} />
                  </>
                )}
              </li>

              <li>
                <input
                  value={dunsReason}
                  onChange={(e) => setDunsReason(e.target.value)}
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
