import styled from "styled-components";
import I_rtArw_white from "../../asset/icon/I_rtArw_white.svg";
import I_ltArw_white from "../../asset/icon/I_ltArw_white.svg";

export default function PageNav({ page, setPage, total }) {
  let pageRange = Math.floor((page - 1) / 3) * 3;

  return (
    <PageBox className="pageBox">
      <button
        className="arwBtn"
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        <img src={I_ltArw_white} alt="" />
      </button>

      <ul className="pageList">
        {[pageRange + 1, pageRange + 2, pageRange + 3].map(
          (v, i) =>
            v <= Math.ceil(total / 10) && (
              <li
                key={i}
                className={`${v === page && "on"}`}
                onClick={() => setPage(i + 1)}
              >
                <strong>{v}</strong>
              </li>
            )
        )}
      </ul>

      <button
        className="arwBtn"
        disabled={page >= Math.ceil(total / 10)}
        onClick={() => setPage(page + 1)}
      >
        <img src={I_rtArw_white} alt="" />
      </button>
    </PageBox>
  );
}

const PageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;

  .arwBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    border-radius: 4px;

    &:disabled {
      display: none;
    }

    img {
      height: 14px;
    }
  }

  .pageList {
    display: flex;
    align-items: center;
    gap: 10px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 34px;
      height: 34px;
      font-size: 16px;
      font-weight: 700;
      border-radius: 4px;
      cursor: pointer;

      &.on {
        background: #333;
      }
    }
  }
`;
