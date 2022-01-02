import React,{useEffect} from 'react';
import Alert from '@mui/material/Alert';

export default function Notification({ type, msg, removeAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  });
  return(
      <Alert severity={type} variant="filled">{msg}</Alert>
  ) 
}