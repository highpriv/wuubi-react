import Components from "../../../../components";
const Icons = require("../../../../assets/Icons");
export default function TopBar() {
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
          size="small"
          sx={{
            backgroundColor: "#F5F5F5",
            border: "1px solid #E0E0E0",
          }}
        >
          <Icons.AddIcon />
        </Components.IconButton>
        <Components.TextField
          placeholder="Search"
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
            width: "75%",
          }}
        />
      </Components.Box>
      <Components.Box
        sx={{
          width: "100%",
          display: "flex",
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
          <span>Bildirimler</span>
        </Components.Button>
        <Components.Button
          size="small"
          sx={{
            color: "#606060",
            textTransform: "none",
            ml: 2,
          }}
        >
          <Icons.QuestionAnswerIcon sx={{ mr: 1 }} />
          <span>Mesajlar</span>
        </Components.Button>
        <Components.Button size="small">
          <Components.Avatar
            sx={{
              width: 32,
              height: 32,
              backgroundColor: "#314253",
              color: "white",
              fontSize: "1rem",
            }}
          >
            CB
          </Components.Avatar>
        </Components.Button>
      </Components.Box>
    </Components.Box>
  );
}
