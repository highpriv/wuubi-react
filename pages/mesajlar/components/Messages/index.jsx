import Components from "@components";
import PageComponents from "../../components";
const Icons = require("../../../../assets/Icons");
export default function Messages() {
  const messages = [
    {
      id: 1,
      name: "Canberk",
      surname: "Beren",
      message: "Merhaba, naber? Nasılsın?",
      date: "12.12.2021",
      time: "12:12",
      avatar: "https://avatars.githubusercontent.com/u/61896468?v=4",
    },
    {
      id: 2,
      name: "Canberk",
      surname: "Beren",
      message: "Bugün hava çok güzel",
      date: "12.12.2021",
      time: "12:12",
      avatar: "https://avatars.githubusercontent.com/u/61896468?v=4",
    },
  ];

  return (
    <Components.Box
      sx={{
        width: "100%",
        backgroundColor: "#2e333d",
        borderTopLeftRadius: "2rem",
        borderBottomLeftRadius: "2rem",
        boxSizing: "border-box",
        padding: "2rem",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Components.Box
        sx={{ display: "flex", flexDirection: "column", width: "20%" }}
      >
        <Components.TextField
          sx={{
            width: "100%",
            boxSizing: "border-box",
            maxWidth: "100%",
            backgroundColor: "#3b4049",
            border: "none",
            padding: "0.75rem",
            borderRadius: "0.75rem",
          }}
          placeholder="Mesaj Ara"
          variant="standard"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <Components.InputAdornment position="start">
                <Icons.SearchIcon />
              </Components.InputAdornment>
            ),
          }}
        />
        <Components.Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Components.MenuList sx={{ width: "100%" }}>
            {messages.map((message) => (
              <Components.MenuItem
                key={message.id}
                button
                sx={{
                  backgroundColor: message.id === 1 ? "#6b8afd" : "",
                  width: "100%",
                  borderRadius: "0.5rem",
                  display: "flex",
                  padding: "0.75rem",
                  gap: "10px",
                  flexDirection: "row",
                  mt: 2,
                  "&:hover": {
                    backgroundColor: "#6b8afd",
                  },
                }}
              >
                <Components.Avatar
                  alt="Remy Sharp"
                  src="https://avatars.githubusercontent.com/u/61896468?v=4"
                  variant="rounded"
                  sx={{
                    width: "3.5rem",
                    height: "3.5rem",
                    backgroundColor: "#fff",
                    color: "#e8e8e8",
                  }}
                />
                <Components.Typography
                  variant="inherit"
                  noWrap
                  sx={{ color: "#fff", fontSize: "0.8rem" }}
                >
                  {message.name} {message.surname}
                  <Components.Typography
                    variant="inherit"
                    noWrap
                    sx={{
                      color: "#ededed",
                      fontSize: "0.7rem",
                      fontWeight: "normal",
                    }}
                  >
                    {message.message}
                  </Components.Typography>
                </Components.Typography>
              </Components.MenuItem>
            ))}
          </Components.MenuList>
        </Components.Box>
      </Components.Box>
      <Components.Box
        sx={{
          width: "80%",
          display: "flex",
        }}
      >
        <PageComponents.ChatSection />
      </Components.Box>
    </Components.Box>
  );
}
