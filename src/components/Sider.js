import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';






const Sider = styled(Paper)(() => ({
    textAlign:'center',
    backgroundColor: '#fff',
    height:'1456px',
    width:'90px',
    position: 'absolute',
    top: '0%',
    borderRadius: '0px 50px 50px 0px',
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)',  
    paddingTop:'20px',
}));



export default function Layout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid item xs={24}>  
          <Sider>
               <img src='/ics.png' />
          </Sider>
        </Grid>
    </Box>
  );
}
