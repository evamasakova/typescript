import { HashRouter, Routes, Route } from "react-router-dom";
import MainView from "../MainVIew/MainView";
import CarList from "../CarList/CarList";

export default function AppRoutes(){
    return (
        <HashRouter>
            <Routes>
                <Route path = "/" element={<MainView />}  />
                <Route path = "/carlist" element={<CarList />}  />

            </Routes>
        </HashRouter>
    )
}