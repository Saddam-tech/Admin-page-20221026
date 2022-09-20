import moment from "moment";
import { forwardRef, useState } from "react";
import styled from "styled-components";
import I_dnArw_white from "../../asset/icon/I_dnArw_white.svg";
import I_calanderWhite from "../../asset/icon/I_calanderWhite.svg";
import PopupBg from "../../components/common/PopupBg";
import SelectPopup from "../../components/common/SelectPopup";
import PageNav from "../../components/common/PageNav";
import { useNavigate } from "react-router-dom";
import { D_cerList, D_listSortList } from "../../data/D_cer";
import { getExcelFile } from "../../util/Util";
import ReactDatePicker from "react-datepicker";
import { D_ecerList, D_ecerListHeader } from "../../data/D_ecer";
import {
  D_offsetDetList,
  D_offsetDetListHeader,
  D_offsetList,
  D_offsetListHeader,
} from "../../data/D_offset";

export default function OffsetList() {
  const navigate = useNavigate();

  const [pjNum, setPjNum] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [listSort, setListSort] = useState(D_listSortList[0]);
  const [listSortPopup, setListSortPopup] = useState(false);
  const [detIndex, setDetIndex] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(40);

  function onClickExcelBtn() {
    getExcelFile(D_cerList, "offset_lists");
  }

  return (
    <OffsetListBox>
      <strong className="pageTitle">Offset lists</strong>

      <section className="searchSec">
        <article className="inputArea">
          <p className="contTitle">Search Offset</p>

          <ul className="inputList">
            <li className="rightBorder">
              <div className="key">Project No</div>
              <div className="value">
                <input
                  className="textInput"
                  value={pjNum}
                  onChange={(e) => setPjNum(e.target.value)}
                />
              </div>
            </li>

            <li>
              <div className="key">Created date</div>
              <div className="value dateBox">
                <span className="pickerBox">
                  <ReactDatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    customInput={<CustomInput />}
                  />
                </span>

                <p>~</p>

                <span className="pickerBox">
                  <ReactDatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    customInput={<CustomInput />}
                  />
                </span>
              </div>
            </li>
          </ul>
        </article>

        <button className="searchBtn" onClick={() => {}}>
          Search
        </button>
      </section>

      <section className="searchedSec">
        <article className="topArea">
          <p className="contTitle">Total {total} Records</p>

          <div className="utilBox">
            <div className="selCont">
              <button className="selBtn" onClick={() => setListSortPopup(true)}>
                <p>{listSort}</p>
                <img src={I_dnArw_white} alt="" />
              </button>

              {listSortPopup && (
                <>
                  <SelectPopup
                    off={setListSortPopup}
                    list={D_listSortList}
                    setCont={setListSort}
                  />
                  <PopupBg off={setListSortPopup} />
                </>
              )}
            </div>

            <button className="excelBtn" onClick={onClickExcelBtn}>
              EXCEL
            </button>
          </div>
        </article>

        <article className="listArea">
          <div className="listBox leftBox">
            <ul className="listHeader">
              {D_offsetListHeader.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>

            <ul className="list">
              {D_offsetList.map((v, i) => (
                <li key={i} onClick={() => setDetIndex(i)}>
                  <span>
                    <p>{v.no}</p>
                  </span>
                  <span>
                    <p>{moment(v.date).format("YYYY.MM.DD HH:mm:SS")}</p>
                  </span>
                  <span>
                    <p>{v.id}</p>
                  </span>
                  <span>
                    <p>{v.quantity.toLocaleString("eu", "US")}</p>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {detIndex !== "" && (
            <div className="listBox rightBox">
              <ul className="listHeader">
                {D_offsetDetListHeader.map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </ul>

              <ul className="list">
                {D_offsetDetList.map((v, i) => (
                  <li key={i}>
                    <span>
                      <p>{v.no}</p>
                    </span>
                    <span>
                      <p>{v.symbol}</p>
                    </span>
                    <span>
                      <p>{String(v.pjNum).padStart(4, "0")}</p>
                    </span>
                    <span>
                      <p>{v.quantity.toLocaleString("eu", "US")}</p>
                    </span>
                    <span>
                      <button className="linkBtn" onClick={() => {}}>
                        [TX ID]
                      </button>
                    </span>
                  </li>
                ))}
                <li className="total">
                  <span></span>
                  <span></span>
                  <span>
                    <p>Offset Total</p>
                  </span>
                  <span>
                    <p>{(111000).toLocaleString("eu", "US")}</p>
                  </span>
                </li>
              </ul>
            </div>
          )}
        </article>

        <PageNav page={page} setPage={setPage} total={total} />
      </section>
    </OffsetListBox>
  );
}

const OffsetListBox = styled.main`
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
      display: flex;
      justify-content: space-between;

      gap: 40px;

      .listBox {
        width: 690px;

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
        }

        &.leftBox {
          .list {
            li {
              cursor: pointer;

              &:hover {
                background: rgba(255, 255, 255, 0.1);
              }
            }
          }

          .listHeader li,
          .list li span {
            &:nth-of-type(1) {
              width: 62px;
            }

            &:nth-of-type(2) {
              width: 190px;
            }

            &:nth-of-type(3) {
              width: 202px;
            }

            &:nth-of-type(4) {
              flex: 1;
            }
          }
        }

        &.rightBox {
          .list {
            li {
              &.total {
                border-bottom: none;

                span {
                  &:nth-of-type(3) {
                    border-bottom: 1px solid #333;
                  }

                  &:nth-of-type(4) {
                    border-bottom: 1px solid #333;
                    background: rgba(255, 255, 255, 0.04);
                  }
                }
              }
            }
          }

          .listHeader li,
          .list li span {
            display: flex;
            align-items: center;
            height: 100%;

            &:nth-of-type(1) {
              width: 62px;
            }

            &:nth-of-type(2) {
              width: 116px;
            }

            &:nth-of-type(3) {
              width: 150px;
              padding: 0 20px 0 0;
              border-right: 1px solid #333;
            }

            &:nth-of-type(4) {
              width: 180px;
              padding: 0 20px;
              justify-content: flex-end;
              border-right: 1px solid #333;
            }

            &:nth-of-type(5) {
              flex: 1;
              justify-content: center;
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
