import React, { useState } from "react";
import styles from "./Register.module.scss";
import InputData from "../../components/InputData/InputData";
import ActionButton from "../../components/ActionButton/ActionButton";
import { toast } from "react-toastify";
import { fetchGetProfile } from "src/api/api";
import { setUser } from "src/store/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchPostRegistration } from "src/api/api";

const Register = () => {

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [passwordSecond, setPasswordSecond] = useState<string>("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleReg = async () => {
		let res: any;
		let profile: any;
		try {
		  res = await fetchPostRegistration(email, password);
	
		  if (res.data.accessToken) {
			localStorage.setItem("accessToken", res.data.accessToken);
			toast.success("Успешная рагистрация");
		  } else {
			toast.error(res.data.message);
			return;
		  }

		  	navigate("/login");
		  
		} catch (er: any) {
		  console.log(er);
		  toast.error(er.response?.data?.message);
		}		
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