import styled from "styled-components";

export default function SelectPopup({ off, list, setCont, dark }) {
  function onClickCont(v) {
    if (setCont) setCont(v);
    if (off) off();
  }

  return (
    <PselectPopupBox className={`${dark ? "dark" : ""} selectPopup`}>
      {list.map((v, i) => (
        <li key={i} onClick={() => onClickCont(v)}>
          <p>{v}</p>
        </li>
      ))}
    </PselectPopupBox>
  );
}

const PselectPopupBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #000;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 6px;
  top: 50px;
  position: absolute;
  overflow-y: scroll;
  z-index: 60;

  &.dark {
    border: 1px solid #ddd;
  }

  li {
    display: flex;
    align-items: center;
    height: 38px;
    padding: 0 14px;
    cursor: pointer;
  }
`;
