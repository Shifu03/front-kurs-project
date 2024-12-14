import { Route, Routes } from "react-router-dom";
import MainPage from "src/pages/MainPage/MainPage";


const AppRoutes = () =>{

    return <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/hui" element={<div>ahkjfhjksf</div>}/>
    </Routes>
}

export default AppRoutes;