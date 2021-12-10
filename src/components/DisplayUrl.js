import React from 'react'
import { Link } from "@mui/material";

import styles from "../assets/css/DisplayUrl.module.css";

function DisplayUrl(props) {
    return (
        <div className={styles.displaySection}>
            <h1>Short Url Link: </h1>
            <Link
                underline="none"
                target="_blank"
                href={props.shortURL}
                className={styles.urlSection}
                >
                {props.shortURL}
            </Link>
        </div>
    )
}

export default DisplayUrl
