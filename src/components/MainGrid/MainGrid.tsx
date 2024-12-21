import React from "react";
import styles from "./MainGrid.module.scss";

const MainGrid:React.FC<{children:any}> = ({children}) => {

	return (
		<div className={styles.wContent}>
			<div className={styles.content}>
				{children}
			</div>
		</div>
	);
};

export default MainGrid;