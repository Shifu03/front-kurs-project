import React from "react";
import styles from "./NavigationInProfile.module.scss";
import { useNavigate } from "react-router-dom";

const NavigationInProfile = () => {

	const navigate = useNavigate();

	return (
		<div className={styles.left}>
			<div>
				<div className={styles.name}>
					Имя Фамилия
				</div>
				<div className={styles.email}>
					почта@gmail.com
				</div>
			</div>
			<div className={styles.line}></div>
			<div onClick={()=>navigate("/profile/tickets")} className={styles.link}>Мои билеты</div>
			<div onClick={()=>navigate("/profile")} className={styles.link}>Настройки аккаунта</div>
			<div className={styles.line}></div>
			<div className={styles.logout}>
				Выход
			</div>
		</div>
	);
};

export default NavigationInProfile;