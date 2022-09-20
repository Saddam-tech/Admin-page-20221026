import { Navigate, Route, Routes } from "react-router-dom";
import EcerDet from "../page/ecer/EcerDet";
import EcerList from "../page/ecer/EcerList";
import MintList from "../page/ecer/MintList";

export default function Ecer() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ecer/ecerlist" />} />
      <Route path="/ecerlist" element={<EcerList />} />
      <Route path="/ecerlist/:id" element={<EcerDet />} />
      <Route path="/mintlist" element={<MintList />} />
    </Routes>
  );
}
