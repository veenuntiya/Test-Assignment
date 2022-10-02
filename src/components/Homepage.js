import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Content from "./Content";

const Homepage = styled(Paper)(() => ({}));

const Test = styled(Paper)(() => ({
  marginLeft: "90px",
  Height: "100%",
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  marginTop: "20px",
  marginLeft: "100px",
}));

// export default function AutoGrid() {

//   };

export default function AutoGrid() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        
        borderRadius: "0px",
        backgroundColor: "#e0e0e0",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5rem",
          marginLeft: "100px",
        }}
      >
        <Box xs={3}>
          <h1>Place List</h1>
        </Box>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormControl>
            <InputLabel id="demo-simple-select-label">Restaurent</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              size="small"
              onChange={handleChange}
              style={{
                width: "200px",
                borderRadius: "50px",
                backgroundColor: "#fff",
              }}
            >
              <MenuItem value={10}>Restaurant</MenuItem>
              <MenuItem value={20}>Bakery</MenuItem>
              <MenuItem value={30}>Cafe</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
            Search name...
            </InputLabel>
            <OutlinedInput
              size="small"
              id="outlined-adornment-password"
              style={{ borderRadius: "50px", backgroundColor: "#fff" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
               
                    edge="end"
                  >
                    <SearchIcon />
                 
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
      </Box>
      <Content />
    </Box>
  );
}
