import React, { useState } from "react";
import styles from "./Register.module.scss";
import InputData from "../../components/InputData/InputData";
import ActionButton from "../../components/ActionButton/ActionButton";

const Register = () => {

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [passwordSecond, setPasswordSecond] = useState<string>("");

	const handleReg = () => {

	};


	return (
		<div className={styles.content}>
			<div className={styles.title}>
				Регистрация
			</div>
			<div className={styles.area}>
				<InputData value={email} setValue={setEmail} label={"Электронная почта"} placeholder={"Введите email"} />
				<InputData value={password} setValue={setPassword} label={"Пароль"} placeholder={"Введите пароль"}
									 type={"password"} />
				<InputData value={passwordSecond} setValue={setPasswordSecond} label={"Подтвердите пароль"}
									 placeholder={"Введите пароль"}
									 type={"password"} />
				<ActionButton onClick={handleReg}>
					Зарегистрироваться
				</ActionButton>
			</div>
		</div>
	);
};

export default Register;