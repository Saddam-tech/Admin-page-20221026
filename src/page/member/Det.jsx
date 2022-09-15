import { useState } from "react";
import styled from "styled-components";
import UserInfo from "../../components/member/UserInfo";
import { D_detCategoryList } from "../../data/D_member";

export default function Det() {
  const [category, setCategory] = useState(D_detCategoryList[0]);

  return (
    <DetBox>
      <strong className="pageTitle">Member Approval Request</strong>

      <ul className="categoryList">
        {D_detCategoryList.map((v, i) => (
          <li
            key={i}
            className={`${category === v ? "on" : ""}`}
            onClick={() => setCategory(v)}
          >
            {v}
          </li>
        ))}
      </ul>

      {category === "User Information" ? <UserInfo /> : <></>}
      {/* {category === "Entity Information" ? <User /> : <></>} */}
    </DetBox>
  );
}

const DetBox = styled.main`
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
