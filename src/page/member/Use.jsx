import moment from "moment";
import { forwardRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import I_dnArw_white from "../../asset/icon/I_dnArw_white.svg";
import I_calanderWhite from "../../asset/icon/I_calanderWhite.svg";
import PopupBg from "../../components/common/PopupBg";
import SelectPopup from "../../components/common/SelectPopup";
import {
  D_searchedList,
  D_searchedListHeader,
  D_searchStatusList,
} from "../../data/D_member";
import PageNav from "../../components/common/PageNav";
import { useNavigate } from "react-router-dom";

export default function Use() {
  const navigate = useNavigate();

  const [memberId, setMemberId] = useState("");
  const [loginId, setLoginId] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState(D_searchStatusList[0]);
  const [selStatusPopup, setSelStatusPopup] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(40);

  return (
    <UesBox>
      <strong className="pageTitle">In use Users</strong>

      <section className="searchSec">
        <article className="inputArea">
          <p className="contTitle">Search Users</p>

          <ul className="inputList">
            <li className="rightBorder">
              <div className="key">Member ID</div>
              <div className="value">
                <input
                  className="textInput"
                  value={memberId}
                  onChange={(e) => setMemberId(e.target.value)}
                />
              </div>
            </li>

            <li>
              <div className="key">Login ID</div>
              <div className="value">
                <input
                  className="textInput"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                />
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Entity Name</div>
              <div className="value">
                <input
                  className="textInput"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </li>

            <li>
              <div className="key">Registration Number</div>
              <div className="value">
                <input
                  className="textInput"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
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
        <p className="contTitle">Entities Searched</p>

        <article className="listArea">
          <ul className="listHeader">
            {D_searchedListHeader.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>

          <ul className="list">
            {D_searchedList.map((v, i) => (
              <li key={i} onClick={() => navigate(`/member/det/${i}`)}>
                <span>
                  <p>{v.memberId}</p>
                </span>
                <span>
                  <p>{v.loginId}</p>
                </span>
                <span>
                  <p>{v.name}</p>
                </span>
                <span>
                  <p>{v.number}</p>
                </span>
                <span>
                  <p>{v.status}</p>
                </span>
                <span>
                  <p>{moment(v.date).format("YYYY.MM.DD HH:mm:SS")}</p>
                </span>
                <span>
                  <p>{moment(v.date).format("YYYY.MM.DD HH:mm:SS")}</p>
                </span>
              </li>
            ))}
          </ul>
        </article>

        <PageNav page={page} setPage={setPage} total={total} />
      </section>
    </UesBox>
  );
}

const UesBox = styled.main`
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
    gap: 24px;
    padding: 30px;
    margin: 60px 0 0;
    background: #202020;
    box-shadow: 0px 4px 14px rgba(255, 255, 255, 0.06);
    border-radius: 10px;

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
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        &:nth-of-type(1) {
          width: 126px;
        }

        &:nth-of-type(2) {
          width: 224px;
        }

        &:nth-of-type(3) {
          width: 172px;
        }

        &:nth-of-type(4) {
          width: 218px;
        }

        &:nth-of-type(5) {
          width: 240px;
        }

        &:nth-of-type(6) {
          width: 220px;
        }

        &:nth-of-type(7) {
          flex: 1;
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
