import Components from "@components";
const Icons = require("../../assets/Icons");
export default function GroupPage() {
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
            variant="contained"
            startIcon={<Icons.PersonAddAlt1Icon />}
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
          }}
        >
          <Components.ListItem
            button
            sx={{
              width: "100%",
              borderBottom: "2px solid #71C131",
              textAlign: "center",
            }}
          >
            <Components.Typography
              variant="body1"
              sx={{
                width: "100%",
                fontWeight: "bold",
                color: "#71C131",
              }}
            >
              Grup Paylaşımları
            </Components.Typography>
          </Components.ListItem>
          <Components.ListItem
            button
            sx={{
              width: "100%",
              textAlign: "center",
              color: "#a2a2a2",
              borderBottom: "2px solid #a2a2a2",
            }}
          >
            <Components.Typography variant="body1" sx={{ width: "100%" }}>
              Üyeler
            </Components.Typography>
          </Components.ListItem>
          <Components.ListItem
            button
            sx={{
              width: "100%",
              color: "#a2a2a2",
              borderBottom: "2px solid #a2a2a2",
              textAlign: "center",
            }}
          >
            <Components.Typography variant="body1" sx={{ width: "100%" }}>
              Etkinlikler
            </Components.Typography>
          </Components.ListItem>
          <Components.ListItem
            button
            sx={{
              width: "100%",
              color: "#a2a2a2",
              borderBottom: "2px solid #a2a2a2",
              textAlign: "center",
            }}
          >
            <Components.Typography variant="body1" sx={{ width: "100%" }}>
              Yönetim
            </Components.Typography>
          </Components.ListItem>
          <Components.ListItem
            button
            sx={{
              width: "100%",
              color: "#a2a2a2",
              borderBottom: "2px solid #a2a2a2",
              textAlign: "center",
            }}
          >
            <Components.Typography variant="body1" sx={{ width: "100%" }}>
              İstatistikler
            </Components.Typography>
          </Components.ListItem>
        </Components.List>
      </Components.Box>
    </Components.Box>
  );
}
