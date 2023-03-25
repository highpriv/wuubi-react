import styles from "./Footer.module.css";
import Components from "../../components";
const Icons = require("../../assets/Icons");

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Components.Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 1 }}
        sx={{ mt: 2, mb: 2}}
      >
        <Components.Grid
          item
          xs={12}
          md={4}
          sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}
        >
          <div
            className={styles.categories}
            sx={{ width: { sm: "100%", md: "20%" } }}
          >
            <Components.Divider>
              {" "}
              <Components.Typography textAlign="center">
                Kategoriler
              </Components.Typography>
            </Components.Divider>

            <Components.Grid
              container
              className={styles.categoryItems}
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Components.Grid item xs={6}>
                <Components.MenuItem>
                  <Components.Typography>Gündem</Components.Typography>
                </Components.MenuItem>{" "}
              </Components.Grid>
              <Components.Grid item xs={6}>
                <Components.MenuItem>
                  <Components.Typography textAlign="center">
                    Spor
                  </Components.Typography>
                </Components.MenuItem>{" "}
              </Components.Grid>
              <Components.Grid item xs={6}>
                <Components.MenuItem>
                  <Components.Typography textAlign="center">
                    Teknoloji ve Bilim
                  </Components.Typography>
                </Components.MenuItem>{" "}
              </Components.Grid>
              <Components.Grid item xs={6}>
                <Components.MenuItem>
                  <Components.Typography textAlign="center">
                    Astroloji
                  </Components.Typography>
                </Components.MenuItem>{" "}
              </Components.Grid>
              <Components.Grid item xs={6}>
                <Components.MenuItem>
                  <Components.Typography textAlign="center">
                    Kültür ve Sanat
                  </Components.Typography>
                </Components.MenuItem>{" "}
              </Components.Grid>
              <Components.Grid item xs={6}>
                <Components.MenuItem>
                  <Components.Typography textAlign="center">
                    Dizi ve Film
                  </Components.Typography>
                </Components.MenuItem>{" "}
              </Components.Grid>
              <Components.Grid item xs={6}>
                <Components.MenuItem>
                  <Components.Typography textAlign="center">
                    Sağlık
                  </Components.Typography>
                </Components.MenuItem>{" "}
              </Components.Grid>
              <Components.Grid item xs={6}>
                <Components.MenuItem>
                  <Components.Typography textAlign="center">
                    Oyun
                  </Components.Typography>
                </Components.MenuItem>{" "}
              </Components.Grid>
              <Components.Grid item xs={6}>
                <Components.MenuItem>
                  <Components.Typography textAlign="center">
                    Yemek
                  </Components.Typography>
                </Components.MenuItem>{" "}
              </Components.Grid>
              <Components.Grid item xs={6}>
                <Components.MenuItem>
                  <Components.Typography textAlign="center">
                    Moda
                  </Components.Typography>
                </Components.MenuItem>{" "}
              </Components.Grid>
              <Components.Grid item xs={6}>
                <Components.MenuItem>
                  <Components.Typography textAlign="center">
                    Goygoy
                  </Components.Typography>
                </Components.MenuItem>{" "}
              </Components.Grid>
              <Components.Grid item xs={6}>
                <Components.MenuItem>
                  <Components.Typography textAlign="center">
                    Seyahat
                  </Components.Typography>
                </Components.MenuItem>{" "}
              </Components.Grid>
            </Components.Grid>
          </div>
        </Components.Grid>
        <Components.Grid
          item
          md={5}
          sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}
        >
          <div className={styles.copyright}>
            <Components.Divider>
              <Components.Typography textAlign="center">
                Wuubi Medya
              </Components.Typography>
            </Components.Divider>
            <Components.Typography textAlign="center" sx={{ pa: 2, mt: 2 }}>
              Bütün içerik telif haklarıyla güvence altına alınmıştır. İzinsiz
              olarak kopyalanması, yazılı veya dijital olarak kullanılması yasal
              sürece tabiidir. Wuubi - Sosyal İçerik platformunun bütün hakları
              saklıdır.
            </Components.Typography>

            <Components.Divider sx={{ mt: 6 }}>
              <Components.Typography textAlign="center">
                Künye
              </Components.Typography>
            </Components.Divider>

            <Components.Typography textAlign="center" sx={{ mt: 2 }}>
              Adnan Kahveci Mah. Anadolu Cad. No:16/A Beylikdüzü, İstanbul
            </Components.Typography>
            <Components.Typography textAlign="center">
              +90 555 555 55 55
            </Components.Typography>
            <Components.Button sx={{ mt: 2, color: "white" }}>
              Bize Ulaşın
            </Components.Button>
          </div>
        </Components.Grid>
        <Components.Grid item xs={12} md={3}>
          <div className={styles.socialMedia}>
            <Components.Divider>
              <Components.Typography textAlign="center">
                Bizi Takip Edin
              </Components.Typography>
            </Components.Divider>
            <Components.Grid
              container
              columnGap={2}
              className={styles.socialMediaIcons}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Components.Grid item xs={1}>
                <Components.IconButton>
                  <Icons.FacebookIcon sx={{ color: "white" }} />
                </Components.IconButton>
              </Components.Grid>
              <Components.Grid item xs={1}>
                <Components.IconButton>
                  <Icons.InstagramIcon sx={{ color: "white" }} />
                </Components.IconButton>
              </Components.Grid>
              <Components.Grid item xs={1}>
                <Components.IconButton>
                  <Icons.TwitterIcon sx={{ color: "white" }} />
                </Components.IconButton>
              </Components.Grid>
              <Components.Grid item xs={1}>
                <Components.IconButton>
                  <Icons.YouTubeIcon sx={{ color: "white" }} />
                </Components.IconButton>
              </Components.Grid>
              <Components.Grid item xs={1}>
                <Components.IconButton>
                  <Icons.LinkedInIcon sx={{ color: "white" }} />
                </Components.IconButton>
              </Components.Grid>
            </Components.Grid>
          </div>
        </Components.Grid>
      </Components.Grid>
    </div>
  );
}
