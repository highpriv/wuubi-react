import styles from "./SinglePage.module.css";
import Components from "../../components";
const Icons = require("../../assets/Icons");

export default function singlePage() {
  return (
    <main className={styles.wrapperMain}>
      <div className={styles.contentImgWrapper}>
        <div className={styles.imgOverlay}>
          <Components.Image
            className={styles.contentImg}
            src="https://picsum.photos/1200/600"
            width={1200}
            height={600}
          />
        </div>

        <div className={styles.contentTitle}>
          <Components.Typography
            variant="h2"
            sx={{ fontWeight: "bold" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Components.Typography>
        </div>

        <div className={styles.contentInfo}>
          <Components.Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold" }}
          >
            <b>Paylaşan:</b> @canberkberen1
          </Components.Typography>
          <Components.Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold" }}
          >
            <b>Yayınlanma Tarihi:</b> 22.03.2023 10:30
          </Components.Typography>
        </div>
      </div>

      <Components.Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 1 }}
        sx={{ mt: 2, mb: 2 }}
      >
        <Components.Grid
          item
          xs={12}
          md={9}
          lg={9}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
            },
          }}
        >
          <div className={styles.contentArea}>asd</div>
        </Components.Grid>

        <Components.Grid
          item
          xs={12}
          md={3}
          lg={3}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
            },
          }}
        >
          <div className={styles.sideBar}>
            <Components.Sidebar />
          </div>
        </Components.Grid>
      </Components.Grid>
    </main>
  );
}
