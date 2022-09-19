import moment from "moment";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { forwardRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import I_calanderWhite from "../../asset/icon/I_calanderWhite.svg";

export default function CerDet() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [methodologies, setMethodologies] = useState("");
  const [total, setTotal] = useState("");
  const [periodStart, setPeriodStart] = useState(new Date());
  const [periodEnd, setPeriodEnd] = useState(new Date());
  const [expiry, setExpiry] = useState(new Date());
  const [desc, setDesc] = useState("");

  return (
    <CerDetailBox>
      <strong className="pageTitle">CER details</strong>

      <section className="contSec">
        <article className="inputArea">
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
              <div className="key">Project title</div>
              <div className="value">
                <input
                  className="textInput"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </li>

            <li>
              <div className="key">Industry</div>
              <div className="value">
                <input
                  className="textInput"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                />
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Methodologies</div>
              <div className="value">
                <input
                  className="textInput"
                  value={methodologies}
                  onChange={(e) => setMethodologies(e.target.value)}
                />
              </div>
            </li>

            <li>
              <div className="key">Total CER</div>
              <div className="value">
                <div className="inputBox">
                  <input
                    type={"number"}
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                  />
                  <p>CER</p>
                </div>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Crediting Period</div>
              <div className="value dateBox">
                <span className="pickerBox">
                  <ReactDatePicker
                    selected={periodStart}
                    onChange={(date) => setPeriodStart(date)}
                    customInput={<CustomInput />}
                  />
                </span>

                <p>~</p>

                <span className="pickerBox">
                  <ReactDatePicker
                    selected={periodEnd}
                    onChange={(date) => setPeriodEnd(date)}
                    customInput={<CustomInput />}
                  />
                </span>
              </div>
            </li>

            <li>
              <div className="key">Expiry date</div>
              <div className="value">
                <div className="value">
                  <ReactDatePicker
                    selected={expiry}
                    onChange={(date) => setExpiry(date)}
                    customInput={<ExpiryInput />}
                  />
                </div>
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
                <input
                  className="textInput"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </li>
          </ul>
        </article>

        <button className="saveBtn" onClick={() => {}}>
          SAVE
        </button>
      </section>

      <section className="contSec">
        <article className="inputArea">
          <strong className="contTitle">eCER Status</strong>

          <ul className="inputList">
            <li className="rightBorder">
              <div className="key">CER Symbol</div>
              <div className="value">
                <p className="text">BCER</p>
                <button className="colorBlue" onClick={() => {}}>
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
                <p className="text"></p>
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

      <section className="contSec">
        <article className="inputArea">
          <strong className="contTitle">Registered quantity</strong>

          <ul className="inputList">
            <li className="rightBorder">
              <div className="key">Registration Total</div>
              <div className="value">
                <p className="text">{(1200000).toLocaleString("eu", "US")}</p>
                <button className="colorBlue" onClick={() => {}}>
                  Contract link
                </button>
              </div>
            </li>

            <li>
              <div className="key">Offset Total</div>
              <div className="value">
                <p className="text">{(200000).toLocaleString("eu", "US")}</p>
                <button className="colorBlue" onClick={() => {}}>
                  Offset Record
                </button>
              </div>
            </li>
          </ul>
        </article>
      </section>
    </CerDetailBox>
  );
}

const CerDetailBox = styled.main`
  width: 1480px;
  margin: 0 0 0 40px;

  .pageTitle {
    font-size: 20px;
    font-weight: 600;
  }

  .contTitle {
    font-size: 16px;
    font-weight: 600;
  }

  .contSec {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin: 60px 0 0;

    &:first-of-type {
      margin: 30px 0 0;
    }

    .inputArea {
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

          &.unityRow {
            width: 1420px;

            .value {
              overflow: hidden;

              .valueList {
                display: flex;
                align-items: center;
                gap: 34px;
                overflow-x: scroll;

                li {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  cursor: pointer;

                  &.on {
                    .dotBox {
                      border-color: #4c96d9;

                      span {
                        display: block;
                      }
                    }
                  }

                  .dotBox {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 16px;
                    height: 16px;
                    background: rgba(255, 255, 255, 0.4);
                    border: 1px solid #d1d5db;
                    border-radius: 50%;

                    span {
                      display: none;
                      width: 8px;
                      height: 8px;
                      border-radius: inherit;
                      background: #4c96d9;
                    }
                  }
                }
              }
            }
          }

          .key {
            display: flex;
            align-items: center;
            width: 250px;
            height: 100%;
            padding: 0 20px;
            background: #191919;
            border-right: 1px solid #333;
          }

          .value {
            flex: 1;
            display: flex;
            align-items: center;
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

            .textInput {
              flex: 1;
              padding: 0 10px;
              height: 100%;

              &:focus-within {
                background: rgba(255, 255, 255, 0.06);
              }
            }

            .inputBox {
              flex: 1;
              display: flex;
              align-items: center;
              gap: 4px;
              height: 100%;
              padding: 0 10px;

              &:focus-within {
                background: rgba(255, 255, 255, 0.06);
              }

              input {
                flex: 1;
              }
            }

            .colorBlue {
              color: #45a7ff;
            }

            .underLine {
              text-decoration: underline;
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

            &.dateBox {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 14px;
              padding: 0 10px;

              .customInput {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 200px;
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
            }
          }
        }
      }
    }

    .saveBtn {
      width: 160px;
      height: 44px;
      font-size: 16px;
      font-weight: 600;
      background: #4c96d9;
      border-radius: 10px;
    }
  }
`;

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button className="customInput" onClick={onClick} ref={ref}>
    <p>{moment(value).format("YYYY-MM-DD")}</p>

    <img src={I_calanderWhite} alt="" />
  </button>
));

const ExpiryInput = forwardRef(({ value, onClick }, ref) => (
  <button className="customInput" onClick={onClick} ref={ref}>
    <p>{moment(value).format("DD/MM/YYYY")}</p>

    <img src={I_calanderWhite} alt="" />
  </button>
));
