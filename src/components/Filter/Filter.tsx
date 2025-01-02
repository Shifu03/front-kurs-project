import React, { useState } from "react";
import styles from "./Filter.module.scss";
import InputData from "../InputData/InputData";

const Filter = () => {
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [endDate, setEndDate] = useState<Date | null>(null);
	const [isCategory, setIsCategory] = useState<boolean>(false);
	const [isCategory1, setIsCategory1] = useState<boolean>(false);
	const [isCategory2, setIsCategory2] = useState<boolean>(false);
	const [isCategory3, setIsCategory3] = useState<boolean>(false);


	return (
		<div className={styles.filter}>
			<div className={styles.dateFilter}>

			</div>

			<div className={styles.inputDate}>
				<div>Дата с:</div>
				<input type={"date"} onChange={(ev) => {
					let date = new Date(ev.target.value)
					setStartDate(date);
				}} />
			</div>
			<div className={styles.inputDate}>
				<div>Дата до:</div>
				<input type={"date"} onChange={(ev) => {
					let date = new Date(ev.target.value)
					setEndDate(date);
				}} />
			</div>
			<div className={styles.line}></div>
			<div className={styles.wFilters}>
				<div className={styles.titleFilter}>
					Категория
				</div>
				<div className={styles.checkBox}>
					<input type={"checkbox"} checked={isCategory} onChange={(ev) => {
						setIsCategory(ev.target.checked);
					}} />
					<div>
						какая то категория
					</div>
				</div>
				<div className={styles.checkBox}>
					<input type={"checkbox"} checked={isCategory1} onChange={(ev) => {
						setIsCategory1(ev.target.checked);
					}} />
					<div>
						какая то категория
					</div>
				</div>
				<div className={styles.checkBox}>
					<input type={"checkbox"} checked={isCategory2} onChange={(ev) => {
						setIsCategory2(ev.target.checked);
					}} />
					<div>
						какая то категория
					</div>
				</div>
				<div className={styles.checkBox}>
					<input type={"checkbox"} checked={isCategory3} onChange={(ev) => {
						setIsCategory3(ev.target.checked);
					}} />
					<div>
						какая то категория
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filter;