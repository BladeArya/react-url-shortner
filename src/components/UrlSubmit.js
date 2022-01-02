import React, { useState } from "react";

import { Grid, TextField, LinearProgress} from "@mui/material";

import styles from "../assets/css/UrlSubmit.module.css";

import Notification from "./Notification";

function UrlSubmit(props) {
  const [enteredURL, setEnteredURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const HTTP_URL_VALIDATOR_REGEX =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

  const checkLink = (string) => {
    return string.match(HTTP_URL_VALIDATOR_REGEX);
  };

  const submitUrlHandler = (e) => {
    e.preventDefault();
    props.setShortURL("");
    if (checkLink(enteredURL)) {
      setError(false);
      props.getUrlLink(enteredURL, setIsLoading);
      setIsLoading(!isLoading);
      
    } else {
      setError(true);
      setEnteredURL("");
      showAlert(true, 'error', enteredURL+' is not correct url')
    }
  };

  const newDataHandler = () =>{
    setError(false);
    props.setShortURL("");
    setEnteredURL('');
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={styles.gridSection}
    >
      <form className={styles.formSection} onSubmit={submitUrlHandler}>
        <Grid item>
          <TextField
            error={error}
            fullWidth
            style={{ marginBottom: "20px" }}
            label="Enter your long url https://........."
            variant="outlined"
            type="text"
            value={enteredURL}
            onChange={(e) => setEnteredURL(e.target.value)}
            className={styles.formTextField}
          />
        </Grid>
        <Grid item>
          {!isLoading && !props.shortURL && (
              <button type="submit" className={styles.formButton}>
                  Short it!
              </button>
          )}
          {!isLoading && props.shortURL && (
              <button className={styles.formButton} onClick={newDataHandler}>
                  Enter New Url
              </button>
          )}
          {isLoading && <LinearProgress />}
          <br/>
          <br/>
          {alert.show && <Notification {...alert} removeAlert={showAlert} />} 
        </Grid>
      </form>
    </Grid>
  );
}

export default UrlSubmit;
