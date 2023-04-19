import styles from "./Login.module.css";
import Components from "../../components";
const Icons = require("../../assets/Icons");

export default function loginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperLogin}>
        <Components.Typography
          variant="h4"
          className={styles.title}
          color="#2d2d2d"
        >
          Giriş Yap{" "}
        </Components.Typography>
        <Components.Typography
          variant="body1"
          className={styles.subTitle}
          color="#bfbfbf"
        >
          Hesabınız yok mu?
          <Components.Link href="/register" className={styles.link}>
            Kayıt Ol
          </Components.Link>
        </Components.Typography>
        <div className={styles.containerForm}>
          <Components.FormControl>
            <Components.TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className={styles.input}
            />
            <Components.TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className={styles.input}
            />

            <Components.Typography
              variant="body1"
              className={styles.forgottenPw}
            >
              <span>
                <Components.FormControlLabel
                  control={<Components.Checkbox defaultChecked />}
                  label="Beni Hatırla"
                />
              </span>
              <Components.Link href="/reset-password" className={styles.link}>
                Şifremi Unuttum
              </Components.Link>
            </Components.Typography>
            <Components.Button
              variant="contained"
              color="primary"
              className={styles.button}
            >
              Giriş Yap
            </Components.Button>
            <Components.Button
              variant="outlined"
              color="primary"
              className={styles.button}
            >
              Kayıt Ol
            </Components.Button>
          </Components.FormControl>
        </div>
      </div>
      <div className={styles.imgSide}>
        <div className={styles.imgSideText}>
          <Components.Typography variant="h6" color="#e8e8e8">
            Her zaman ve tamamen ücretsiz
          </Components.Typography>
        </div>
      </div>
    </div>
  );
}
