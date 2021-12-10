import React, { Component } from "react";

import styled from "styled-components";
import { Typography,Link } from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';

const FooterContainer = styled.div`
   position: absolute;
   bottom: 0;
   width: 100% !important;
   height: 50px !important ;
   padding-top:10px;
   color:#ffff;
   background:black;
   display:flex;
   justify-content:center;
   align-items:center;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        {/* <GitHubIcon/> */}
        <Link
            underline="none"
            target="_blank"
            href="https://github.com/"
            >
            <GitHubIcon/>
        </Link>
        <Typography>Amit K Rout</Typography>
      </FooterContainer>
    );
  }
}

export default Footer;