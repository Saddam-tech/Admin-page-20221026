import { useState } from "react";
import styled from "styled-components";
import I_dnArw_white from "../../../asset/icon/I_dnArw_white.svg";
import I_chk_white from "../../../asset/icon/I_chk_white.svg";
import I_chk_gray from "../../../asset/icon/I_chk_gray.svg";
import PopupBg from "../../common/PopupBg";
import SelectPopup from "../../common/SelectPopup";
import {
  D_infoStatusList,
  D_nationalList,
  D_userInfoCategoryList,
} from "../../../data/D_member";
import Document from "./Document";

export default function UserInfo() {
  const [status, setStatus] = useState(D_infoStatusList[0]);
  const [nation, setNation] = useState(D_nationalList[0]);
  const [selNationPopup, setSelNationPopup] = useState(false);
  const [selStatusPopup, setSelStatusPopup] = useState(false);
  const [category, setCategory] = useState(D_userInfoCategoryList[0]);

  return (
    <UserInfoBox>
      <section className="infoSec">
        <article className="infoArea">
          <ul className="inputList">
            <li className="rightBorder">
              <div className="key">Login ID</div>
              <div className="value">
                <p className="text">evil@gmail.com (Member ID : 00012)</p>
              </div>
            </li>

            <li>
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
                        list={D_infoStatusList}
                        setCont={setStatus}
                      />
                      <PopupBg off={setSelStatusPopup} />
                    </>
                  )}
                </div>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Nationality</div>
              <div className="value">
                <div className="selCont">
                  <button
                    className="selBtn"
                    onClick={() => setSelNationPopup(true)}
                  >
                    <p>{nation}</p>
                    <img src={I_dnArw_white} alt="" />
                  </button>

                  {selNationPopup && (
                    <>
                      <SelectPopup
                        off={setSelNationPopup}
                        list={D_nationalList}
                        setCont={setNation}
                      />
                      <PopupBg off={setSelNationPopup} />
                    </>
                  )}
                </div>
              </div>
            </li>

            <li>
              <div className="key">Gender</div>
              <div className="value">
                <p className="text">Male</p>
              </div>
            </li>

            <li className="unityRow">
              <div className="key">Name</div>
              <div className="value">
                <ul className="valueList">
                  <li>blockchainfactory</li>
                  <li>Inc.</li>
                </ul>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Phone Number</div>
              <div className="value">
                <p className="text"></p>
              </div>
            </li>

            <li>
              <div className="key">Email</div>
              <div className="value">
                <p className="text">evil@gmail.com (Member ID : 00012)</p>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Date of birth</div>
              <div className="value">
                <p className="text"></p>
              </div>
            </li>

            <li>
              <div className="key">Last access date</div>
              <div className="value">
                <p className="text"></p>
              </div>
            </li>

            <li className="unityRow">
              <div className="key">Residential Address</div>
              <div className="value">
                <ul className="valueList">
                  <li className="large">강남구 테헤란로 110, 5층</li>
                  <li>서울특별시</li>
                  <li>대한민국</li>
                  <li>06201</li>
                </ul>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Member registration date</div>
              <div className="value">
                <p className="text"></p>
              </div>
            </li>

            <li>
              <div className="key">Secession date</div>
              <div className="value">
                <p className="text"></p>
              </div>
            </li>

            <li className="unityRow">
              <div className="key">Entity Verification</div>
              <div className="value">
                <ul className="processList">
                  <li>
                    <span className={`on process`}>
                      <img className="white" src={I_chk_white} alt="" />
                      <img className="gray" src={I_chk_gray} alt="" />
                    </span>

                    <p>User Documents</p>
                  </li>
                  <li>
                    <span className={`process`}>
                      <img className="white" src={I_chk_white} alt="" />
                      <img className="gray" src={I_chk_gray} alt="" />
                    </span>
                    <p>Entity Documents</p>
                  </li>
                  <li>
                    <span className={`on process`}>
                      <img className="white" src={I_chk_white} alt="" />
                      <img className="gray" src={I_chk_gray} alt="" />
                    </span>
                    <p>Related parties Documents</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </article>
      </section>

      {category === "Documents" && (
        <Document category={category} setCategory={setCategory} />
      )}
    </UserInfoBox>
  );
}

const UserInfoBox = styled.main`
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
