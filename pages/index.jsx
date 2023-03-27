import Head from "next/head";
import Components from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wuubi - Sosyal İçerik Ağı</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.wrapperMain}>
        <Components.Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 5 }}
          sx={{ mt: 2, mb: 2 }}
        >
          <Components.Grid item xs={12} md={9}>
            <div className={styles.contentArea}>
              <div className={styles.featuredContents}>
                 {" "}
                <Components.Typography
                  variant="h2"
                  color="#e8e8e8"
                  sx={{ pb: 2 }}
                >
                  Öne Çıkan İçerikler
                </Components.Typography>
                <div>
                  <Components.FeaturedPosts />
                </div>
              </div>

              <div className={styles.featuredContents}>
                 {" "}
                <Components.Typography
                  variant="h2"
                  color="#e8e8e8"
                  sx={{ pb: 2 }}
                >
                  Son İçerikler
                </Components.Typography>
                <div>
                  <Components.FeaturedPosts />
                </div>
              </div>
            </div>
          </Components.Grid>

          <Components.Grid
            item
            xs={12}
            md={3}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
              },
            }}
          >
            <div>
              <Components.Sidebar />
            </div>
          </Components.Grid>
        </Components.Grid>
      </main>
    </>
  );
}
