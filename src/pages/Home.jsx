import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import axios from "../images/axios.png";
import mui from "../images/mui.png";

function Home() {
  return (
    <Box sx={{ display: "flex", ml: 10 }}>
      <Paper
        elevation={1}
        sx={{ textAlign: "center", m: 10, height: 400, width: 400 }}
      >
        <img className="pic" src={axios} alt="axios-icon" />
        <h3>Axios</h3>
        <p style={{ color: "#9DB2BF" }}>Fetch API data with axios</p>
        <p style={{ padding: 20 }}>
          {" "}
          Axios is promise-based, which gives you the ability to take advantage
          of JavaScript's async and await for more readable asynchronous code.
        </p>
      </Paper>
      <Paper
        elevation={1}
        sx={{ textAlign: "center", m: 10, height: 400, width: 400 }}
      >
        <img className="pic" src={mui} alt="mui-icon" />
        <h3>Material ui</h3>
        <p style={{ color: "#9DB2BF" }}>
          Collection of advanced UI Componenet Framework{" "}
        </p>
        <p style={{ padding: 20 }}>
          It is an open-source React component library that implements Google's
          Material Design.
        </p>
      </Paper>
    </Box>
  );
}

export default Home;
