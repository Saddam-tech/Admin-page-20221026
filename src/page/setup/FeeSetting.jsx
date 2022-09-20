import moment from "moment";
import { forwardRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { D_feeList, D_feeListHeader } from "../../data/D_setup";
import PopupBg from "../../components/common/PopupBg";
import AddFeePopup from "../../components/setup/fee/AddFeePopup";
import FeeDetailPopup from "../../components/setup/fee/FeeDetailPopup";

export default function FeeSetting() {
  const navigate = useNavigate();

  const [addFeePopup, setAddFeePopup] = useState(false);
  const [FeeDetPopup, setFeeDetPopup] = useState(false);
  const [total, setTotal] = useState(3);

  return (
    <>
      <FeeSettingBox>
        <strong className="pageTitle">Fee setting</strong>

        <section className="searchedSec">
          <article className="topArea">
            <p className="contTitle">Total {total} Records</p>

            <div className="utilBox">
              <button className="excelBtn" onClick={() => setAddFeePopup(true)}>
                Add Fee
              </button>
            </div>
          </article>

          <article className="listArea">
            <ul className="listHeader">
              {D_feeListHeader.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>

            <ul className="list">
              {D_feeList.map((v, i) => (
                <li key={i} onClick={() => setFeeDetPopup(v.no)}>
                  <span>
                    <p>{v.no}</p>
                  </span>
                  <span>
                    <p>{v.type}</p>
                  </span>
                  <span>
                    <p>{v.amount.toLocaleString("eu", "US")}</p>
                  </span>
                  <span>
                    <p>
                      {v.amount.toLocaleString("eu", {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </p>
                  </span>
                  <span>
                    <p>{v.managerId}</p>
                  </span>
                  <span>
                    <p>{moment(v.date).format("YYYY.MM.DD HH:mm:SS")}</p>
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </FeeSettingBox>

      {addFeePopup && (
        <>
          <AddFeePopup off={setAddFeePopup} />
          <PopupBg bg blur off={setAddFeePopup} />
        </>
      )}

      {FeeDetPopup && (
        <>
          <FeeDetailPopup off={setFeeDetPopup} />
          <PopupBg bg blur off={setFeeDetPopup} />
        </>
      )}
    </>
  );
}

const FeeSettingBox = styled.main`
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

  .searchSec {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin: 30px 0 0;

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
            position: relative;
            padding: 6px 10px;

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

    .searchBtn {
      width: 160px;
      height: 44px;
      font-size: 16px;
      font-weight: 600;
      background: #4c96d9;
      border-radius: 10px;
    }
  }

  .searchedSec {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 30px;
    margin: 60px 0 0;
    background: #202020;
    box-shadow: 0px 4px 14px rgba(255, 255, 255, 0.06);
    border-radius: 10px;

    .topArea {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .contTitle {
      }

      .utilBox {
        display: flex;
        align-items: center;
        gap: 10px;

        .selCont {
          width: 244px;
          position: relative;

          .selBtn {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 44px;
            padding: 0 20px;
            border: 1px solid #333;
            border-radius: 10px;

            &:focus-within {
              background: rgba(255, 255, 255, 0.06);
            }
          }
        }

        .excelBtn {
          width: 162px;
          height: 44px;
          font-size: 16px;
          font-weight: 700;
          color: #333;
          background: #fff;
          border: 1px solid #333;
          border-radius: 10px;
        }
      }
    }

    .listArea {
      .listHeader {
        display: flex;
        align-items: center;
        height: 50px;
        padding: 0 10px;
        background: rgba(255, 255, 255, 0.04);
        border-bottom: 1px solid #333;

        li {
        }
      }

      .list {
        li {
          display: flex;
          align-items: center;
          height: 44px;
          padding: 0 10px;
          color: rgba(255, 255, 255, 0.8);
          border-bottom: 1px solid #333;
          cursor: pointer;

          &:hover {
            background: rgba(255, 255, 255, 0.1);
          }

          span {
            .linkBtn {
              color: #45a7ff;
            }
          }
        }
      }

      .listHeader li,
      .list li span {
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        &:nth-of-type(1) {
          width: 72px;
        }

        &:nth-of-type(2) {
          width: 280px;
        }

        &:nth-of-type(3) {
          width: 292px;
        }

        &:nth-of-type(4) {
          width: 282px;
        }

        &:nth-of-type(5) {
          width: 234px;
        }

        &:nth-of-type(6) {
          flex: 1;
        }
      }
    }
  }
`;
