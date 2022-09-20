import moment from "moment/moment";
import styled from "styled-components";
import {
  D_entityInfoCategoryList,
  D_relatedPartyList,
  D_relatedPartyListHeader,
} from "../../../data/D_member";
import I_chain_white from "../../../asset/icon/I_chain_white.svg";
import { useState } from "react";
import UploadDocPopup from "./UploadDocPopup";
import PopupBg from "../../common/PopupBg";

export default function RelatedParty({ category, setCategory }) {
  const [uploadDocPopup, setUploadDocPopup] = useState(-1);

  return (
    <>
      <RelatedPartyBox className="editSec">
        <article className="topBar">
          <ul className="contCategoryList">
            {D_entityInfoCategoryList.map((v, i) => (
              <li
                key={i}
                className={`${category === v ? "on" : ""}`}
                onClick={() => setCategory(v)}
              >
                {v}
              </li>
            ))}
          </ul>

          <button className="saveBtn" onClick={() => {}}>
            SAVE
          </button>
        </article>

        <article className="contArea">
          <ul className="listHeader">
            {D_relatedPartyListHeader.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>

          <ul className="list">
            {D_relatedPartyList.map((v, i) => (
              <li key={i}>
                <span>
                  <p>{v.name}</p>
                </span>
                <span>
                  <p>{moment(v.birth).format("YYYY.MM.DD")}</p>
                </span>
                <span>
                  <p>{v.jurisdiction}</p>
                </span>
                <span>
                  <p>{v.email}</p>
                </span>
                <span>
                  <p>{v.id}</p>
                </span>
                <span>
                  <p>{v.countryOfIssue}</p>
                </span>
                <span>
                  <p>{v.class}</p>
                </span>
                <span>
                  <button
                    className="docBtn"
                    onClick={() => setUploadDocPopup(i)}
                  >
                    <img src={I_chain_white} alt="" />
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </article>
      </RelatedPartyBox>

      {uploadDocPopup !== -1 && (
        <>
          <UploadDocPopup off={() => setUploadDocPopup(-1)} />
          <PopupBg bg blur off={() => setUploadDocPopup(-1)} />
        </>
      )}
    </>
  );
}

const RelatedPartyBox = styled.main`
  margin: 60px 0 0;
  background: #202020;
  box-shadow: 0px 4px 14px rgba(255, 255, 255, 0.06);
  border-radius: 10px;

  .topBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 72px;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #333333;

    .contCategoryList {
      display: flex;
      gap: 10px;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 44px;
        padding: 0 25px;
        border: 1px solid #333;
        border-radius: 10px;
        cursor: pointer;

        &.on {
          color: #333;
          background: #fff;
        }
      }
    }

    .saveBtn {
      width: 200px;
      height: 44px;
      background: #4c96d9;
      border-radius: 10px;
    }
  }

  .contArea {
    padding: 30px 30px 46px;

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
          &:nth-of-type(8) {
            .docBtn {
              img {
                height: 22px;
              }
            }
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
        width: 94px;
      }

      &:nth-of-type(2) {
        width: 146px;
      }

      &:nth-of-type(3) {
        width: 212px;
      }

      &:nth-of-type(4) {
        width: 254px;
      }

      &:nth-of-type(5) {
        width: 216px;
      }

      &:nth-of-type(6) {
        width: 212px;
      }

      &:nth-of-type(7) {
        width: 164px;
      }

      &:nth-of-type(8) {
        flex: 1;
      }
    }
  }
`;
