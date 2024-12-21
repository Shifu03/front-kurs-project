import React, { useState } from "react";
import styles from "./Login.module.scss";
import InputData from "../../components/InputData/InputData";
import ActionButton from "../../components/ActionButton/ActionButton";

const Login = () => {

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleLogin = () => {

	};

	return (
		<div className={styles.content}>
			<div className={styles.title}>
				Вход
			</div>
			<div className={styles.area}>
				<InputData value={email} setValue={setEmail} label={"Электронная почта"} placeholder={"Введите email"} />
				<InputData value={password} setValue={setPassword} label={"Пароль"} placeholder={"Введите пароль"}
									 type={"password"} />
				<ActionButton onClick={handleLogin}>
					Войти
				</ActionButton>
			</div>
		</div>
	);
};

export default Login;