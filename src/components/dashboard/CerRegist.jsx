import styled from "styled-components";
import { D_cerRegistList, D_cerRegistListHeader } from "../../data/D_dashboard";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function CerRegist() {
  const navigate = useNavigate();

  return (
    <CerRegistBox>
      <ul className="listHeader">
        {D_cerRegistListHeader.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>

      <ul className="list">
        {D_cerRegistList.map((v, i) => (
          <li key={i} onClick={() => navigate(`/cer/reqlist/${i}`)}>
            <span>
              <p>{v.no}</p>
            </span>
            <span>
              <p>{moment(v.date).format("YYYY.MM.DD HH:mm:SS")}</p>
            </span>
            <span>
              <p>{v.projectNo}</p>
            </span>
            <span>
              <p>{v.symbol}</p>
            </span>
            <span>
              <p>{v.quantity.toLocaleString("eu", "US")}</p>
            </span>
            <span>
              <p>{v.memberId}</p>
            </span>
            <span>
              <p>{v.managerId}</p>
            </span>
            <span>
              <p>{v.status}</p>
            </span>
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
    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

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
