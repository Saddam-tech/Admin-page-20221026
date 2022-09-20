import { Navigate, Route, Routes } from "react-router-dom";

import OffsetList from "../page/offset/OffsetList";
import ProlectList from "../page/offset/ProlectList";

export default function Offset() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/offset/offsetlist" />} />
      <Route path="/offsetlist" element={<OffsetList />} />
      <Route path="/prolectlist" element={<ProlectList />} />
    </Routes>
  );
}
