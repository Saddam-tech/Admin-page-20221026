import styled from "styled-components";
import E_chart1 from "../asset/example/dashboard/E_chart1.svg";
import E_chart2 from "../asset/example/dashboard/E_chart2.svg";
import E_chart3 from "../asset/example/dashboard/E_chart3.svg";
import I_upArw3_green from "../asset/icon/I_upArw3_green.svg";
import I_dnArw3_red from "../asset/icon/I_dnArw3_red.svg";
import { D_categoryList } from "../data/D_dashboard";
import { useState } from "react";
import DocumentList from "../components/dashboard/DocumentList";
import CerRegist from "../components/dashboard/CerRegist";

export default function DashBoard() {
  const [category, setCategory] = useState(D_categoryList[0]);

  return (
    <DashBoardBox>
      <ul className="chartList">
        <li>
          <div className="infoBox">
            <p className="key">기업회원 수</p>
            <p className="value">{(19351113).toLocaleString("eu", "US")}</p>
            <span className={`up change`}>
              <img src={I_upArw3_green} alt="" />
              <p>21.17%</p>
            </span>
          </div>

          <div className="chartBox">
            <img src={E_chart1} alt="" />
          </div>
        </li>

        <li>
          <div className="infoBox">
            <p className="key">프로젝트 수</p>
            <p className="value">{(19351113).toLocaleString("eu", "US")}</p>
            <span className={`dn change`}>
              <img src={I_dnArw3_red} alt="" />
              <p>21.17%</p>
            </span>
          </div>

          <div className="chartBox">
            <img src={E_chart2} alt="" />
          </div>
        </li>

        <li>
          <div className="infoBox">
            <p className="key">CER 수량</p>
            <p className="value">{(19351113).toLocaleString("eu", "US")}</p>
            <span className={`up change`}>
              <img src={I_upArw3_green} alt="" />
              <p>21.17%</p>
            </span>
          </div>

          <div className="chartBox">
            <img src={E_chart1} alt="" />
          </div>
        </li>

        <li>
          <div className="infoBox">
            <p className="key">eCER 수량</p>
            <p className="value">{(19351113).toLocaleString("eu", "US")}</p>
            <span className={`up change`}>
              <img src={I_upArw3_green} alt="" />
              <p>21.17%</p>
            </span>
          </div>

          <div className="chartBox">
            <img src={E_chart3} alt="" />
          </div>
        </li>

        <li>
          <div className="infoBox">
            <p className="key">상쇄 수량</p>
            <p className="value">{(19351113).toLocaleString("eu", "US")}</p>
            <span className={`up change`}>
              <img src={I_upArw3_green} alt="" />
              <p>21.17%</p>
            </span>
          </div>

          <div className="chartBox">
            <img src={E_chart1} alt="" />
          </div>
        </li>
      </ul>

      <section className="dataSec">
        <ul className="categoryList">
          {D_categoryList.map((v, i) => (
            <li
              key={i}
              className={`${category === v && "on"}`}
              onClick={() => setCategory(v)}
            >
              {v}

              <div className="line" />
            </li>
          ))}
        </ul>

        {category === "Document Req.List / 1" ? <DocumentList /> : <></>}
        {category === "CER registration request / 4" ? <CerRegist /> : <></>}
      </section>
    </DashBoardBox>
  );
}

const DashBoardBox = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 1480px;
  margin: 50px 0 0 40px;

  .chartList {
    display: flex;
    gap: 30px;

    li {
      display: flex;
      justify-content: space-between;
      min-width: 272px;
      width: 272px;
      height: 120px;
      padding: 20px 20px 20px 24px;
      background: #202020;
      border-radius: 10px;

      .infoBox {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .key {
          font-size: 14px;
          font-weight: 500;
        }

        .value {
          font-size: 20px;
          font-weight: 600;
        }

        .change {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 4px 0 0;
          font-size: 14px;
          font-weight: 600;

          &.up {
            color: #34e4b5;
          }

          &.dn {
            color: #e03a45;
          }
        }
      }

      .chartBox {
        display: flex;
        align-items: flex-end;
        width: 104px;

        img {
          width: 100%;
        }
      }
    }
  }

  .dataSec {
    background: #202020;
    border-radius: 10px;

    .categoryList {
      display: flex;
      height: 70px;
      padding: 0 12px;
      border-bottom: 1px solid #333;

      li {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 12px;
        color: rgba(255, 255, 255, 0.5);
        position: relative;
        cursor: pointer;

        &.on {
          color: #fff;

          .line {
            display: block;
          }
        }

        .line {
          display: none;
          height: 4px;
          font-size: 16px;
          font-weight: 600;
          background: #4c96d9;
          right: 6px;
          bottom: 0px;
          left: 6px;
          position: absolute;
        }
      }
    }

    .contArea {
      padding: 30px;
    }
  }
`;
