import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "src/pages/MainPage/MainPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Header from "../components/Header/Header";
import MainGrid from "../components/MainGrid/MainGrid";


const AppRoutes = () => {

	return <Routes>
		<Route path="/" element={<MainGrid>
			<Header />
			<Outlet />
		</MainGrid>}>
			<Route path="/" element={<MainPage />} />
		</Route>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
	</Routes>;
};

export default AppRoutes;