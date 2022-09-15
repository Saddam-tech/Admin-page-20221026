import styled from "styled-components";
import { D_documentList, D_documentListHeader } from "../../data/D_dashboard";
import moment from "moment";

export default function DocumentList() {
  return (
    <DocumentListBox>
      <ul className="listHeader">
        {D_documentListHeader.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>

      <ul className="list">
        {D_documentList.map((v, i) => (
          <li key={i}>
            <span>{v.no}</span>
            <span>{moment(v.date).format("YYYY.MM.DD HH:mm:SS")}</span>
            <span>{v.id}</span>
            <span>{v.name}</span>
            <span>{v.number}</span>
            <span>{v.jurisdiction}</span>
          </li>
        ))}
      </ul>
    </DocumentListBox>
  );
}

const DocumentListBox = styled.article`
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
      width: 230px;
    }

    &:nth-of-type(3) {
      width: 254px;
    }

    &:nth-of-type(4) {
      width: 240px;
    }

    &:nth-of-type(5) {
      width: 240px;
    }

    &:nth-of-type(6) {
      flex: 1;
    }
  }
`;
