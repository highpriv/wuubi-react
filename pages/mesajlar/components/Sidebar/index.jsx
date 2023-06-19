import Components from "@components";
const Icons = require("../../../../assets/Icons");
export default function SidebarMessages() {
  const sidebarItemsTop = [
    {
      icon: <Icons.TextsmsIcon sx={{ color: "#fff" }} />,
      text: "Mesajlar",
    },
    {
      icon: <Icons.WorkspacesRoundedIcon sx={{ color: "#fff" }} />,
      text: "Gruplar",
    },
    {
      icon: <Icons.LocalPhoneRoundedIcon sx={{ color: "#fff" }} />,
      text: "Aramalar",
    },
  ];

  const sidebarItemsBottom = [
    {
      icon: <Icons.CalendarMonthRoundedIcon sx={{ color: "#fff" }} />,
      text: "Takvim",
    },
    {
      icon: <Icons.BookmarkIcon sx={{ color: "#fff" }} />,
      text: "Arşivlediklerim",
    },
  ];

  return (
    <Components.Box
      sx={{
        width: "10vw",
        height: "100vh",
        maxHeight: "100vh",
        overflowY: "auto",
        backgroundColor: "#131313",
        boxSizing: "border-box",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "0.2em",
        },
        "&::-webkit-scrollbar-track": {
          background: "#888",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#f1f1f1",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      }}
    >
      <Components.Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        <Components.Image src="/icon.png" width={50} height={50} />
      </Components.Box>
      <Components.List
        sx={{
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "1rem",
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
      >
        {sidebarItemsTop.map((item, index) => (
          <Components.ListItem
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.2rem",
              padding: "1rem",
              borderRadius: "10px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#2e333d",
              },
            }}
            key={index}
          >
            {item.icon}
            <Components.Typography
              variant="caption"
              sx={{
                color: "#fff",
              }}
            >
              {item.text}
            </Components.Typography>
          </Components.ListItem>
        ))}
        <Components.Divider
          sx={{ width: "100%", backgroundColor: "#2e333d" }}
        />
        {sidebarItemsBottom.map((item, index) => (
          <Components.ListItem
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.2rem",
              padding: "1rem",
              borderRadius: "10px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#2e333d",
              },
            }}
            key={index}
          >
            {item.icon}
            <Components.Typography
              variant="caption"
              sx={{
                color: "#fff",
              }}
            >
              {item.text}
            </Components.Typography>
          </Components.ListItem>
        ))}
      </Components.List>
    </Components.Box>
  );
}
