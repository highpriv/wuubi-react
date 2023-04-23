import { useState } from "react";
import styles from "./Register.module.css";
import Components from "../../components";
const Icons = require("../../assets/Icons");

export default function registerPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapperLogin}>
        <span className={styles.greetingIcon}>
          <Icons.EmojiPeopleIcon
            sx={{ fontSize: "54px", marginBottom: "10px" }}
          />
        </span>
        <Components.Typography
          variant="h4"
          className={styles.title}
          color="#2d2d2d"
        >
          Merhaba,{" "}
        </Components.Typography>
        <Components.Typography
          variant="body1"
          className={styles.subTitle}
          color="#bfbfbf"
        >
          Zaten hesabın var mı?
          <Components.Link href="/login" className={styles.link}>
            Giriş Yap
          </Components.Link>
        </Components.Typography>
        <div className={styles.containerForm}>
          <Components.FormControl className={styles.innerForm}>
            <Components.FormControl sx={{ marginTop: "5%" }}>
              <Components.InputLabel htmlFor="outlined-adornment-email">
                Email
              </Components.InputLabel>
              <Components.OutlinedInput
                id="outlined-adornment-email"
                label="Email"
                variant="outlined"
                className={styles.input}
              />
            </Components.FormControl>
            <Components.FormControl sx={{ marginTop: "5%" }}>
              <Components.InputLabel htmlFor="outlined-adornment-email">
                Adınız
              </Components.InputLabel>
              <Components.OutlinedInput
                id="outlined-adornment-email"
                label="Email"
                variant="outlined"
                className={styles.input}
              />
            </Components.FormControl>
            <Components.FormControl sx={{ marginTop: "5%" }}>
              <Components.InputLabel htmlFor="outlined-adornment-email">
                Kullanıcı Adı
              </Components.InputLabel>
              <Components.OutlinedInput
                id="outlined-adornment-email"
                label="Email"
                variant="outlined"
                className={styles.input}
              />
            </Components.FormControl>
            <Components.FormControl sx={{ marginTop: "5%" }}>
              <Components.InputLabel htmlFor="outlined-adornment-password">
                Password
              </Components.InputLabel>
              <Components.OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <Components.InputAdornment position="end">
                    <Components.IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <Icons.VisibilityOff />
                      ) : (
                        <Icons.Visibility />
                      )}
                    </Components.IconButton>
                  </Components.InputAdornment>
                }
                label="Password"
              />
            </Components.FormControl>

            <Components.Typography
              variant="body1"
              className={styles.forgottenPw}
            >
              <span>
                <Components.FormControlLabel
                  control={<Components.Checkbox defaultChecked />}
                  label="Üyelik sözleşmesini okudum ve kabul ediyorum."
                />
              </span>
            </Components.Typography>
            <Components.Button
              variant="contained"
              color="primary"
              className={styles.button}
            >
              Kayıt Ol
            </Components.Button>

            <Components.Divider sx={{ mt: 5, mb: 5 }} />

            <Components.Button
              variant="outlined"
              color="primary"
              sx={{ borderRadius: "20px", padding: "2%" }}
              startIcon={<Icons.GoogleIcon />}
            >
              Google ile kayıt ol
            </Components.Button>
            <Components.Button
              variant="outlined"
              color="primary"
              sx={{ borderRadius: "20px", padding: "2%", marginTop: "3%" }}
              startIcon={<Icons.FacebookIcon />}
            >
              Facebook ile kayıt ol
            </Components.Button>
          </Components.FormControl>
        </div>
      </div>
    </div>
  );
}
