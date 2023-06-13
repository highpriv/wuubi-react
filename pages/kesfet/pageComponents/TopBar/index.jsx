import Components from "@components";
import { useState, useEffect } from "react";
const Icons = require("../../../../assets/Icons");
export default function TopBar({ setSelectedPage }) {
  const handleTabClick = (page) => {
    if (page === "logout") {
      signOut();
    } else {
      setSelectedPage(page);
    }
  };

  const [searchForm, setSearchForm] = useState("");

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const burgerMenuMain = [
    {
      name: "home",
      text: "Ana Sayfa",
    },
    {
      name: "profile",
      text: "Profilim",
    },
    {
      name: "logout",
      text: "Çıkış Yap",
    },
  ];

  const burgerMenuExplore = [
    {
      name: "contents",
      text: "İçerikler",
    },
    {
      name: "publications",
      text: "Paylaşımlar",
    },
    {
      name: "groups",
      text: "Gruplar",
    },
    {
      name: "users",
      text: "Üyeler",
    },
    {
      name: "hashtags",
      text: "Hashtagler",
    },
    {
      name: "archive",
      text: "Arşivlediğin İçerikler",
    },
  ];

  return (
    <Components.Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <Components.Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "1vw",
        }}
      >
        <Components.IconButton
          sx={{
            mr: 1,
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
          onClick={handleOpenUserMenu}
        >
          <Icons.MenuIcon />
        </Components.IconButton>

        <Components.Menu
          sx={{ mt: "2.8125rem", width: "100%", maxWidth: "100%" }}
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
          <Components.Divider sx={{ mt: 2 }}>
            <Components.Typography
              variant="body1"
              sx={{
                color: "#606060",
                fontWeight: "bold",
                fontSize: "1.25rem",
              }}
            >
              Ana Menü
            </Components.Typography>
          </Components.Divider>
          <Components.Grid container sx={{ p: 2, width: "100%" }}>
            {burgerMenuMain.map((item, index) => {
              return (
                <Components.Grid item xs={12}>
                  <Components.Button
                    onClick={() => handleTabClick(item.name)}
                    sx={{ width: "100%", textTransform: "none" }}
                  >
                    <Components.Typography
                      variant="body1"
                      sx={{ color: "#606060" }}
                    >
                      {item.text}
                    </Components.Typography>
                  </Components.Button>
                </Components.Grid>
              );
            })}
          </Components.Grid>
          <Components.Divider sx={{ mt: 2 }}>
            <Components.Typography
              variant="body1"
              sx={{
                color: "#606060",
                fontWeight: "bold",
                fontSize: "1.25rem",
              }}
            >
              Keşfet
            </Components.Typography>
          </Components.Divider>
          <Components.Grid container sx={{ p: 2, width: "100%" }}>
            {burgerMenuExplore.map((item, index) => {
              return (
                <Components.Grid item xs={12}>
                  <Components.Button
                    onClick={() => handleTabClick(item.name)}
                    sx={{ width: "100%", textTransform: "none" }}
                  >
                    <Components.Typography
                      variant="body1"
                      sx={{ color: "#606060" }}
                    >
                      {item.text}
                    </Components.Typography>
                  </Components.Button>
                </Components.Grid>
              );
            })}
          </Components.Grid>
        </Components.Menu>

        <Components.TextField
          placeholder="Search"
          value={searchForm}
          onChange={(e) => setSearchForm(e.target.value)}
          InputProps={{
            startAdornment: (
              <Components.InputAdornment position="start">
                <Icons.SearchIcon />
              </Components.InputAdornment>
            ),
          }}
          size="small"
          sx={{
            backgroundColor: "#F5F5F5",
            width: "100%",
          }}
        />
      </Components.Box>
      <Components.Box
        sx={{
          width: "100%",
          display: searchForm.length > 0 ? "none" : "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Components.Button
          size="small"
          sx={{
            color: "#606060",
            textTransform: "none",
          }}
        >
          <Icons.NotificationsIcon sx={{ mr: 1 }} />
          <Components.Typography
            variant="body1"
            color="#606060"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            Bildirimler
          </Components.Typography>
        </Components.Button>
        <Components.Button
          size="small"
          sx={{
            color: "#606060",
            textTransform: "none",
          }}
        >
          <Icons.QuestionAnswerIcon sx={{ mr: 1 }} />
          <Components.Typography
            variant="body1"
            color="#606060"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            Mesajlar
          </Components.Typography>
        </Components.Button>
        <Components.Button size="small">
          <Components.Avatar
            sx={{
              width: 32,
              height: 32,
              backgroundColor: "#314253",
              color: "white",
              fontSize: "16px",
            }}
          >
            CB
          </Components.Avatar>
        </Components.Button>
      </Components.Box>
    </Components.Box>
  );
}
