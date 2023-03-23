import { useState } from "react";
import styles from "./Header.module.css";

import Image from "next/image";
import Components from "../../components";
const Icons = require("../../assets/Icons");

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
    <Components.AppBar position="static" className={styles.header}>
      <Components.Container maxWidth="xl">
        <Components.Toolbar disableGutters>
          <Components.Tooltip title="Open settings">
            <Components.IconButton
              onClick={handleOpenBurgerMenu}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                color: "#1A1A1A",
                fontWeight: "bold",
                mt: 1,
              }}
            >
              <Icons.MenuIcon />
            </Components.IconButton>
          </Components.Tooltip>
          <Components.Menu
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
            <Components.Box
              sx={{
                ml: 2,
                color: "#AAAAAA",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Components.Typography
                textAlign="center"
                sx={{ fontWeight: "bold", mt: 2, mb: 2 }}
              >
                Kategoriler
              </Components.Typography>
            </Components.Box>
            <Components.Box
              sx={{
                width: "auto",
                maxWidth: "30vw",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Components.Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Components.Grid item xs={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">Gündem</Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">Spor</Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">
                      Teknoloji ve Bilim
                    </Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">Astroloji</Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">Kültür ve Sanat</Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">Dizi ve Film</Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">Sağlık</Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">Oyun</Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">Yemek</Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">Moda</Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">Goygoy</Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">Seyahat</Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
              </Components.Grid>
            </Components.Box>
            <Components.Divider sx={{ mt: 2 }} light />

            <Components.Box
              sx={{
                ml: 2,
                color: "#AAAAAA",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Components.Typography
                textAlign="center"
                sx={{ fontWeight: "bold", mt: 2, mb: 2 }}
              >
                Wuubi, tamamen ücretsiz!
              </Components.Typography>
            </Components.Box>
            <Components.Box
              sx={{
                ml: 2,
                color: "#AAAAAA",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Components.WuubiButton text="Hesap Oluştur" />
              <Components.WuubiButton text="Giriş Yap" />
            </Components.Box>
            <Components.Divider sx={{ mt: 2, mb: 2 }} light />
            <Components.Box
              sx={{
                ml: 2,
                color: "#AAAAAA",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Components.Typography textAlign="center" sx={{ fontWeight: "bold", mb: 2 }}>
                Sosyal Medya
              </Components.Typography>
            </Components.Box>
            <Components.Box
              sx={{
                ml: 2,
                color: "#AAAAAA",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Components.Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Components.Grid item xs={1}>
                  <Components.IconButton>
                    <Icons.FacebookIcon />
                  </Components.IconButton>
                </Components.Grid>
                <Components.Grid item xs={1}>
                  <Components.IconButton>
                    <Icons.InstagramIcon />
                  </Components.IconButton>
                </Components.Grid>
                <Components.Grid item xs={1}>
                  <Components.IconButton>
                    <Icons.TwitterIcon />
                  </Components.IconButton>
                </Components.Grid>
                <Components.Grid item xs={1}>
                  <Components.IconButton>
                    <Icons.YouTubeIcon />
                  </Components.IconButton>
                </Components.Grid>
                <Components.Grid item xs={1}>
                  <Components.IconButton>
                    <Icons.LinkedInIcon />
                  </Components.IconButton>
                </Components.Grid>
              </Components.Grid>
            </Components.Box>
          </Components.Menu>

          <Image src="/logo.png" width={100} height={30} />

          <Components.Box sx={{ flexGrow: 1, ml: 4, display: { xs: "none", md: "flex" } }}>
            <Components.Button
              sx={{
                color: "#1A1A1A",
                fontWeight: "bold",
                ml: 2,
              }}
              startIcon={<Icons.AccessTimeIcon />}
            >
              Son İçerikler
            </Components.Button>

            <Components.Button
              sx={{
                color: "#1A1A1A",
                fontWeight: "bold",
                ml: 2,
              }}
              startIcon={<Icons.TrendingUpIcon />}
            >
              Trendler
            </Components.Button>

            <Components.Button
              sx={{
                color: "#1A1A1A",
                fontWeight: "bold",
                ml: 2,
              }}
              startIcon={<Icons.WhatshotIcon />}
            >
              Sıcak İçerikler
            </Components.Button>

            <Components.Button
              sx={{
                color: "#1A1A1A",
                fontWeight: "bold",
                ml: 2,
              }}
              startIcon={<Icons.GradeIcon />}
            >
              Popüler
            </Components.Button>
          </Components.Box>

          <Components.Box sx={{ flexGrow: 0 }}>
            <Components.IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                color: "#1A1A1A",
                fontWeight: "bold",
              }}
            >
              <Icons.SearchIcon />
            </Components.IconButton>
            <Components.Tooltip title="Open settings">
              <Components.IconButton
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
                <Icons.PersonIcon />
              </Components.IconButton>
            </Components.Tooltip>
            <Components.Menu
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
                <Components.MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Components.Typography textAlign="center">{setting}</Components.Typography>
                </Components.MenuItem>
              ))}
            </Components.Menu>
          </Components.Box>
        </Components.Toolbar>
      </Components.Container>
    </Components.AppBar>
  );
}
