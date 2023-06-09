import { useState } from "react";
import styles from "./Login.module.css";
import Components from "@components";
const Icons = require("../../assets/Icons");
import { signIn } from "next-auth/react";

export default function loginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState({
    status: false,
    message: "",
    type: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result.error)
        setRegisterError({
          status: true,
          message: "Kullanıcı adı veya şifre hatalı!",
          type: "logError",
        });
      else {
        window.location.href = "/";
      }
    } catch (err) {}
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapperLogin}>
        <Components.DialogModal
          open={registerError.status}
          message={registerError.message}
          type={registerError.type}
          setRegisterError={setRegisterError}
        />
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
          Hesabınız yok mu?
          <Components.Link href="/register" className={styles.link}>
            Kayıt Ol
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
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                variant="outlined"
                endAdornment={
                  <Components.InputAdornment position="end">
                    <Icons.AlternateEmailIcon />
                  </Components.InputAdornment>
                }
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
                onChange={(e) => setPassword(e.target.value)}
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
              <Components.Link href="/reset-password" className={styles.link}>
                Şifremi Unuttum
              </Components.Link>
              <span>
                <Components.FormControlLabel
                  control={<Components.Checkbox defaultChecked />}
                  label="Beni Hatırla"
                />
              </span>
            </Components.Typography>
            <Components.Button
              variant="contained"
              color="primary"
              onClick={() => handleLogin()}
              className={styles.button}
            >
              Giriş Yap
            </Components.Button>
            <Components.Button
              variant="outlined"
              color="primary"
              href="/register"
              sx={{ borderRadius: "20px", padding: "2%" }}
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
              Google ile giriş yap
            </Components.Button>
            <Components.Button
              variant="outlined"
              color="primary"
              sx={{ borderRadius: "20px", padding: "2%", marginTop: "3%" }}
              startIcon={<Icons.FacebookIcon />}
            >
              Facebook ile giriş yap
            </Components.Button>
          </Components.FormControl>
        </div>
      </div>
    </div>
  );
}
