import styles from "./SinglePage.module.css";
import Components from "../../components";
const Icons = require("../../assets/Icons");

export default function singlePage() {
  return (
    <main className={styles.wrapperMain}>
      <div className={styles.contentImgWrapper}>
        <Components.Image
          className={styles.contentImg}
          src="https://picsum.photos/1200/600"
          width={1200}
          height={600}
        />
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
