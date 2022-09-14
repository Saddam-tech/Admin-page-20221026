import React, { useEffect, useState } from "react";
import styled from "styled-components";
import L_logo from "../asset/logo/L_logo.png";
import OtpAuthPopup from "../components/auth/OtpAuthPopup";
import PopupBg from "../components/common/PopupBg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailAlarm, setEmailAlarm] = useState("");
  const [pwAlarm, setPwAlarm] = useState("");
  const [otpAuthPopup, setOtpAuthPopup] = useState(false);

  function validateEmail(str) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(str);
  }

  function onClickLoginBtn() {
    setPwAlarm("The password you have entered does not coincide");
    setOtpAuthPopup(true);
  }

  useEffect(() => {
    if (email && !validateEmail(email))
      setEmailAlarm("Please enter a valid email address");
    else setEmailAlarm("");
  }, [email]);

  useEffect(() => {
    setPwAlarm("");
  }, [email, pw]);

  return (
    <>
      <LoginBox>
        <section className="loginSec">
          <article className="logoArea">
            <img src={L_logo} alt="" />
          </article>

          <article className="contArea">
            <div className="inputCont">
              <div className="contBox">
                <div className={`${emailAlarm && "alarmBox"} inputBox`}>
                  <input
                    type={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Account"
                  />
                </div>

                <p className="alarm">{emailAlarm}</p>
              </div>

              <div className="contBox">
                <div className={`${pwAlarm && "alarmBox"} inputBox`}>
                  <input
                    type={"password"}
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    placeholder="Password"
                  />
                </div>

                <p className="alarm">{pwAlarm}</p>
              </div>
            </div>

            <button
              className="loginBtn"
              disabled={!(email && pw) || emailAlarm || pwAlarm}
              onClick={onClickLoginBtn}
            >
              <strong>Login</strong>
            </button>
          </article>
        </section>
      </LoginBox>

      {otpAuthPopup && (
        <>
          <OtpAuthPopup off={setOtpAuthPopup} />
          <PopupBg off={setOtpAuthPopup} />
        </>
      )}
    </>
  );
}

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fff;

  .loginSec {
    width: 520px;
    overflow: hidden;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0px 8px 40px 4px rgba(0, 0, 0, 0.08);

    .logoArea {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      background: #202020;

      img {
        height: 100px;
      }
    }

    .contArea {
      display: flex;
      flex-direction: column;
      gap: 80px;
      padding: 60px 40px 40px;

      .inputCont {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .contBox {
          display: flex;
          flex-direction: column;
          gap: 8px;

          .inputBox {
            display: flex;
            border: 1px solid #ddd;
            border-radius: 4px;

            &:focus-within {
              border: 1px solid #888899;
              box-shadow: 0px 2px 4px rgba(136, 136, 153, 0.3);
            }

            &.alarmBox {
              color: #ca223a;
              border-color: #ca223a;
              box-shadow: 0px 2px 4px rgba(202, 34, 58, 0.3);
            }

            input {
              flex: 1;
              height: 48px;
              padding: 0 14px;
              font-size: 14px;
              font-weight: 500;
            }
          }

          .alarm {
            font-size: 14px;
            color: #ca223a;
          }
        }
      }

      .loginBtn {
        height: 56px;
        color: #fff;
        background: #202020;
        border-radius: 4px;

        &:enabled {
          &:hover {
            background: #4d4d4d;
          }
        }

        &:disabled {
          strong {
            opacity: 0.4;
          }
        }

        strong {
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
  }
`;
