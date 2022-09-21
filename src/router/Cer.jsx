import { Navigate, Route, Routes } from "react-router-dom";
import CerDet from "../page/cer/CerDet";
import CerList from "../page/cer/CerList";
import ReqDet from "../page/cer/ReqDet";
import ReqList from "../page/cer/ReqList";

export default function Cer() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cer/uselist" />} />
      <Route path="/uselist" element={<CerList />} />
      <Route path="/uselist/:id" element={<CerDet />} />
      <Route path="/reqlist" element={<ReqList />} />
      <Route path="/reqlist/:id" element={<ReqDet />} />
    </Routes>
  );
}
