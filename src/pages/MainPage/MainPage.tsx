import React from "react";
import styles from "./MainPage.module.scss";
import { useNavigate } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";
import exImg from "src/assets/imgs/exImg.png";

const MainPage: React.FC<any> = () => {
	const navigate = useNavigate();


	return (<div className={styles.content}>
		<div className={styles.title}>
			Рекомендуем
		</div>
		<div>
			<div className={styles.areaCards}>
				{[...(new Array(17))].map((el) => {
					return <EventCard img={exImg} name={"name"} location={"Brest"} dateFrom={"10.10.2025"} dateTo={"10.10.2222"}
														time={"10:10"} />
				})}
			</div>
		</div>
	</div>);
};

export default MainPage;
