import { useState } from "react";
import styled from "styled-components";
import I_dnArw from "../../../asset/icon/I_dnArw.svg";
import { D_feeTypeList } from "../../../data/D_setup";
import PopupBg from "../../common/PopupBg";
import SelectPopup from "../../common/SelectPopup";
import ChkDelPopup from "./ChkDelPopup";

export default function FeeDetailPopup({ off }) {
  const [startArea, setStartArea] = useState("");
  const [startAreaPopup, setStartAreaPopup] = useState(false);
  const [endArea, setEndArea] = useState("");
  const [endAreaPopup, setEndAreaPopup] = useState(false);
  const [amount, setAmount] = useState("");
  const [chkDelPopup, setchkDelPopup] = useState(false);

  function onClickChangeBtn() {
    off();
  }

  return (
    <>
      <FeeDetailPopupBox className="defaultPopup">
        <strong className="title">Fee Details</strong>

        <ul className="inputList">
          <li>
            <p className="key">Type</p>
            <div className="value fixed">
              <p>{D_feeTypeList[0]}</p>
            </div>
          </li>

          <li>
            <p className="key">Area (tonnes)</p>
            <div className="value multiSel">
              <div className="selBox">
                <button
                  className="selBtn"
                  onClick={() => setStartAreaPopup(true)}
                >
                  <p>{startArea}</p>
                  <img src={I_dnArw} alt="" />
                </button>

                {startAreaPopup && (
                  <>
                    <SelectPopup
                      off={setStartAreaPopup}
                      list={[
                        (1).toLocaleString("eu"),
                        (11).toLocaleString("eu"),
                        (101).toLocaleString("eu"),
                        (1001).toLocaleString("eu"),
                        (10001).toLocaleString("eu"),
                        "No limit",
                      ]}
                      setCont={setStartArea}
                      dark
                    />
                    <PopupBg off={setStartAreaPopup} />
                  </>
                )}
              </div>

              <div className="selBox">
                <button
                  className="selBtn"
                  onClick={() => setEndAreaPopup(true)}
                >
                  <p>{endArea}</p>
                  <img src={I_dnArw} alt="" />
                </button>

                {endAreaPopup && (
                  <>
                    <SelectPopup
                      off={setEndAreaPopup}
                      list={[
                        (1).toLocaleString("eu"),
                        (10).toLocaleString("eu"),
                        (100).toLocaleString("eu"),
                        (1000).toLocaleString("eu"),
                        (10000).toLocaleString("eu"),
                        "No limit",
                      ]}
                      setCont={setEndArea}
                      dark
                    />
                    <PopupBg off={setEndAreaPopup} />
                  </>
                )}
              </div>
            </div>
          </li>

          <li>
            <p className="key">Amount (USD)</p>
            <div className="value">
              <input
                type={"number"}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </li>
        </ul>

        <div className="btnBox">
          <button className="delBtn" onClick={() => setchkDelPopup(true)}>
            Delete
          </button>
          <button
            className="changeBtn"
            disabled={!(startArea && endArea && amount)}
            onClick={onClickChangeBtn}
          >
            Change
          </button>
        </div>
      </FeeDetailPopupBox>

      {chkDelPopup && (
        <ChkDelPopup off={setchkDelPopup} funcDel={() => off()} />
      )}
    </>
  );
}

const FeeDetailPopupBox = styled.section`
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

        &.fixed {
          display: flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.04);

          p {
            padding: 0 14px;
          }
        }

        &.multiSel {
          display: flex;
          gap: 20px;
          border: none;
          border-radius: unset;

          .selBox {
            flex: 1;
            border: 1px solid #ddd;
            border-radius: 10px;
            position: relative;
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

      &.changeBtn {
        color: #fff;
        background: #4c96d9;
      }
    }
  }
`;