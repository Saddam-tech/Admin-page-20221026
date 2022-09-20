import { forwardRef, useState } from "react";
import styled from "styled-components";
import I_calanderWhite from "../../../asset/icon/I_calanderWhite.svg";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import { D_reqInfoDetCategoryList } from "../../../data/D_cer";
import Reject from "./Reject";
import PopupBg from "../../common/PopupBg";
import ApprovePopup from "./ApprovePopup";
import RejectPopup from "./RejectPopup";
import ContractPopup from "./ContractPopup";
import MintingPopup from "./MintingPopup";

export default function BasicInfo() {
  const [addDate, setAddDate] = useState(new Date());
  const [listDate, setListDate] = useState(new Date());
  const [category, setCategory] = useState(D_reqInfoDetCategoryList[0]);
  const [approvePopup, setApprovePopup] = useState(false);
  const [rejectPopup, setRejectPopup] = useState(false);
  const [contractPopup, setContractPopup] = useState(false);
  const [mintingPopup, setMintingPopup] = useState(false);

  return (
    <>
      <ReqInfoBox>
        <section className="infoSec">
          <article className="infoArea">
            <ul className="inputList">
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
                <div className="key">Project Title</div>
                <div className="value">
                  <p className="text">Gangwon Wind Park Project</p>
                </div>
              </li>

              <li>
                <div className="key">Industry</div>
                <div className="value">
                  <p className="text"></p>
                </div>
              </li>

              <li className="rightBorder">
                <div className="key">Host country</div>
                <div className="value">
                  <p className="text">Korea</p>
                </div>
              </li>

              <li>
                <div className="key">Project type</div>
                <div className="value">
                  <p className="text">Wind</p>
                </div>
              </li>

              <li className="rightBorder">
                <div className="key">Methodologies</div>
                <div className="value">
                  <p className="text">{(100000).toLocaleString("eu", "US")}</p>
                </div>
              </li>

              <li>
                <div className="key">Total CER</div>
                <div className="value">
                  <p className="text">{`${(149536).toLocaleString(
                    "eu",
                    "US"
                  )} CER`}</p>
                </div>
              </li>

              <li className="rightBorder">
                <div className="key">Crediting Period</div>
                <div className="value">
                  <p className="text"></p>
                </div>
              </li>

              <li>
                <div className="key">Expiry date</div>
                <div className="value">
                  <p className="text">{moment().format("DD/mm/YYYY")}</p>
                </div>
              </li>

              <li className="unityRow">
                <div className="key">Project website</div>
                <div className="value">
                  <button
                    className="colorBlue underLine"
                    onClick={() => window.open("https://www.ecoeye.com")}
                  >
                    https://www.ecoeye.com
                  </button>
                </div>
              </li>

              <li className="unityRow">
                <div className="key">UNFCCC CDM URL</div>
                <div className="value">
                  <button
                    className="colorBlue underLine"
                    onClick={() =>
                      window.open(
                        "https://cdm.unfccc.int/Projects/DB/KEMCO1135749345.69/view"
                      )
                    }
                  >
                    https://cdm.unfccc.int/Projects/DB/KEMCO1135749345.69/view
                  </button>
                </div>
              </li>

              <li className="unityRow">
                <div className="key">Project description</div>
                <div className="value">
                  <p className="text"></p>
                </div>
              </li>
            </ul>
          </article>
        </section>

        <section className="infoSec">
          <article className="infoArea">
            <strong className="contTitle">eCER Status</strong>

            <ul className="inputList">
              <li className="rightBorder">
                <div className="key">CER Symbol</div>
                <div className="value">
                  <p className="text"></p>
                  <button
                    className="contractLinkBtn colorBlue"
                    onClick={() => {}}
                  >
                    Contract link
                  </button>
                </div>
              </li>

              <li>
                <div className="key">CER Status</div>
                <div className="value">
                  <p className="text"></p>
                </div>
              </li>

              <li className="rightBorder">
                <div className="key">Contract Name</div>
                <div className="value">
                  <p className="text">Bitcoin CER</p>
                </div>
              </li>

              <li>
                <div className="key">Contract Address</div>
                <div className="value">
                  <p className="text">0xd3C17F958D2ee506206994597C13D83</p>
                </div>
              </li>

              <li className="rightBorder">
                <div className="key">Created Date</div>
                <div className="value">
                  <p className="text"></p>
                </div>
              </li>

              <li>
                <div className="key">Creation Manager</div>
                <div className="value">
                  <p className="text"></p>
                </div>
              </li>

              <li className="rightBorder">
                <div className="key">Added Date</div>
                <div className="value">
                  <p className="text"></p>
                </div>
              </li>

              <li>
                <div className="key">Add Manager</div>
                <div className="value">
                  <p className="text">{`${(149536).toLocaleString(
                    "eu",
                    "US"
                  )} CER`}</p>
                </div>
              </li>

              <li className="rightBorder">
                <div className="key">Listed Date</div>
                <div className="value">
                  <p className="text"></p>
                </div>
              </li>

              <li>
                <div className="key">Listing Manager</div>
                <div className="value">
                  <p className="text"></p>
                </div>
              </li>
            </ul>
          </article>
        </section>
      </ReqInfoBox>
    </>
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
              border-radius: 6px;

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
                border-radius: 6px;

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
              border-radius: 6px;

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
