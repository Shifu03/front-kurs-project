import React from "react";
import styles from "./EventCard.module.scss";
import { useNavigate } from "react-router-dom";

const EventCard: React.FC<{
	img: string,
	name: string,
	dateFrom: string,
	dateTo: string,
	location: string,
	time: string
}> = ({ dateTo, img, name, time, location, dateFrom }) => {

	const navigate = useNavigate();

	return (
		<div className={styles.content} onClick={()=>navigate("/book")}>
			<img src={img} alt={""} className={styles.img}/>
			<div className={styles.title}>
				{name}
			</div>
			<div className={styles.description}>
				<div>{dateFrom} - {dateTo}</div>
				<div>{time}</div>
				<div>{location}</div>
			</div>
		</div>
	);
};

export default EventCard;