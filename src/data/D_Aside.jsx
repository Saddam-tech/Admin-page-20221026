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
    url: "cer",
    det: [
      { text: "In use Users", url: "cerlist" },
      { text: "Secession Users", url: "reqlist" },
    ],
  },
  {
    text: "eCER",
    icon: I_ecer,
    url: "ecer",
    det: [
      { text: "eCER lists", url: "ecerlist" },
      { text: "Minted lists", url: "mintlist" },
    ],
  },
  {
    text: "Offset",
    icon: I_offset,
    url: "offset",
    det: [
      { text: "Offset lists", url: "offsetlist" },
      { text: "Offset Prolect lists", url: "prolectlist" },
    ],
  },
  {
    text: "Setup",
    icon: I_setup,
    url: "setup",
    det: [{ text: "Fee setting", url: "fee" }],
  },
];
