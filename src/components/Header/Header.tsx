import React, { useState } from "react";
import styles from "./Header.module.scss";
import user from 'src/assets/imgs/user.svg';
import loop from "src/assets/imgs/loop.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {

	const [searchVal, setSearchVal] = useState("");

	const navigate = useNavigate();

	const handleSearch = () => {

	}

	return (
		<div className={styles.header}>
			<div className={styles.wrap}>
				<div className={styles.logo}>
					LOGO
				</div>
				<div className={styles.wrapInput}>
					<input
						onChange={(ev) => {
							setSearchVal(ev.target.value);
						}}
						value={searchVal}
						className={styles.searchBlock}
					/>
					<div className={styles.block} onClick={handleSearch}>
						<img src={loop} alt={""} />
					</div>
				</div>
				<img src={user} alt={""} onClick={()=>{
					navigate("/profile");
				}}/>
			</div>
			<div className={styles.line}>
			</div>
			<div className={styles.sections}>
				<div>Все</div>
				<div>Музыка</div>
				<div>Театр</div>
				<div>Большой театр</div>
				<div>Цирк</div>
				<div>Аквапарк</div>
				<div>Спорт</div>
				<div>Клуб</div>
				<div>Юмор</div>
			</div>
			<div className={styles.line}>
			</div>
		</div>
	);
};

export default Header;