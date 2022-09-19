import moment from "moment";
import { forwardRef, useState } from "react";
import styled from "styled-components";
import I_dnArw_white from "../../asset/icon/I_dnArw_white.svg";
import I_calanderWhite from "../../asset/icon/I_calanderWhite.svg";
import PopupBg from "../../components/common/PopupBg";
import SelectPopup from "../../components/common/SelectPopup";
import PageNav from "../../components/common/PageNav";
import { useNavigate } from "react-router-dom";
import {
  D_countryList,
  D_listSortList,
  D_pjTypeList,
  D_reqList,
  D_reqListHeader,
  D_searchStatusList,
} from "../../data/D_cer";
import ReactDatePicker from "react-datepicker";

export default function ReqList() {
  const navigate = useNavigate();

  const [pjNum, setPjNum] = useState("");
  const [pjType, setPjType] = useState(D_pjTypeList[0]);
  const [pjTypePopup, setPjTypePopup] = useState(false);
  const [id, setId] = useState("");
  const [status, setStatus] = useState(D_searchStatusList[0]);
  const [selStatusPopup, setSelStatusPopup] = useState(false);
  const [country, setCountry] = useState(D_countryList[0]);
  const [selCountryPopup, setSelCountryPopup] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [listSort, setListSort] = useState(D_listSortList[0]);
  const [listSortPopup, setListSortPopup] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(40);

  return (
    <ReqListBox>
      <strong className="pageTitle">Request lists</strong>

      <section className="searchSec">
        <article className="inputArea">
          <p className="contTitle">Search CER</p>

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
              <div className="key">Project type</div>
              <div className="value">
                <div className="selCont">
                  <button
                    className="selBtn"
                    onClick={() => setPjTypePopup(true)}
                  >
                    <p>{pjType}</p>
                    <img src={I_dnArw_white} alt="" />
                  </button>

                  {pjTypePopup && (
                    <>
                      <SelectPopup
                        off={setPjTypePopup}
                        list={D_pjTypeList}
                        setCont={setPjType}
                      />
                      <PopupBg off={setPjTypePopup} />
                    </>
                  )}
                </div>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Member ID</div>
              <div className="value">
                <input
                  className="textInput"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
            </li>

            <li>
              <div className="key">Host country</div>
              <div className="value">
                <div className="selCont">
                  <button
                    className="selBtn"
                    onClick={() => setSelCountryPopup(true)}
                  >
                    <p>{country}</p>
                    <img src={I_dnArw_white} alt="" />
                  </button>

                  {selCountryPopup && (
                    <>
                      <SelectPopup
                        off={setSelCountryPopup}
                        list={D_countryList}
                        setCont={setCountry}
                      />
                      <PopupBg off={setSelCountryPopup} />
                    </>
                  )}
                </div>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Membership Status</div>
              <div className="value">
                <div className="selCont">
                  <button
                    className="selBtn"
                    onClick={() => setSelStatusPopup(true)}
                  >
                    <p>{status}</p>
                    <img src={I_dnArw_white} alt="" />
                  </button>

                  {selStatusPopup && (
                    <>
                      <SelectPopup
                        off={setSelStatusPopup}
                        list={D_searchStatusList}
                        setCont={setStatus}
                      />
                      <PopupBg off={setSelStatusPopup} />
                    </>
                  )}
                </div>
              </div>
            </li>

            <li>
              <div className="key">Registration date</div>
              <div className="value dateBox">
                <span className="pickerBox">
                  <ReactDatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    customInput={<ExampleCustomInput />}
                  />
                </span>

                <p>~</p>

                <span className="pickerBox">
                  <ReactDatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    customInput={<ExampleCustomInput />}
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
          <p className="contTitle">Total 2 CER lists</p>

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

            <button className="excelBtn" onClick={() => {}}>
              EXCEL
            </button>
          </div>
        </article>

        <article className="listArea">
          <ul className="listHeader">
            {D_reqListHeader.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>

          <ul className="list">
            {D_reqList.map((v, i) => (
              <li key={i} onClick={() => navigate(`${i}`)}>
                <span>{v.no}</span>
                <span>{moment(v.date).format("YYYY.MM.DD HH:mm:SS")}</span>
                <span>{String(v.pjNum).padStart(4, "0")}</span>
                <span>{v.pjType}</span>
                <span>{v.hostCountry}</span>
                <span>{v.quantity.toLocaleString("eu", "US")}</span>
                <span>{v.memberId}</span>
                <span>{v.managerId}</span>
                <span>{v.status}</span>
              </li>
            ))}
          </ul>
        </article>

        <PageNav page={page} setPage={setPage} total={total} />
      </section>
    </ReqListBox>
  );
}

const ReqListBox = styled.main`
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
        }
      }

      .listHeader li,
      .list li span {
        &:nth-of-type(1) {
          width: 62px;
        }

        &:nth-of-type(2) {
          width: 200px;
        }

        &:nth-of-type(3) {
          width: 130px;
        }

        &:nth-of-type(4) {
          width: 140px;
        }

        &:nth-of-type(5) {
          width: 146px;
        }

        &:nth-of-type(6) {
          width: 156px;
        }

        &:nth-of-type(7) {
          width: 234px;
        }

        &:nth-of-type(8) {
          width: 234px;
        }

        &:nth-of-type(9) {
          flex: 1;
        }
      }
    }
  }
`;

const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
  <button className="customInput" onClick={onClick} ref={ref}>
    <p>{moment(value).format("YYYY-MM-DD")}</p>

    <img src={I_calanderWhite} alt="" />
  </button>
));
