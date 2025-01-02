import React from "react";
import styles from "./BookTicket.module.scss";
import exImg from "src/assets/imgs/exImg.png";


const BookTicket = () => {


	return (
		<div className={styles.content}>
			<div className={styles.blockBook}>
				<div className={styles.info}>
					<img src={exImg} alt={""} className={styles.img}/>
					<div className={styles.wInfo}>
						<div className={styles.title}>
							Заголовок
						</div>
						<div>
							20.12.2024 - 24.12.2024
						</div>
						<div>
							20:00
						</div>
						<div>
							Организатор
						</div>
						<div>
							Описание... ashdgahj dhgahdgjahs gdhja gsdh ajhsdg jhags dhjgas dgahjs dghja gshjdg ahjgsdh agshd ajs dgjhs dhjag dhg asdghjas dhag sdhgjahsd jahsd hjas djhags dh asdhasg dh aj
						</div>
					</div>
				</div>
				<div className={styles.footer}>
					<div>

					</div>
					<div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default BookTicket;