import React from "react";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<div>
			<ToastContainer position="top-center" limit={3}/>
			<AppRoutes />
		</div>
	);
}

export default App;
