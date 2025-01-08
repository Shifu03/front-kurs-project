import React, { useState } from "react";
import styles from "./Profile.module.scss";
import InputData from "../../components/InputData/InputData";
import ActionButton from "../../components/ActionButton/ActionButton";
import NavigationInProfile from "../../components/NavigationInProfile/NavigationInProfile";

const Profile = () => {

	const [email, setEmail] = useState("");

	const handleUpdateEmail = () => {

	};

	const handleUpdatePassword = () => {

	};

	const handleUpdateData = () => {

	};

	return (
		<div className={styles.right}>
			<div className={styles.title}>
				Настройки аккаунта
			</div>
			<div className={styles.area}>
				<div className={styles.input}>
					<InputData value={email} setValue={setEmail} label={"Электронная почта"} placeholder={"почта@gmail.com"} />
					<ActionButton className={styles.btn} onClick={handleUpdateEmail}>Редактировать</ActionButton>
				</div>
				<div className={styles.line2}></div>
				<div className={styles.input}>
					<InputData value={email} setValue={setEmail} label={"Пароль"} type={"password"}
										 placeholder={"введите пароль"} />
					<ActionButton className={styles.btn} onClick={handleUpdatePassword}>Редактировать</ActionButton>
				</div>
				<div className={styles.line2}></div>
				<div className={styles.input}>
					<div className={styles.contactDataTitle}>
						Контактные данные
					</div>
					<ActionButton className={styles.btn} onClick={handleUpdateData}>Редактировать</ActionButton>
				</div>
				<div className={styles.data}>
					<InputData value={email} setValue={setEmail} label={"Имя"} placeholder={"Имя"} />
					<InputData value={email} setValue={setEmail} label={"Фамилия"} placeholder={"Фамилия"} />
					<InputData value={email} setValue={setEmail} label={"Адрес"} placeholder={"Адрес"} />
				</div>
			</div>
		</div>
	);
};

export default Profile;