import styled from "styled-components";
import moment from "moment";
import { D_rejectList, D_rejectListHeader } from "../../../data/D_cer";

export default function Reject() {
  return (
    <RejectBox>
      <strong className="contTitle">Reject</strong>

      <div className="listBox">
        <ul className="listHeader">
          {D_rejectListHeader.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>

        <ul className="list">
          {D_rejectList.map((v, i) => (
            <li key={i}>
              <span>
                <p>{v.no}</p>
              </span>
              <span>
                <p>{moment(v.date).format("YYYY.MM.DD HH:mm:SS")}</p>
              </span>
              <span>
                <p>{v.manager}</p>
              </span>
              <span>
                <p>{v.reason}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </RejectBox>
  );
}

const RejectBox = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 60px 0 0;
  padding: 30px;
  background: #202020;
  box-shadow: 0px 4px 14px rgba(255, 255, 255, 0.06);
  border-radius: 10px;

  .listBox {
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
        width: 82px;
      }

      &:nth-of-type(2) {
        width: 230px;
      }

      &:nth-of-type(3) {
        width: 214px;
      }

      &:nth-of-type(4) {
        flex: 1;
      }
    }
  }
`;
