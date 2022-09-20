import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function EcerDet() {
  const navigate = useNavigate();

  return (
    <EcerDetBox>
      <strong className="pageTitle">eCER details</strong>

      <section className="contSec">
        <article className="inputArea">
          <ul className="inputList">
            <li className="rightBorder">
              <div className="key">eCER Symbol</div>
              <div className="value">
                <p className="text"></p>
                <button className="contBtn colorBlue" onClick={() => {}}>
                  Contract link
                </button>
              </div>
            </li>

            <li>
              <div className="key">Contract Name</div>
              <div className="value">
                <p className="text">Bitcoin CER</p>
              </div>
            </li>

            <li className="unityRow">
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
              <div className="key">Minting Total</div>
              <div className="value">
                <p className="text"></p>
                <button
                  className="colorBlue"
                  onClick={() => navigate("/ecer/mintlist")}
                >
                  Minted link
                </button>
              </div>
            </li>

            <li>
              <div className="key">Incineration Total</div>
              <div className="value">
                <p className="text"></p>
                <button className="colorBlue" onClick={() => {}}>
                  Offset Record
                </button>
              </div>
            </li>
          </ul>
        </article>
      </section>
    </EcerDetBox>
  );
}

const EcerDetBox = styled.main`
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
              border-radius: 6px;

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
              border-radius: 6px;

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
              border-radius: 6px;
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
                border-radius: 6px;
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
