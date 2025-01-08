import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import user from 'src/assets/imgs/user.svg';
import loop from "src/assets/imgs/loop.svg";
import { toast } from "react-toastify";
import { fetchGetAllEvents, fetchGetEvents } from "src/api/api";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	const [searchVal, setSearchVal] = useState("");

	const handleSearch = () => {

	}

	const handleAllEvents = async () => {
		let events: any;
		try{
			events = await fetchGetAllEvents();
			navigate("/catalog", { state: { events: events.data, category: "Все" } });

		} catch (er: any) {
			console.log(er);
			toast.error(er.response.data.message);
		}
	}

	const handleMusicEvents = async () => {
		let events: any;
		try{
			events = await fetchGetEvents(2);
			navigate("/catalog", { state: { events: events.data, category: "Музыка" } });

		} catch (er: any) {
			console.log(er);
			toast.error(er.response.data.message);
		}
	}

	const handleTheatreEvents = async () => {
		let events: any;
		try{
			events = await fetchGetEvents(3);
			navigate("/catalog", { state: { events: events.data, category: "Театр" } });

		} catch (er: any) {
			console.log(er);
			toast.error(er.response.data.message);
		}
	}
	const handleBigTheatreEvents = async () => {
		let events: any;
		try{
			events = await fetchGetEvents(4);
			navigate("/catalog", { state: { events: events.data, category: "Большой театр" } });

		} catch (er: any) {
			console.log(er);
			toast.error(er.response.data.message);
		}
	}
	const handleCircusEvents = async () => {
		let events: any;
		try{
			events = await fetchGetEvents(5);
			navigate("/catalog", { state: { events: events.data, category: "Цирк" } });

		} catch (er: any) {
			console.log(er);
			toast.error(er.response.data.message);
		}
	}
	const handleAquaparkEvents = async () => {
		let events: any;
		try{
			events = await fetchGetEvents(6);
			navigate("/catalog", { state: { events: events.data, category: "Аквапарк" } });

		} catch (er: any) {
			console.log(er);
			toast.error(er.response.data.message);
		}
	}
	const handleSportEvents = async () => {
		let events: any;
		try{
			events = await fetchGetEvents(7);
			navigate("/catalog", { state: { events: events.data, category: "Спорт" } });

		} catch (er: any) {
			console.log(er);
			toast.error(er.response.data.message);
		}
	}
	const handleClubEvents = async () => {
		let events: any;
		try{
			events = await fetchGetEvents(8);
			navigate("/catalog", { state: { events: events.data, category: "Клуб" } });

		} catch (er: any) {
			console.log(er);
			toast.error(er.response.data.message);
		}
	}
	
	const handleHumorEvents = async () => {
		let events: any;
		try{
			events = await fetchGetEvents(9);
			navigate("/catalog", { state: { events: events.data, category: "Юмор" } });

		} catch (er: any) {
			console.log(er);
			toast.error(er.response.data.message);
		}
	}

	const toMainPage = async () => {
		let events: any;
		try{
			events = await fetchGetAllEvents();
			navigate("/", { state: { events: events.data} });

		} catch (er: any) {
			console.log(er);
			toast.error(er.response.data.message);
		}
	}

	useEffect(()=>{
		toMainPage();
	},[])

	return (
		<div className={styles.header}>
			<div className={styles.wrap}>
				<div className={styles.logo} onClick={toMainPage}>
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
				<img src={user} alt={""} />
			</div>
			<div className={styles.line}>
			</div>
			<div className={styles.sections}>
				<div onClick={handleAllEvents}>Все</div>
				<div onClick={handleMusicEvents}>Музыка</div>
				<div onClick={handleTheatreEvents}>Театр</div>
				<div onClick={handleBigTheatreEvents}>Большой театр</div>
				<div onClick={handleCircusEvents}>Цирк</div>
				<div onClick={handleAquaparkEvents}>Аквапарк</div>
				<div onClick={handleSportEvents}>Спорт</div>
				<div onClick={handleClubEvents}>Клуб</div>
				<div onClick={handleHumorEvents}>Юмор</div>
			</div>
			<div className={styles.line}>
			</div>
		</div>
	);
};

export default Header;