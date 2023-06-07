import Components from "../../../../components";
const Icons = require("../../../../assets/Icons");
export default function LeftSidebar() {
  return (
    <Components.Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        height: "100vh",
        backgroundColor: "#314253",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <Components.Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Components.Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            position: "relative",
            marginTop: "2vh",
            marginBottom: "2vh",
          }}
        >
          <img
            src="/white-logo-full.png"
            alt="logo"
            fill
            style={{
              position: "relative",
              display: "block",
              height: "auto",
              width: "100%",
              maxWidth: "20vh",
            }}
          />
        </Components.Box>

        <Components.Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Icons.MenuIcon
            sx={{
              color: "white",
              mt: 1,
            }}
          />
        </Components.Box>
      </Components.Box>
      <Components.Divider
        sx={{
          borderBottomWidth: "1px",
          borderBottomColor: "#404e5b",
          margin: "3vh 0 3vh 0",
        }}
      />
      <Components.Box>
        <Components.Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Components.Typography
            variant="body1"
            color="#ededed"
            sx={{
              ml: 1,
              fontWeight: "700",
              fontSize: "1.2rem",
            }}
          >
            Ana Menü
          </Components.Typography>
          <Icons.ExpandMoreIcon
            sx={{
              color: "white",
            }}
          />
        </Components.Box>
        <Components.List
          sx={{
            color: "#ededed",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
          }}
        >
          <Components.ListItemButton dense>
            <Components.ListItemIcon>
              <Icons.HomeIcon
                sx={{
                  color: "#ededed",
                }}
              />
            </Components.ListItemIcon>
            <Components.ListItemText primary="Anasayfa" color="white" />
          </Components.ListItemButton>
          <Components.ListItemButton dense>
            <Components.ListItemIcon>
              <Icons.MailIcon
                sx={{
                  color: "#ededed",
                }}
              />
            </Components.ListItemIcon>
            <Components.Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Components.ListItemText
                primary="Mesajlar"
                color="#ededed"
                sx={{
                  color: "#ededed",
                }}
              />
              <Components.Chip
                size="small"
                label="9+"
                sx={{
                  backgroundColor: "#32a3ef",
                  color: "white",
                  fontSize: "0.7rem",
                  ml: 1,
                }}
              />
            </Components.Box>
          </Components.ListItemButton>
          <Components.ListItemButton dense>
            <Components.ListItemIcon>
              <Icons.PersonIcon
                sx={{
                  color: "#ededed",
                }}
              />
            </Components.ListItemIcon>
            <Components.ListItemText primary="Profilim" color="white" />
          </Components.ListItemButton>
          <Components.ListItemButton dense>
            <Components.ListItemIcon>
              <Icons.LogoutIcon
                sx={{
                  color: "#ededed",
                }}
              />
            </Components.ListItemIcon>
            <Components.ListItemText primary="Çıkış Yap" color="white" />
          </Components.ListItemButton>
        </Components.List>
      </Components.Box>

      <Components.Box>
        <Components.Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 2,
          }}
        >
          <Components.Typography
            variant="body1"
            color="#ededed"
            sx={{
              ml: 1,
              fontWeight: "700",
              fontSize: "1.2rem",
            }}
          >
            Keşfet
          </Components.Typography>
          <Icons.ExpandMoreIcon
            sx={{
              color: "white",
            }}
          />
        </Components.Box>
        <Components.List
          sx={{
            color: "#ededed",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
          }}
        >
          <Components.ListItemButton dense>
            <Components.ListItemText primary="İçerikler" color="white" />
          </Components.ListItemButton>

          <Components.ListItemButton dense>
            <Components.ListItemText primary="Paylaşımlar" color="white" />
          </Components.ListItemButton>

          <Components.ListItemButton dense>
            <Components.ListItemText primary="Gruplar" color="white" />
          </Components.ListItemButton>

          <Components.ListItemButton dense>
            <Components.ListItemText primary="Üyeler" color="white" />
          </Components.ListItemButton>

          <Components.ListItemButton dense>
            <Components.ListItemText primary="Etiketler" color="white" />
          </Components.ListItemButton>

          <Components.ListItemButton dense>
            <Components.ListItemText
              primary="Arşivlediğim İçerikler"
              color="white"
            />
          </Components.ListItemButton>
        </Components.List>
      </Components.Box>
    </Components.Box>
  );
}
