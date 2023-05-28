import styles from "./userSettings.module.css";
import Components from "../../components";
const Icons = require("../../assets/Icons");
import EditPages from "./Components";
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function editProfile() {
  const menuActions = [
    {
      title: "Hesap Bilgileri",
      icon: <Icons.PersonIcon />,
      component: function () {
        return <EditPages.editUserProfile />;
      },
    },
    {
      title: "Beğendiklerim",
      icon: <Icons.FavoriteIcon />,
      component: function () {
        return <EditPages.LikedPosts />;
      },
    },
    {
      title: "Arşivlerim",
      icon: <Icons.BookmarkIcon />,
      component: function () {
        return <EditPages.ArchivedPosts />;
      },
    },
    {
      title: "Ayarlar",
      icon: <Icons.SettingsIcon />,
      component: function () {
        return <EditPages.Settings />;
      },
    },
    {
      title: "Çıkış Yap",
      icon: <Icons.LogoutIcon />,
      component: function () {
        signOut();
      },
    },
  ];
  const [selectedPage, setSelectedPage] = useState(menuActions[0]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.mainWrapper}>
      <Components.Box
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
        <div className={styles.wrapperSidebar}>
          <div className={styles.sideMenu}>
            <Components.Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                lineHeight: "2rem",
                color: "#262626",
                marginBottom: "1rem",
                marginTop: "2rem",
                marginLeft: "1rem",
                color: "#8e8e8e",
              }}
            >
              Hesap Ayarları
            </Components.Typography>
            <Components.List>
              {menuActions.map((action) => {
                return (
                  <Components.ListItemButton
                    onClick={() => {
                      setSelectedPage(action);
                    }}
                    sx={{
                      background:
                        selectedPage.title === action.title
                          ? "#e0e0e0"
                          : "none",
                    }}
                  >
                    <Components.ListItemIcon>
                      {action.icon}
                    </Components.ListItemIcon>
                    <Components.ListItemText
                      primary={action.title}
                      sx={{
                        color: "#6C6C6C",
                      }}
                    />
                  </Components.ListItemButton>
                );
              })}
            </Components.List>
          </div>
        </div>
      </Components.Box>
      <div className={styles.container}>
        <div className={styles.title}>
          <Components.IconButton
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Icons.SwapVertIcon />
          </Components.IconButton>
          <Components.Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: "1.8rem",
              color: "#262626",
            }}
          >
            {selectedPage.title}
          </Components.Typography>

          <Components.Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {menuActions.map((action) => {
              return (
                <Components.MenuItem
                  onClick={() => {
                    setSelectedPage(action);
                    handleClose();
                  }}
                  sx={{
                    backgroundColor:
                      selectedPage.title === action.title ? "#F2F2F2" : "white",
                  }}
                >
                  {action.title}
                </Components.MenuItem>
              );
            })}
          </Components.Menu>
        </div>
        <div className={styles.wrapper}>{selectedPage.component()}</div>
      </div>
    </div>
  );
}
