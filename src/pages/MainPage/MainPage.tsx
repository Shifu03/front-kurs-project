import React from "react";
import styles from "./MainPage.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";
import { toast } from "react-toastify";
import { fetchGetCurrentEvent } from "src/api/api";



const MainPage: React.FC<any> = () => {
	const location = useLocation();
	
	const events = location.state?.events.events;
	const category = location.state?.category;
	
	console.log("Received events:", events);

	return (<div className={styles.content}>
		<div className={styles.title}>
			Рекомендуем
		</div>
		<div className={styles.wrap}>
			<div className={styles.areaCards}>
				{events && events.length > 0 ? (
            events.map((event: any) => {
              return (
                <EventCard
                  key={event.id}
                  img={event.imageUrl}
                  name={event.title}
                  location={event.location}
                  dateFrom={event.startDate}
                  dateTo={event.endDate}
                  time={"10:10"}
                />
              );
            })
          ) : (
            <p>No events available</p>
          )}
			</div>
		</div>
	</div>);
};

export default MainPage;
