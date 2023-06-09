import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#36454F", color: "#DDE6ED" }}>
        <Toolbar>
          <Typography variant="h4" flexGrow="1">
            @xios-@mui
          </Typography>
          <Box sx={{ justifyContent: "flex-end" }}>
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Button color="inherit">Home</Button>
            </Link>
            <Link
              to="/get"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Button color="inherit">Get</Button>
            </Link>
            <Link
              to="/post"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Button color="inherit">Post</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
