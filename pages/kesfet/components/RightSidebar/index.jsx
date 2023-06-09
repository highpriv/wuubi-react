import Components from "../../../../components";
const Icons = require("../../../../assets/Icons");
export default function RightSidebar() {
  const popularTags = [
    "#lorem",
    "#ipsum",
    "#dolor",
    "#sitamet",
    "#consectetur",
    "#adipiscing",
    "#elit",
    "#sed",
    "#do",
    "#eiusmod",
    "#tempor",
  ];

  return (
    <Components.Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "white",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        padding: "10px",
        boxSizing: "border-box",
        height: "100vh",
        overflow: "scroll",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "5vh",
      }}
    >
      <Components.Box sx={{ width: "100%" }}>
        <Components.Typography
          variant="h6"
          color="#212121"
          sx={{
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Popüler Etiketler
        </Components.Typography>
        <Components.Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Components.List
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              maxWidth: "20vw",
              flexWrap: "wrap",
            }}
          >
            {popularTags.map((group) => {
              return (
                <Components.ListItem
                  sx={{
                    backgroundColor: "#f4f6f8",
                    width: "fit-content",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    margin: "5px",
                  }}
                >
                  {group}
                </Components.ListItem>
              );
            })}
          </Components.List>
        </Components.Box>
      </Components.Box>

      <Components.Box
        sx={{
          width: "100%",
          height: "100%",
          maxHeight: "100%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Components.Populars maxCount={3} />
      </Components.Box>
    </Components.Box>
  );
}
