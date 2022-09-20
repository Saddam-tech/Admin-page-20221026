import styled from "styled-components";
import I_x_gray from "../../../asset/icon/I_x_gray.svg";

export default function ChkDelPopup({ off, funcDel }) {
  function onClickDelBtn() {
    funcDel();
  }

  return (
    <ChkDelPopupBox className="defaultPopup">
      <article className="topArea">
        <span className="blank" />
        <strong className="title">Delete</strong>
        <button className="exitBtn" onClick={() => off()}>
          <img src={I_x_gray} alt="" />
        </button>
      </article>

      <p className="cont">정말 삭제하시겠습니까?</p>

      <div className="btnBox">
        <button className="cancelBtn" onClick={() => off()}>
          Cancel
        </button>

        <button className="delBtn" onClick={onClickDelBtn}>
          Delete
        </button>
      </div>
    </ChkDelPopupBox>
  );
}
const ChkDelPopupBox = styled.section`
  width: 400px;
  height: 220px;
  padding: 30px 32px 36px;

  .topArea {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .blank,
    .exitBtn img {
      width: 16px;
    }

    .title {
      font-size: 18px;
      color: #202020;
    }
  }

  .cont {
    margin: 20px 0 0;
    font-weight: 500;
    text-align: center;
  }

  .btnBox {
    display: flex;
    gap: 16px;
    margin: 40px 0 0;

    button {
      flex: 1;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      background: #f1f1f1;
      border-radius: 10px;

      &.delBtn {
        color: #fff;
        background: #4c96d9;
      }
    }
  }
`;
