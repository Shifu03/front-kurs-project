import React from "react";
import styles from "./InputData.module.scss";

const InputData: React.FC<{
	value: string;
	setValue: any;
	label: string;
	placeholder: string;
	type?: React.HTMLInputTypeAttribute;
}> = ({ value, setValue, label, placeholder, type }) => {


	return (
		<div className={styles.wInput}>
			<div className={styles.label}>
				{label}
			</div>
			<input
				onChange={(ev) => {
					setValue(ev.target.value);
				}}
				value={value}
				className={styles.input}
				placeholder={placeholder}
				type={type}
			/>
		</div>
	);
};

export default InputData;