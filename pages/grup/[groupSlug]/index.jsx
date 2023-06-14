import Components from "@components";
import GroupComponents from "../components";
import { useState } from "react";
const Icons = require("../../../assets/Icons");
export default function GroupPage() {
  const [tab, setTab] = useState(0);

  const tabComponent = [
    <GroupComponents.GroupContents />,
    <GroupComponents.Users />,
    <GroupComponents.Statics />,
  ];

  const tabs = [
    {
      name: "Paylaşımlar",
    },
    {
      name: "Üyeler",
    },
    {
      name: "İstatistikler",
    },
  ];

  return (
    <Components.Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Components.Box
        sx={{
          width: "100%",
          position: "relative",
        }}
      >
        <img
          src="https://loremflickr.com/1024/768"
          style={{
            width: "100%",
            height: "50vh",
            maxHeight: "50vh",
            objectFit: "cover",
            filter: "brightness(0.8)",
          }}
        />
        <Components.Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src="https://loremflickr.com/320/240"
            style={{
              width: "25vh",
              backgroundColor: "#fff",
              height: "25vh",
              borderRadius: "50%",
              border: "1px solid rgba(0,0,0,0.5)",
              objectFit: "cover",
              boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.5)",
            }}
          />
        </Components.Box>
      </Components.Box>
      <Components.Box sx={{ width: "90%", margin: "0 auto", mt: 3 }}>
        <Components.Box sx={{ display: "flex", alignItems: "center" }}>
          <Components.Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#292D32",
              width: "100%",
            }}
          >
            Dizi ve Film Sevenler
          </Components.Typography>
          <Components.Button
            variant="text"
            startIcon={<Icons.SettingsIcon />}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              width: "20vw",
              textTransform: "none",
            }}
          >
            Grup Ayarları
          </Components.Button>
          <Components.Button
            variant="contained"
            startIcon={<Icons.PersonAddAlt1Icon />}
            sx={{
              backgroundColor: "#71C131",
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              width: "20vw",
              textTransform: "none",
            }}
          >
            Gruba Katıl
          </Components.Button>
        </Components.Box>
        <Components.Typography
          variant="body1"
          color="#292D32"
          sx={{
            width: "100%",
            mt: 2,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quod voluptates voluptatem quos.
          Voluptates, quibusdam, quia, quod voluptates voluptatem quos.
        </Components.Typography>
      </Components.Box>
      <Components.Button
        variant="text"
        startIcon={<Icons.SettingsIcon />}
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
            xl: "none",
          },
          width: "90%",
          margin: "0 auto",
          marginTop: 2,
          textTransform: "none",
        }}
      >
        Grup Ayarları
      </Components.Button>
      <Components.Button
        variant="contained"
        startIcon={<Icons.PersonAddAlt1Icon />}
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
            xl: "none",
          },
          width: "90%",
          margin: "0 auto",
          marginTop: 2,
          textTransform: "none",
        }}
      >
        Gruba Katıl
      </Components.Button>
      <Components.Box
        sx={{
          width: "90%",
          margin: "0 auto",
          marginTop: 4,
          padding: "1rem",
          boxSizing: "border-box",
        }}
      >
        <Components.List
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          {tabs.map((item, index) => {
            return (
              <Components.ListItem
                button
                onClick={() => setTab(index)}
                sx={{
                  width: "100%",
                  borderBottom:
                    index === tab ? "1px solid #71C131" : "1px solid #a2a2a2",
                  textAlign: "center",
                }}
              >
                <Components.Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    fontWeight: "bold",
                    color: index === tab ? "#71C131" : "#a2a2a2",
                  }}
                >
                  {item.name}
                </Components.Typography>
              </Components.ListItem>
            );
          })}
        </Components.List>

        <Components.List
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          {tabs.map((item, index) => {
            return (
              <Components.ListItem
                button
                onClick={() => setTab(index)}
                sx={{
                  width: "100%",
                  backgroundColor: index === tab ? "#71C131" : "",
                  textAlign: "center",
                  borderRadius: "5px",
                }}
              >
                <Components.Typography
                  variant="body2"
                  sx={{
                    width: "100%",
                    color: index === tab ? "white" : "#a2a2a2",
                  }}
                >
                  {item.name}
                </Components.Typography>
              </Components.ListItem>
            );
          })}
        </Components.List>
        {tabComponent[tab]}
      </Components.Box>
    </Components.Box>
  );
}
