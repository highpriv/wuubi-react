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

        <div className={styles.contentTitle}>
          <Components.Typography
            variant="h2"
            color="#dcdcdc"
            sx={{ fontWeight: "bold" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Components.Typography>

          <Components.Typography variant="body2" color="#dcdcdc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            interdum porttitor est eu luctus. Nullam sagittis volutpat dui in
            venenatis. Sed eget tortor non arcu auctor facilisis. Donec tempor
            mauris odio, vitae pellentesque purus feugiat ac. Donec aliquam,
            nisi id consequat elementum, orci eros viverra lorem, quis gravida
            dolor leo sit amet est. Cras pretium, tellus vitae finibus finibus,
            tellus ligula venenatis ligula, a fringilla mauris augue ut augue.
            Curabitur fringilla justo quis massa congue tempus. Aliquam tortor
            lacus, facilisis ut eros quis, sodales commodo enim. Praesent libero
            urna, vehicula a tincidunt non, malesuada in felis. Mauris at
            ultrices arcu. Aliquam erat volutpat. Suspendisse ultricies, purus
            eget facilisis feugiat, dolor nisl condimentum ipsum, sit amet
            tincidunt metus mi et tellus. Pellentesque rhoncus lacinia
            tincidunt.
          </Components.Typography>

          <div className={styles.contentInfo}>
            <Components.Typography
              variant="subtitle1"
              color="#dcdcdc"
              sx={{ fontWeight: "bold" }}
            >
              <b>Paylaşan:</b> @canberkberen1
            </Components.Typography>
            <Components.Typography
              variant="subtitle1"
              color="#dcdcdc"
              sx={{ fontWeight: "bold" }}
            >
              <b>Yayınlanma Tarihi:</b> 22.03.2023 10:30
            </Components.Typography>
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
