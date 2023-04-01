import styles from "./SinglePage.module.css";
import Components from "../../components";
const Icons = require("../../assets/Icons");

export default function singlePage() {
  return (
    <main className={styles.wrapperMain}>
      <div className={styles.contentImgWrapper}>
        <div className={styles.contentHeader}>
          <div className={styles.contentInfo}>
            <div className={styles.breadCrumb}>
              <a> Teknoloji </a>
              {">"}{" "}
              <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
            </div>
            <h2 className={styles.contentTitle}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum condimentum erat dapibus
            </h2>
            <p className={styles.summary}>
              {" "}
              In ut scelerisque urna. Curabitur sollicitudin leo elit, id
              laoreet ligula ornare in. Sed sit amet blandit mi. Morbi malesuada
              mollis sapien sed finibus.
            </p>
            <div className={styles.infos}>
              <div className={styles.author}>
                <Components.Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
                <span>
                  <b>@canberkberen</b> tarafından <b>30-03-2023</b> tarihinde
                  oluşturuldu
                </span>
                <span className={styles.contentReadTime}>
                  <Icons.AccessTimeIcon /> ~10 dakika
                </span>
              </div>
            </div>
          </div>
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
