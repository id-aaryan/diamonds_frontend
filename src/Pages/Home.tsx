import React, { useState } from 'react';
import SideMenu from '../Components/SideMenu.tsx';
import aaryan from "./../Images/aaryan.png";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: "100%",
  color: theme.palette.text.secondary,
}));

function Home() {
  const [open, setOpen] = useState(false);

  return (
    // <div style={{marginLeft:"5%", width: "95%", height:"100%"}}>
    <Box sx={{ display: 'flex', height:"100%", width:"100%"}}>

      <CssBaseline />
      <SideMenu open={open} setOpen={setOpen} />
      <Box sx={{ display: 'flex', height:"100%", width:"100%"}}>
        <Grid container spacing={2}>
          <Grid item xs={4.75} style={{marginLeft:5}}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={7} style={{marginLeft:5}}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
      