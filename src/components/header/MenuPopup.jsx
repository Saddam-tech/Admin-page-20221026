import styled from "styled-components";

export default function MenuPopup({ off }) {
  function onClickLogoutBtn() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <MenuPopupBox>
      <button onClick={() => off()}>My Profile</button>
      <button onClick={onClickLogoutBtn}>Logout</button>
    </MenuPopupBox>
  );
}

const MenuPopupBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 200px;
  padding: 16px 14px;
  font-size: 14px;
  color: #fff;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  top: 62px;
  right: 50px;
  position: fixed;
  z-index: 60;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  button {
    display: flex;
    align-items: center;
    opacity: 0.4;

    &:hover {
      opacity: 1;
    }
  }
`;
