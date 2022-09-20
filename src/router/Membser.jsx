import { Navigate, Route, Routes } from "react-router-dom";
import Det from "../page/member/Det";
import Secession from "../page/member/Secession";
import Use from "../page/member/Use";

export default function Member() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/member/use" />} />
      <Route path="/use" element={<Use />} />
      <Route path="/secession" element={<Secession />} />
      <Route path="/det/:id" element={<Det />} />
    </Routes>
  );
}
