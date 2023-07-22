"use client";
import React, { MouseEvent } from "react";
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
import { pages } from "../helpers/AppStrings";
import MobileMenu from "./MobileMenu";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#B6B6B6",
    },
  },
});

const MenuBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" color="secondary">
        <Toolbar disableGutters sx={{ justifyContent: "center" }}>
          <MobileMenu
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            handleOpenNavMenu={handleOpenNavMenu}
          />
          {/* this is the larger component */}

          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              marginLeft: 5,
              display: { xs: "flex", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              letterSpacing: ".3rem",
              color: "white",
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
                sx={{ color: "black" }}
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
