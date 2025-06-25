import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Onu from "../pages/Onu"
import Restric from "../pages/Restric";
import ObjectivosHC from "../pages/objetHC";
import HuellaCarbono from "../pages/huellaCarbono";
import Grafico from "../pages/ejemplo";
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/onu" element={<Onu />} />
            <Route path="/Restric" element={<Restric />} />
            <Route path="/objetHc" element={<ObjectivosHC />} />
            <Route path="/hc" element={<HuellaCarbono />} />
            <Route path="/grafico" element={<Grafico />} />
            <Route path="*" element={<Login />} />
        </Routes>
    )
}