import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
;

const Navigation = () => {
  return (
    <Box
      sx={{
        height:{xs:'100px',md:'200px',lg:'200px',xl:'200px'},
        background: 'rgba( 255, 255, 255, 0.15 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 16px )',
        border: '1px solid rgba( 255, 255, 255, 0.18 )'
      }}
    >
      <Typography
        variant="h3"
        noWrap
        component="div"
        color="#ffff"
        pt={2}
        sx={{ mr: 2, display: { xs: 'inline', md: 'flex' }, fontSize: {xs:'40px', md:'60px'}}}
      >
        REACT URL<br/>SHORTNER
      </Typography>

    </Box>
  );
};
export default Navigation;
