import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import L_logoMin from "../../asset/logo/L_logoMin.png";
import { D_navList } from "../../data/D_Aside";

export default function NavBar() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname.split("/");

  return (
    <NavBarBox>
      <button className="logoBtn" onClick={() => navigate("/")}>
        <img src={L_logoMin} alt="" />
      </button>

      <nav>
        {D_navList.map((v, i) => (
          <details
            key={i}
            className={`${v.url && v.url.indexOf(pathname[1]) !== -1 && "on"}`}
            open={v.url && v.url.indexOf(pathname[1]) !== -1}
          >
            <summary>
              <div
                className="summaryBox"
                onClick={() => !v.det && navigate(`/${v.url}`)}
              >
                <img src={v.icon} alt="" />

                <p>{v.text}</p>
              </div>
            </summary>

            <ul className="detList">
              {v.det &&
                v.det.map((detV, detI) => (
                  <li
                    key={detI}
                    className={`${
                      detV.url.indexOf(pathname[2]) !== -1 && "on"
                    }`}
                    onClick={() => navigate(detV.url)}
                  >
                    <span className="dot" />
                    <p>{detV.text}</p>
                  </li>
                ))}
            </ul>
          </details>
        ))}
      </nav>
    </NavBarBox>
  );
}

const NavBarBox = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 34px;
  width: 240px;
  padding: 66px 0 0 0;
  color: #fff;
  background: #202020;
  top: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 3;

  .logoBtn {
    display: inline-block;
    margin: 0 0 0 40px;

    img {
      height: 28px;
    }
  }

  nav {
    width: 100%;
    padding: 0 0 0 20px;

    details {
      padding: 0 20px;
      border-radius: 10px 0px 0px 10px;
      opacity: 0.25;

      &.on {
        opacity: 1;
        background: #000;
      }

      summary {
        .summaryBox {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 44px;
          font-weight: 500;

          img {
            width: 20px;
          }
        }
      }
    }
  }
`;