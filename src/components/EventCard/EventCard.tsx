import React from "react";
import styles from "./EventCard.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchGetCurrentEvent } from "src/api/api";


const EventCard: React.FC<{
	img: string,
	name: string,
	dateFrom: string,
	dateTo: string,
	location: string,
	time: string
}> = ({ dateTo, img, name, time, location, dateFrom }) => {
	const navigate = useNavigate();

	const handleToBookTicket = async (title: string) => {
		let event: any;
		try{
			event = await fetchGetCurrentEvent(title);
			navigate("/book", { state: { event: event.data} });
	
		} catch (er: any) {
			console.log(er);
			toast.error(er.response.data.message);
		}
	}
  
	return (
		<div className={styles.content} onClick={()=>navigate("/book")}>
			<img src={img} alt={""} className={styles.img}/>
			<div className={styles.title}>
				{name}
			</div>
			<div className={styles.description}>
				<div>{(new Date(dateFrom)).toISOString().split('T')[0]} - {(new Date(dateTo)).toISOString().split('T')[0]}</div>
				<div>{time}</div>
				<div>{location}</div>
			</div>
		</div>
	);
};

export default EventCard;