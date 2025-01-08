import React from "react";
import styles from "./MyTickets.module.scss";
import TicketBlock from "../../components/TicketBlock/TicketBlock";

const MyTickets = () => {


	return (
		<div className={styles.content}>
			<div className={styles.title}>
				Мои билеты
			</div>
			<div className={styles.areaTickets}>
				<TicketBlock />
				<TicketBlock />
				<TicketBlock />
				<TicketBlock />
			</div>
		</div>
	);
};

export default MyTickets;