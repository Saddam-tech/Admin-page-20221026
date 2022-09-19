import { useState } from "react";
import styled from "styled-components";
import {
  D_infoStatusList,
  D_nationalList,
  D_entityInfoCategoryList,
} from "../../../data/D_member";
import Document from "./Document";
import moment from "moment/moment";
import RelatedParty from "./RelatedParty";

export default function EntityInfo() {
  const [category, setCategory] = useState(D_entityInfoCategoryList[0]);

  return (
    <EntityInfoBox>
      <section className="infoSec">
        <article className="infoArea">
          <ul className="inputList">
            <li className="rightBorder">
              <div className="key">Entity Name</div>
              <div className="value">
                <p className="text"></p>
              </div>
            </li>

            <li>
              <div className="key">Registration Number</div>
              <div className="value">
                <p className="text"></p>
              </div>
            </li>

            <li className="rightBorder">
              <div className="key">Date of Incorporation</div>
              <div className="value">
                <p className="text">{moment().format("YYYY.MM.DD")}</p>
              </div>
            </li>

            <li>
              <div className="key">Contact Number</div>
              <div className="value">
                <p className="text"></p>
              </div>
            </li>

            <li className="unityRow">
              <div className="key">Registered Address</div>
              <div className="value">
                <ul className="valueList">
                  <li className="large">강남구 테헤란로 110, 5층</li>
                  <li>서울특별시</li>
                  <li>대한민국</li>
                  <li>06201</li>
                </ul>
              </div>
            </li>

            <li className="unityRow">
              <div className="key">Nature of Business</div>
              <div className="value">
                <ul className="valueList"></ul>
              </div>
            </li>

            <li className="unityRow">
              <div className="key">DUNS number</div>
              <div className="value"></div>
            </li>

            <li className="unityRow">
              <div className="key">Entity Website</div>
              <div className="value"></div>
            </li>

            <li className="unityRow">
              <div className="key">Source of Funds</div>
              <div className="value"></div>
            </li>

            <li className="unityRow">
              <div className="key">Application Reason</div>
              <div className="value"></div>
            </li>
          </ul>
        </article>
      </section>

      {category === "Documents" && (
        <Document category={category} setCategory={setCategory} />
      )}
      {category === "Related Parties" && (
        <RelatedParty category={category} setCategory={setCategory} />
      )}
    </EntityInfoBox>
  );
}

const EntityInfoBox = styled.main`
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
