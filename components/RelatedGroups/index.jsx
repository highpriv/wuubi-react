import styles from "./RelatedGroups.module.css";
import Components from "../../Components";
const Icons = require("../../assets/Icons");

export default function RelatedGroups() {
  const relatedGroups = ["1", "2", "3", "4"];

  return (
    <Components.Box>
      <Components.Typography variant="h4" color="#c9c9c9">
        İlgini Çekebilecek Gruplar
      </Components.Typography>
      <Components.Box className={styles.relatedGroups}>
        <Components.Grid
          container
          spacing={2}
          className={styles.cardContainer}
          sx={{ mt: 2 }}
        >
          {relatedGroups.map((group) => {
            return (
              <Components.Grid item xs={12} sm={6} md={2.4}>
                <Components.Card className={styles.cardItemGroups}>
                  <Components.CardMedia
                    sx={{ height: 200, borderRadius: 1 }}
                    image="https://picsum.photos/200/200"
                    title="Paella dish"
                  />
                  <Components.CardContent>
                    <Components.Typography variant="h5">
                      Lorem ipsum dolor sit amet consectetur
                    </Components.Typography>
                    <Components.Typography variant="body2" color="#c9c9c9">
                      3 katılımcı
                    </Components.Typography>
                  </Components.CardContent>
                  <Components.CardActions></Components.CardActions>
                </Components.Card>
              </Components.Grid>
            );
          })}

          <Components.Grid item xs={12} sm={6} md={2.4}>
            <Components.Card
              className={styles.cardItemGroups}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Components.Box>
                <Icons.GroupsIcon
                  sx={{
                    width: "100%",
                    height: "20vh",
                    color: "#2CCDA4",
                  }}
                />
              </Components.Box>
              <Components.CardContent>
                <Components.Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "1rem",
                  }}
                >
                  Hemen ücretsiz bir grup oluştur ve arkadaşlarını davet et.
                </Components.Typography>
                <Components.Button
                  sx={{
                    width: "100%",
                    backgroundColor: "#2CCDA4",
                    color: "#fff",
                    mt: 2,
                    "&:hover": {
                      backgroundColor: "#2CCDA4",
                      boxShadow: "1px 1px 5px #2CCDA4",
                    },
                  }}
                >
                  Grup Oluştur
                </Components.Button>
              </Components.CardContent>
            </Components.Card>
          </Components.Grid>
        </Components.Grid>
      </Components.Box>
    </Components.Box>
  );
}
