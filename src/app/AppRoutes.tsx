import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "src/pages/MainPage/MainPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Header from "../components/Header/Header";
import MainGrid from "../components/MainGrid/MainGrid";
import BookTicket from "src/pages/BookTicket/BookTicket";
import NavigationInProfile from "src/components/NavigationInProfile/NavigationInProfile";
import Profile from "src/pages/Profile/Profile";
import MyTickets from "src/pages/MyTickets/MyTickets";
import Catalog from "src/pages/Catalog/Catalog";


const AppRoutes = () => {

	return <Routes>
		<Route path="/" element={<MainGrid>
			<Header />
			<Outlet />
		</MainGrid>}>
			<Route path="/" element={<MainPage />} />
			<Route path="/book" element={<BookTicket />} />
			<Route path="/catalog" element={<Catalog/>}/>
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