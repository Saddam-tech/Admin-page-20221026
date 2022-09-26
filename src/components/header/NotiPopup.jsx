import styled from "styled-components";

export default function NotiPopup({ off }) {
  return (
    <NotiPopupBox>
      <p className="title">Notifications</p>

      <ul className="notiList">
        {new Array(10).fill("").map((v, i) => (
          <li key={i} onClick={() => off()}>
            <p>
              알림입니다.알림입니다.알림입니다.알림입니다.알림입니다.알림입니다.알림입니다.알림입니다.알림입니다.알림입니다.알림입니다.알림입니다.알림입니다.알림입니다.알림입니다.알림입니다.
            </p>
          </li>
        ))}
      </ul>
    </NotiPopupBox>
  );
}

const NotiPopupBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 320px;
  height: 380px;
  padding: 14px 8px 24px 18px;
  font-size: 14px;
  color: #fff;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  top: 62px;
  right: 260px;
  position: fixed;
  z-index: 60;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  .title {
    font-weight: 500;
  }

  .notiList {
    display: flex;
    flex-direction: column;
    gap: 28px;
    overflow-y: scroll;
    padding: 0 10px 0 0;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      width: 4px;
      background-color: #ddd;
      border-radius: 10px;
    }

    li {
      cursor: pointer;

      p {
        display: -webkit-box;
        line-height: 20px;
        height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
`;
