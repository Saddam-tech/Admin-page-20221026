import styled from "styled-components";
import { D_cerRegistList, D_cerRegistListHeader } from "../../data/D_dashboard";
import moment from "moment";

export default function CerRegist() {
  return (
    <CerRegistBox>
      <ul className="listHeader">
        {D_cerRegistListHeader.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>

      <ul className="list">
        {D_cerRegistList.map((v, i) => (
          <li key={i}>
            <span>{v.no}</span>
            <span>{moment(v.date).format("YYYY.MM.DD HH:mm:SS")}</span>
            <span>{v.projectNo}</span>
            <span>{v.symbol}</span>
            <span>{v.quantity.toLocaleString("eu", "US")}</span>
            <span>{v.memberId}</span>
            <span>{v.managerId}</span>
            <span>{v.status}</span>
          </li>
        ))}
      </ul>
    </CerRegistBox>
  );
}

const CerRegistBox = styled.article`
  padding: 30px;
  font-size: 16px;

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
      width: 72px;
    }

    &:nth-of-type(2) {
      width: 220px;
    }

    &:nth-of-type(3) {
      width: 128px;
    }

    &:nth-of-type(4) {
      width: 126px;
    }

    &:nth-of-type(5) {
      width: 184px;
    }

    &:nth-of-type(6) {
      width: 264px;
    }

    &:nth-of-type(7) {
      width: 264px;
    }

    &:nth-of-type(7) {
      width: 284px;
    }

    &:nth-of-type(8) {
      flex: 1;
    }
  }
`;
