import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import { colors, createTheme, ThemeProvider } from "@mui/material";
import MobileMenu from "./MobileMenu";

const pages = ["about", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const theme = createTheme({
  palette: {
    primary: {
      main: "#B6B6B6",
    },
    secondary: {
      main: colors.red[500],
    },
  },
});

const MenuBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" color="secondary">
          <Toolbar disableGutters sx={{ justifyContent: "center"}}>
         {/* <MobileMenu pages={pages} handleOpenNavMenu={handleOpenNavMenu} handleCloseNavMenu={handleCloseNavMenu}/> */}
            {/* this is the larger componet */}
            
            <Typography
              variant="h6"
              component="a"
              href=""
              sx={{
                marginLeft: 5,
                display: { xs: "flex", md: "flex" },
                flexGrow: 1,
                fontFamily: "monospace",
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ZeroBit Consulting
            </Typography>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ color: "black",  }}
                >
                  <Link key={page} href={page}>
                    {page}
                  </Link>
                </Button>
              ))}
            </Box>

          </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
export default MenuBar;
