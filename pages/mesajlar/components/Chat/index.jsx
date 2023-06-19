import Components from "@components";
import Conversation from "./components/Conversation";
const Icons = require("../../../../assets/Icons");
export default function ChatSection() {
  const topBarIcons = [
    {
      id: 1,
      icon: (
        <Icons.SearchIcon
          sx={{
            color: "#e8e8e8",
          }}
        />
      ),
    },
    {
      id: 2,
      icon: (
        <Icons.LocalPhoneRoundedIcon
          sx={{
            color: "#e8e8e8",
          }}
        />
      ),
    },
    {
      id: 3,
      icon: (
        <Icons.SpaceDashboardIcon
          sx={{
            color: "#e8e8e8",
          }}
        />
      ),
    },
    {
      id: 4,
      icon: (
        <Icons.MoreHorizIcon
          sx={{
            color: "#e8e8e8",
          }}
        />
      ),
    },
  ];
  return (
    <Components.Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Components.Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 3rem 0 3rem",
        }}
      >
        <Components.Box>
          <Components.Typography sx={{ color: "#e8e8e8", fontWeight: "bold" }}>
            Canberk Beren
          </Components.Typography>
          <Components.Typography variant="caption" sx={{ color: "#d6d6d6" }}>
            @canberkberen
          </Components.Typography>
        </Components.Box>
        <Components.Box sx={{ ml: "auto" }}>
          {topBarIcons.map((icon) => (
            <Components.IconButton key={icon.id}>
              {icon.icon}
            </Components.IconButton>
          ))}
        </Components.Box>
      </Components.Box>
      <Components.Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          height: "100vh",
          maxHeight: "100vh",
          overflowY: "auto",
          padding: "3rem",
          position: "relative",
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
        <Conversation />

        <Components.TextField
          variant="standard"
          fullWidth
          placeholder="Mesajınızı yazın"
          InputProps={{
            style: { color: "#e8e8e8" },
            disableUnderline: true,
            startAdornment: (
              <Components.InputAdornment position="start">
                <Icons.AttachFileIcon
                  sx={{
                    color: "#e8e8e8",
                  }}
                />
              </Components.InputAdornment>
            ),
            endAdornment: (
              <Components.InputAdornment position="end">
                <Icons.SendIcon
                  sx={{
                    color: "#e8e8e8",
                  }}
                />
              </Components.InputAdornment>
            ),
          }}
          sx={{
            mt: 6,
            border: "none",
            color: "#fff",
            mb: 6,
            width: "100%",
          }}
        />
      </Components.Box>
    </Components.Box>
  );
}
