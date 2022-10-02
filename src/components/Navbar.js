import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Navbar = styled(Paper)(() => ({
  backgroundColor: "#134B8A",
  height: "60px",
  borderRadius: "0px",
  textAlign: "center",
}));

export default function Layout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid item xs={24}>
        <Navbar></Navbar>
      </Grid>
    </Box>
  );
}
