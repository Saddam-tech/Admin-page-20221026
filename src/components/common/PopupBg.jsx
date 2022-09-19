import styled from "styled-components";

export default function PopupBg({ bg, blur, off, index, left }) {
  function onClickBg() {
    if (off) off();
  }

  function getOpt() {
    let className = "";

    if (bg) className += " bg";
    if (blur) className += " blur";

    return className;
  }

  return (
    <PopupBgBox
      onClick={onClickBg}
      className={getOpt()}
      style={{ zIndex: index && index, left: left && left }}
    />
  );
}

const PopupBgBox = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 50;

  &.bg {
    background: rgba(255, 255, 255, 0.4);
  }

  &.blur {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
`;
