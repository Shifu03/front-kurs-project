import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./app/App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "react-toastify/dist/ReactToastify.min.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>
		
);
