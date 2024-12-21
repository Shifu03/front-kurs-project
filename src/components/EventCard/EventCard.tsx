import React from "react";
import styles from "./EventCard.module.scss";

const EventCard: React.FC<{
	img: string,
	name: string,
	dateFrom: string,
	dateTo: string,
	location: string,
	time: string
}> = ({ dateTo, img, name, time, location, dateFrom }) => {

	return (
		<div className={styles.content}>
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