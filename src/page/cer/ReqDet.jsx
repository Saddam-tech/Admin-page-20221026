import { useState } from "react";
import styled from "styled-components";
import ReqInfo from "../../components/cer/reqDet/ReqInfo";
import EntityInfo from "../../components/member/entityInfo/EntityInfo";
import UserInfo from "../../components/member/userInfo/UserInfo";
import { D_reqDetCategoryList } from "../../data/D_cer";

export default function ReqDet() {
  const [category, setCategory] = useState(D_reqDetCategoryList[0]);

  return (
    <ReqDetBox>
      <strong className="pageTitle">CER registration request details</strong>

      <ul className="categoryList">
        {D_reqDetCategoryList.map((v, i) => (
          <li
            key={i}
            className={`${category === v ? "on" : ""}`}
            onClick={() => setCategory(v)}
          >
            {v}
          </li>
        ))}
      </ul>

      {category === "Request Info." ? <ReqInfo /> : <></>}
      {category === "CER basic info." ? <EntityInfo /> : <></>}
    </ReqDetBox>
  );
}

const ReqDetBox = styled.main`
  width: 1480px;
  margin: 0 0 0 40px;

  .pageTitle {
    font-size: 20px;
    font-weight: 600;
  }

  .categoryList {
    display: flex;
    gap: 4px;
    margin: 30px 0 0;

    li {
      display: flex;
      align-items: center;
      height: 44px;
      padding: 0 14px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 10px;
      opacity: 0.25;
      cursor: pointer;

      &.on {
        opacity: 1;
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
`;
