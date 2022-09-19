import { forwardRef, useState } from "react";
import styled from "styled-components";
import I_calanderWhite from "../../../asset/icon/I_calanderWhite.svg";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import { D_reqInfoDetCategoryList } from "../../../data/D_cer";
import Reject from "./Reject";

export default function ReqInfo() {
  const [addDate, setAddDate] = useState(new Date());
  const [listDate, setListDate] = useState(new Date());
  const [category, setCategory] = useState(D_reqInfoDetCategoryList[0]);

  return (
    <ReqInfoBox>
      <section className="infoSec">
        <article className="infoArea">
          <ul className="inputList">
            <li className="rightBorder">
              <div className="key">Request date</div>
              <div className="value">
                <p className="text">{moment().format("YYYY.MM.DD HH:mm:SS")}</p>
              </div>
            </li>

            <li>
              <div className="key">Status</div>
              <div className="value">
                <p className="text">Waiting</p>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Member ID</div>
              <div className="value">
                <p className="text colorBlue underLine">
                  evil@gmail.com (Member ID : 00012)
                </p>
              </div>
            </li>

            <li>
              <div className="key">Member Name</div>
              <div className="value">
                <p className="text">Horizen lnc.</p>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Project No</div>
              <div className="value">
                <p className="text">{String(222).padStart(4, "0")}</p>
              </div>
            </li>

            <li>
              <div className="key">CER Type</div>
              <div className="value">
                <p className="text">CER</p>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">CER quantity</div>
              <div className="value">
                <p className="value">{(100000).toLocaleString("eu", "US")}</p>
              </div>
            </li>

            <li>
              <div className="key">Accept the terms</div>
              <div className="value">
                <p className="text">YES</p>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Approved date</div>
              <div className="value">
                <div className="btnBox">
                  <button className="approveBtn" onClick={() => {}}>
                    Approve
                  </button>
                  <button className="rejectBtn" onClick={() => {}}>
                    Reject
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="key">Approval manager</div>
              <div className="value">
                <p className="text"></p>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Created date</div>
              <div className="value">
                <div className="btnBox">
                  <button className="contractBtn" onClick={() => {}}>
                    Smart contract
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="key">Creation manager</div>
              <div className="value">
                <p className="text"></p>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Added date</div>
              <div className="value">
                <ReactDatePicker
                  selected={addDate}
                  onChange={(date) => setAddDate(date)}
                  customInput={<CustomInput />}
                />
              </div>
            </li>

            <li>
              <div className="key">Add manager</div>
              <div className="value">
                <p className="text">evil@gmail.com</p>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Listed date</div>
              <div className="value">
                <ReactDatePicker
                  selected={listDate}
                  onChange={(date) => setListDate(date)}
                  customInput={<CustomInput />}
                />
              </div>
            </li>

            <li>
              <div className="key">Listing manager</div>
              <div className="value">
                <p className="text"></p>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Minted date</div>
              <div className="value">
                <div className="btnBox">
                  <button className="mintBtn" onClick={() => {}}>
                    Minting
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="key">Minting manager</div>
              <div className="value">
                <p className="text"></p>
              </div>
            </li>
          </ul>
        </article>
      </section>

      {category === "Reject" && (
        <Reject category={category} setCategory={setCategory} />
      )}
    </ReqInfoBox>
  );
}

const ReqInfoBox = styled.main`
  .contTitle {
    font-size: 16px;
    font-weight: 600;
  }

  .infoSec {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin: 30px 0 0;

    .infoArea {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 30px;
      background: #202020;
      box-shadow: 0px 4px 14px rgba(255, 255, 255, 0.06);
      border-radius: 10px;

      .inputList {
        display: flex;
        flex-wrap: wrap;
        font-size: 16px;
        border-top: 1px solid #333;

        & > li {
          display: flex;
          width: 710px;
          height: 50px;
          border-bottom: 1px solid #333;

          &.rightBorder {
            border-right: 1px solid #333;
          }

          .key {
            display: flex;
            align-items: center;
            min-width: 250px;
            width: 250px;
            height: 100%;
            padding: 0 20px;
            background: #191919;
            border-right: 1px solid #333;
          }

          .value {
            flex: 1;
            display: flex;
            position: relative;
            padding: 6px 10px;

            .text {
              flex: 1;
              display: flex;
              align-items: center;
              padding: 0 10px;
              height: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            .colorBlue {
              color: #45a7ff;
            }

            .underLine {
              text-decoration: underline;
            }

            .textInput {
              flex: 1;
              padding: 0 10px;
              height: 100%;

              &:focus-within {
                background: rgba(255, 255, 255, 0.06);
              }
            }

            .selCont {
              flex: 1;
              width: 100%;
              height: 100%;
              position: relative;

              .selBtn {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 100%;
                padding: 0 10px;

                &:focus-within {
                  background: rgba(255, 255, 255, 0.06);
                }
              }
            }

            .customInput {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              height: 38px;
              padding: 0 10px;
              background: rgba(255, 255, 255, 0.06);
              opacity: 0.25;

              &:hover,
              &:focus-within {
                opacity: 1;
              }

              img {
                width: 18px;
              }
            }

            .btnBox {
              flex: 1;
              display: flex;
              justify-content: flex-end;
              gap: 8px;

              button {
                height: 34px;
                padding: 0 10px;
                background: rgba(255, 255, 255, 0.06);
                border-radius: 6px;

                &.rejectBtn {
                  color: #ca223a;
                }
              }
            }
          }

          &.unityRow {
            width: 1420px;

            .value {
              overflow: hidden;

              .valueList {
                display: flex;
                gap: 10px;
                overflow-x: scroll;

                li {
                  display: flex;
                  align-items: center;
                  min-width: 212px;
                  width: 212px;
                  height: 100%;
                  padding: 0 10px;
                  background: rgba(255, 255, 255, 0.06);
                  border-radius: 6px;

                  &.large {
                    min-width: 434px;
                    width: 434px;
                  }
                }
              }

              .processList {
                display: flex;
                align-items: center;
                gap: 34px;

                li {
                  display: flex;
                  align-items: center;
                  gap: 10px;

                  .process {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 16px;
                    height: 16px;
                    background: #fff;
                    border: 1px solid #d1d5db;
                    border-radius: 4px;

                    img {
                      height: 6px;

                      &.white {
                        display: none;
                      }

                      &.gray {
                        display: block;
                      }
                    }

                    &.on {
                      border: unset;
                      background: #39d247;

                      img {
                        &.white {
                          display: block;
                        }

                        &.gray {
                          display: none;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button className="customInput" onClick={onClick} ref={ref}>
    <p>{moment(value).format("YYYY-MM-DD")}</p>

    <img src={I_calanderWhite} alt="" />
  </button>
));
