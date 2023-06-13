import Components from "@components";
import PageComponents from "../MainArea/components";
const Icons = require("../../../../assets/Icons");
import { signOut } from "next-auth/react";

export default function LeftSidebar({ setSelectedPage }) {
  const handleTabClick = (page) => {
    if (page === "logout") {
      signOut();
    } else {
      setSelectedPage(page);
    }
  };

  const sidebarTabs = [
    {
      type: "main-menu",
      items: [
        {
          name: "home",
          component: <PageComponents.Contents />,
          text: "Ana Sayfa",
          icon: <Icons.HomeIcon sx={{ color: "#ededed" }} />,
        },

        {
          name: "profile",
          text: "Profilim",
          icon: <Icons.PersonIcon sx={{ color: "white" }} />,
        },
        {
          name: "logout",
          text: "Çıkış Yap",
          icon: <Icons.LogoutIcon sx={{ color: "white" }} />,
        },
      ],
    },
    {
      type: "explore",
      items: [
        {
          name: "contents",
          component: <PageComponents.Contents />,
          text: "İçerikler",
        },
        {
          name: "publications",
          component: <PageComponents.Publications />,
          text: "Paylaşımlar",
        },
        {
          name: "groups",
          component: <PageComponents.Publications />,
          text: "Gruplar",
        },
        {
          name: "users",
          component: <PageComponents.Publications />,
          text: "Üyeler",
        },
        {
          name: "hashtags",
          component: <PageComponents.Publications />,
          text: "Etiketler",
        },
        {
          name: "archived-contents",
          component: <PageComponents.Publications />,
          text: "Arşivlediğin İçerikler",
        },
      ],
    },
  ];

  return (
    <Components.Box
      sx={{
        width: "17vw",
        maxWidth: "100%",
        height: "100vh",
        backgroundColor: "#314253",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        padding: "2vw",
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
          {sidebarTabs
            .find((tab) => tab.type === "main-menu")
            .items.map((item, index) => (
              <Components.ListItemButton
                key={index}
                onClick={() => handleTabClick(item.name)}
                dense
              >
                <Components.ListItemIcon>{item.icon}</Components.ListItemIcon>
                <Components.ListItemText primary={item.text} color="#ededed" />
                {item.label}
              </Components.ListItemButton>
            ))}
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
          {sidebarTabs
            .find((tab) => tab.type === "explore")
            .items.map((item, index) => (
              <Components.ListItemButton
                key={index}
                onClick={() => handleTabClick(item.name)}
                dense
              >
                <Components.ListItemText primary={item.text} color="#ededed" />
              </Components.ListItemButton>
            ))}
        </Components.List>
      </Components.Box>
    </Components.Box>
  );
}
