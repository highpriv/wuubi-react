import Components from "@components";
const Icons = require("../../assets/Icons");

export default function CreateNewGroup() {
  return (
    <Components.Box>
      <Components.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Components.Box
          sx={{
            display: "block",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75) inset",
            borderRadius: "0.5rem",
            padding: "1rem",
            marginTop: "5vh",
            width: "100%",
            overflow: "hidden",
            maxwidth: "100%",
            minHeight: "10rem",
            boxSizing: "border-box",
          }}
        >
          <Components.Typography
            sx={{
              fontWeight: "bold",
              fontSize: "2.5rem",
              color: "#e8e8e8",
              width: "100%",
            }}
          >
            Grup Oluştur
          </Components.Typography>
          <Components.Box
            sx={{
              width: "100%",
              display: "flex",
              mt: 5,
              mb: 5,
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
              alignItems: "center",
              justifyContent: "space-around",
              gap: "1rem",
            }}
          >
            <Components.Box
              sx={{
                position: "relative",
              }}
            >
              <img
                src="https://i.ibb.co/0jZ3QYH/Group.png"
                alt="Group"
                style={{
                  width: "30vh",
                  height: "30vh",
                  borderRadius: "0.5rem",
                  filter: "brightness(0.8)",
                }}
              />
              <Components.IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "50%",
                  transform: "translate(50%, -50%)",
                }}
              >
                <Icons.EditIcon />
              </Components.IconButton>
            </Components.Box>
            <Components.Box sx={{ width: "100%", marginTop: "1rem" }}>
              <Components.TextField
                sx={{
                  width: "100%",
                }}
                id="outlined-basic"
                placeholder="Grup Adı"
                variant="outlined"
              />
              <Components.TextField
                sx={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                id="outlined-multiline-static"
                placeholder="Grup Açıklaması"
                multiline
                rows={2}
                variant="outlined"
              />

              <Components.Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                  justifyContent: "space-between",
                }}
              >
                <Components.FormControlLabel
                  sx={{ marginTop: "1rem" }}
                  control={<Components.Switch defaultChecked />}
                  label={
                    <Components.Typography
                      variant="body1"
                      sx={{
                        color: "#A2A2A2",
                        width: "100%",
                      }}
                    >
                      Herkese Açık Grup
                    </Components.Typography>
                  }
                />
                <Components.Button
                  sx={{
                    marginTop: "1rem",
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "30%",
                      lg: "30%",
                      xl: "30%",
                    },
                  }}
                  variant="contained"
                >
                  Grup Oluştur
                </Components.Button>
              </Components.Box>
            </Components.Box>
          </Components.Box>
        </Components.Box>
      </Components.Box>
    </Components.Box>
  );
}
