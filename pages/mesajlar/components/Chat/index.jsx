import Components from "@components";
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
    </Components.Box>
  );
}
