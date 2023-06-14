import Components from "@components";
const Icons = require("../../../../assets/Icons");

const users = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function GroupUsers() {
  return (
    <Components.Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        mt: 4,
      }}
    >
      <Components.Box sx={{ width: "100%", boxSizing: "border-box" }}>
        <Components.Grid
          spacing={2}
          container
          sx={{ width: "100%", boxSizing: "border-box" }}
        >
          {users.map((user, index) => {
            return (
              <Components.Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <Components.Card
                  sx={{
                    width: "100%",
                    boxSizing: "border-box",
                    boxShadow: "none",
                    border: "1px solid #a2a2a2",
                  }}
                >
                  <Components.CardHeader
                    avatar={
                      <Components.Avatar
                        src="https://loremflickr.com/320/240"
                        sx={{
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    }
                    title="Canberk Beren"
                    subheader="@canberkberen"
                    action={
                      <Components.IconButton
                        sx={{
                          backgroundColor: "#fff",
                          boxShadow: "none",
                        }}
                      >
                        <Icons.PersonAddAlt1Icon />
                      </Components.IconButton>
                    }
                  />
                  <Components.CardContent>
                    <Components.Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam vitae velit vitae nunc ultricies aliquam. Sed
                      aliquam, nisl quis lacinia ultrices, nunc nisl
                    </Components.Typography>
                  </Components.CardContent>
                </Components.Card>
              </Components.Grid>
            );
          })}
        </Components.Grid>
      </Components.Box>
    </Components.Box>
  );
}
