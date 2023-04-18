import styles from "./Login.module.css";
import Components from "../../components";
const Icons = require("../../assets/Icons");

export default function loginPage() {
  return (
    <div className={styles.wrapperLogin}>
      <Components.Typography
        variant="h4"
        className={styles.title}
        color="#e8e8e8"
      >
        Hesabınıza Giriş Yapın
      </Components.Typography>
      <Components.Typography
        variant="body1"
        className={styles.subTitle}
        color="#e8e8e8"
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
          <Components.Button
            variant="contained"
            color="primary"
            className={styles.button}
          >
            Giriş Yap
          </Components.Button>
          <Components.Typography variant="body1" className={styles.forgottenPw}>
            Şifrenizi mi unuttunuz?
            <Components.Link href="/reset-password" className={styles.link}>
              Şifremi Unuttum
            </Components.Link>
          </Components.Typography>
        </Components.FormControl>
      </div>
    </div>
  );
}
