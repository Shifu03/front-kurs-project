import React from "react";
import styles from "./TicketBlock.module.scss";
import exImg from "src/assets/imgs/exImg.png";
import ActionButton from "../ActionButton/ActionButton";

const TicketBlock = () => {


	return (
		<div className={styles.content}>
			<div className={styles.wrap}>
				<img src={exImg} alt={""}/>
				<div className={styles.info}>
					<div className={styles.title}>
						Title
					</div>
					<div className={styles.date}>
						20.12.2024 10:00
					</div>
					<div className={styles.locaton}>
						location
					</div>
					<div className={styles.description}>
						haskjfhj skjfhkjsh dfj hsjak fhjkhsdk jfhjkshdaf kjhasjkdf jskadf kjsdhaf kjh sdkjfh kjsd hfjk hskdjahf jksdh fjhsd fjkhskjdf hksjdf hkjsdh fkjsh dfkjhaskjdf hkjsadfhhd
					</div>
				</div>
			</div>
			<ActionButton className={styles.btn}>
				отменить бронь
			</ActionButton>
		</div>
	);
};

export default TicketBlock;