import React, { useState } from "react";
import styles from "./Login.module.scss";
import InputData from "../../components/InputData/InputData";
import ActionButton from "../../components/ActionButton/ActionButton";
import { fetchPostLogin, fetchGetProfile } from "src/api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "src/store/user";

const Login = () => {

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogin = async () => {
		let res: any;
		let profile: any;
		try {
		  res = await fetchPostLogin(email, password);
	
		  if (res.data.accessToken) {
			localStorage.setItem("accessToken", res.data.accessToken);
			toast.success("Успешная авторизация");
		  } else {
			toast.error(res.data.message);
			return;
		  }
	
		  profile = await fetchGetProfile();
	
		  console.log("fetchGetProfile", profile.data);
	
		  dispatch(setUser(profile.data));
		  navigate("/");
	
		} catch (er: any) {
		  console.log(er);
		  toast.error(er.response.data.message);
		}
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