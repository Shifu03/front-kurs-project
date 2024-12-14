import React from "react";
import styles from "./MainPage.module.scss"
import { useNavigate } from "react-router-dom";

const MainPage:React.FC<any> = ()=>{
    const navigate = useNavigate();

    return (<div className={styles.hui}>
        <div className={styles.title} onClick={()=>{
            navigate("/hui");
        }}>
            test route
        </div>
    </div>)
}

export default MainPage;
