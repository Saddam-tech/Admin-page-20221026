import I_dashBoard from "../asset/icon/I_dashBoard.svg";
import I_member from "../asset/icon/I_member.svg";
import I_cer from "../asset/icon/I_cer.svg";
import I_ecer from "../asset/icon/I_ecer.svg";
import I_offset from "../asset/icon/I_offset.svg";
import I_setup from "../asset/icon/I_setup.svg";

export const D_navList = [
  {
    text: "Dashboard",
    icon: I_dashBoard,
    url: "dashboard",
  },
  {
    text: "Member",
    icon: I_member,
    url: "member",
    det: [
      { text: "In use Users", url: "use" },
      { text: "Secession Users", url: "secession" },
    ],
  },
  {
    text: "CER",
    icon: I_cer,
  },
  {
    text: "eCER",
    icon: I_ecer,
  },
  {
    text: "Offset",
    icon: I_offset,
  },
  {
    text: "Setup",
    icon: I_setup,
  },
];
