import { Navigate, Route, Routes } from "react-router-dom";
import FeeSetting from "../page/setup/FeeSetting";

export default function Setup() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/setup/fee" />} />
      <Route path="/fee" element={<FeeSetting />} />
    </Routes>
  );
}
