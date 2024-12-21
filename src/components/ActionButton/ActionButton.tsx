import React, { ButtonHTMLAttributes } from "react";
import cl from "classnames";
import styles from "./ActionButton.module.scss";

interface ActiveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
}


const ActionButton: React.FC<ActiveButtonProps> = ({ children, className, ...props }) => {

	return (
		<button className={cl(className, styles.btn)} {...props}>
			{children}
		</button>
	);
};

export default ActionButton;