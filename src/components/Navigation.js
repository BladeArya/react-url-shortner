import * as React from 'react'
import styled from "styled-components"
import styles from '../assets/css/Navigation.module.css'

const HeaderContainer = styled.div`
   position: relative;
   top: 0;
   width: 100% !important;
   height: 50px !important ;
   padding-top:10px;
   display:flex;
   justify-content:center;
   align-items:center;
`;

const Navigation = () => {
  return (
    <HeaderContainer>
      <h1 className={styles.header}>Url Shortner</h1>
    </HeaderContainer>
    /*<Box
      sx={{
        height:{xs:'100px',md:'200px',lg:'200px',xl:'200px'},
        background: 'rgba( 255, 255, 255, 0.15 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 16px )',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        margin:'0 auto'
      }}
    >

    </Box>*/
  );
};
export default Navigation;
