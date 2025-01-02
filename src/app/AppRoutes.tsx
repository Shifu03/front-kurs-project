import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "src/pages/MainPage/MainPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Header from "../components/Header/Header";
import MainGrid from "../components/MainGrid/MainGrid";
import Profile from "../pages/Profile/Profile";
import NavigationInProfile from "../components/NavigationInProfile/NavigationInProfile";
import MyTickets from "../pages/MyTickets/MyTickets";
import BookTicket from "../pages/BookTicket/BookTicket";


const AppRoutes = () => {

	return <Routes>
		<Route path="/" element={<MainGrid>
			<Header />
			<Outlet />
		</MainGrid>}>
			<Route path="/" element={<MainPage />} />
			<Route path="/book" element={<BookTicket />} />
			<Route path="/profile" element={<div className={"profileContent"}>
				<NavigationInProfile />
				<Outlet/>
			</div>}>
				<Route path="/profile" element={<Profile />} />
				<Route path="/profile/tickets" element={<MyTickets />} />
			</Route>
		</Route>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
	</Routes>;
};

export default AppRoutes;