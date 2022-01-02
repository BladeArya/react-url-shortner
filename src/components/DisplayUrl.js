import React from 'react'
import { Link } from "@mui/material";

import styles from "../assets/css/DisplayUrl.module.css";

function DisplayUrl(props) {
    return (
        <div className={styles.displaySection}>
            {props.shortURL!==''?<><span className={styles.displayurl}>Shortened Link:</span><Link
                underline="none"
                target="_blank"
                href={props.shortURL}
                className={styles.urlSection}
            >
                {props.shortURL}
            </Link></>:<span className={styles.displayurl}>Your Shortened Link will show here.. </span>
            }
        </div>
    )
}

export default DisplayUrl
