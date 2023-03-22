import { useState } from "react";
import styles from "./Header.module.css";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GradeIcon from "@mui/icons-material/Grade";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function Header() {
  const [burgerMenu, setBurgerMenu] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenBurgerMenu = (event) => {
    setBurgerMenu(event.currentTarget);
  };

  const handleCloseBurgerMenu = () => {
    setBurgerMenu(null);
  };

  const settings = ["Giriş Yap", "Kayıt Ol"];

  return (
    <AppBar position="static" className={styles.header}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Tooltip title="Open settings">
            <IconButton
              onClick={handleOpenBurgerMenu}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                color: "#1A1A1A",
                fontWeight: "bold",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="burger-menu-appbar"
            anchorEl={burgerMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(burgerMenu)}
            onClose={handleCloseBurgerMenu}
          >
            <Box sx={{ width: "30vw", display: { xs: "none", md: "flex" } }}>
              <Typography textAlign="center">Kategoriler</Typography>

              <MenuItem>
                <Typography textAlign="center">Kategoriler</Typography>
              </MenuItem>
            </Box>
          </Menu>

          <AdbIcon />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, ml: 4, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                color: "#1A1A1A",
                fontWeight: "bold",
                ml: 2,
              }}
              startIcon={<AccessTimeIcon />}
            >
              Son İçerikler
            </Button>

            <Button
              sx={{
                color: "#1A1A1A",
                fontWeight: "bold",
                ml: 2,
              }}
              startIcon={<TrendingUpIcon />}
            >
              Trendler
            </Button>

            <Button
              sx={{
                color: "#1A1A1A",
                fontWeight: "bold",
                ml: 2,
              }}
              startIcon={<WhatshotIcon />}
            >
              Sıcak İçerikler
            </Button>

            <Button
              sx={{
                color: "#1A1A1A",
                fontWeight: "bold",
                ml: 2,
              }}
              startIcon={<GradeIcon />}
            >
              Popüler
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                color: "#1A1A1A",
                fontWeight: "bold",
              }}
            >
              <SearchIcon />
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  color: "#1A1A1A",
                  fontWeight: "bold",
                }}
              >
                <PersonIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
