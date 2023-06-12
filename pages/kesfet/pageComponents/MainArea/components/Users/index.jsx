import Components from "@components";
import styles from "../Components.module.css";
const Icons = require("../../../../../../assets/Icons");
export default function Users() {
  const contentItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <Components.Box className={styles.wrapperBox}>
      <Components.Masonry columns={3} spacing={2}>
        {contentItems.map((item, index) => (
          <Components.Card key={index}>
            <Components.CardHeader
              avatar={
                <Components.Avatar
                  sx={{ width: "2rem", height: "2rem" }}
                  src="https://avatars.githubusercontent.com/u/55942632?v=4"
                />
              }
              title="Shrimp and Chorizo Paella"
              subheader="1442 takipçi"
            />

            <Components.CardContent>
              <Components.Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Components.Typography>
            </Components.CardContent>
            <Components.CardActions disableSpacing>
              <Components.Button
                variant="contained"
                fullWidth
                startIcon={<Icons.PersonAddAlt1Icon />}
              >
                Takip Et
              </Components.Button>
            </Components.CardActions>
          </Components.Card>
        ))}
      </Components.Masonry>
    </Components.Box>
  );
}
