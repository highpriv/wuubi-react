import { useState } from "react";
import styles from "./Header.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

import Components from "../../components";
const Icons = require("../../assets/Icons");

export default function Header() {
  const { data: session } = useSession();

  const [burgerMenu, setBurgerMenu] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleAuthButton = (type) => {
    if (type === "login") {
      signIn();
    } else if (type === "register") {
    } else if (type === "logout") {
      signOut();
    } else if (type === "profile") {
      window.location.href = "/u/" + session.user.username;
    }
  };

  const handleOpenBurgerMenu = (event) => {
    setBurgerMenu(event.currentTarget);
  };

  const handleCloseBurgerMenu = () => {
    setBurgerMenu(null);
  };

  const settings = [
    {
      title: "Giriş Yap",
      type: "login",
      auth: false,
    },
    {
      title: "Kayıt Ol",
      type: "register",
      auth: false,
    },
    {
      title: "Profil",
      type: "profile",
      auth: true,
    },
    {
      title: "Hesabımı Düzenle",
      type: "profile-edit",
      auth: true,
    },
    {
      title: "Çıkış Yap",
      type: "logout",
      auth: true,
    },
  ];

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
                display: { xs: "flex", md: "flex" },
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
                maxWidth: { xs: "75vw", md: "30vw" },
              }}
            >
              <Components.Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Components.Grid item xs={6} md={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">
                      Gündem
                    </Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6} md={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">
                      Spor
                    </Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6} md={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">
                      Teknoloji ve Bilim
                    </Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6} md={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">
                      Astroloji
                    </Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6} md={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">
                      Kültür ve Sanat
                    </Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6} md={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">
                      Dizi ve Film
                    </Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6} md={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">
                      Sağlık
                    </Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6} md={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">
                      Oyun
                    </Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6} md={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">
                      Yemek
                    </Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6} md={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">
                      Moda
                    </Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6} md={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">
                      Goygoy
                    </Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
                <Components.Grid item xs={6} md={6}>
                  <Components.MenuItem>
                    <Components.Typography textAlign="center">
                      Seyahat
                    </Components.Typography>
                  </Components.MenuItem>{" "}
                </Components.Grid>
              </Components.Grid>
            </Components.Box>
            <Components.Divider sx={{ mt: 2 }} light />

            <Components.Box
              sx={{
                ml: 2,
                color: "#AAAAAA",
              }}
            >
              <Components.Typography
                textAlign="center"
                sx={{
                  fontWeight: "bold",
                  mt: 2,
                  mb: 2,
                  textAlign: { sm: "left", md: "left" },
                }}
              >
                Wuubi, tamamen ücretsiz!
              </Components.Typography>
            </Components.Box>
            <Components.Box
              sx={{
                ml: 2,
                color: "#AAAAAA",
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
              }}
            >
              <Components.Typography
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  textAlign: { sm: "left", md: "left" },
                }}
              >
                Sosyal Medya
              </Components.Typography>
            </Components.Box>
            <Components.Box
              sx={{
                ml: 2,
                color: "#AAAAAA",
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

          <Components.Image src="/logo.png" width={100} height={30} />

          <Components.Box
            sx={{ flexGrow: 1, ml: 4, display: { xs: "none", md: "flex" } }}
          >
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

          <Components.Box
            sx={{
              display: "flex",
              float: "right",
              p: 1,
              m: 1,
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "flex-end",
              borderRadius: 1,
            }}
          >
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
              <Icons.ExploreIcon />
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
                {session?.user ? (
                  <Components.Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 24, height: 24 }}
                  />
                ) : (
                  <Icons.PersonIcon />
                )}
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
              {settings.map((setting) => {
                if (session?.user && setting.auth) {
                  return (
                    <Components.MenuItem
                      key={setting.type}
                      onClick={() => handleAuthButton(setting.type)}
                    >
                      <Components.Typography textAlign="center">
                        {setting.title}
                      </Components.Typography>
                    </Components.MenuItem>
                  );
                } else if (!session?.user && !setting.auth) {
                  return (
                    <Components.MenuItem
                      key={setting.type}
                      onClick={() => handleAuthButton(setting.type)}
                    >
                      <Components.Typography textAlign="center">
                        {setting.title}
                      </Components.Typography>
                    </Components.MenuItem>
                  );
                }
              })}
            </Components.Menu>
          </Components.Box>
        </Components.Toolbar>
      </Components.Container>
    </Components.AppBar>
  );
}
