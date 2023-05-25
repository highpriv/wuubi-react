import styles from "./editProfile.module.css";
import Components from "../../components";
const Icons = require("../../assets/Icons");
export default function editProfile() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.leftSidebar}>
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
              <Components.ListItemButton>
                <Components.ListItemIcon>
                  <Icons.PersonIcon />
                </Components.ListItemIcon>
                <Components.ListItemText
                  primary="Hesap Bilgileri"
                  sx={{
                    color: "#6C6C6C",
                  }}
                />
              </Components.ListItemButton>
              <Components.ListItemButton>
                <Components.ListItemIcon>
                  <Icons.FavoriteIcon />
                </Components.ListItemIcon>
                <Components.ListItemText
                  primary="Beğendiklerim"
                  sx={{
                    color: "#6C6C6C",
                  }}
                />
              </Components.ListItemButton>
              <Components.ListItemButton>
                <Components.ListItemIcon>
                  <Icons.BookmarkIcon />
                </Components.ListItemIcon>
                <Components.ListItemText
                  primary="Arşivlerim"
                  sx={{
                    color: "#6C6C6C",
                  }}
                />
              </Components.ListItemButton>
              <Components.ListItemButton>
                <Components.ListItemIcon>
                  <Icons.SettingsIcon />
                </Components.ListItemIcon>
                <Components.ListItemText
                  primary="Ayarlar"
                  sx={{
                    color: "#6C6C6C",
                  }}
                />
              </Components.ListItemButton>
              <Components.ListItemButton>
                <Components.ListItemIcon>
                  <Icons.LogoutIcon />
                </Components.ListItemIcon>
                <Components.ListItemText
                  primary="Çıkış Yap"
                  sx={{
                    color: "#6C6C6C",
                  }}
                />
              </Components.ListItemButton>
            </Components.List>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.wrapperProfile}>asdasd</div>
        </div>
      </div>
    </div>
  );
}
