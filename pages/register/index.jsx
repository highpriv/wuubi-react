import { useState } from "react";
import styles from "./Register.module.css";
import Components from "@components";
import axios from "axios";
const Icons = require("../../assets/Icons");
import { signIn } from "next-auth/react";

export default function registerPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState({
    status: false,
    message: "",
    type: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
    username: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        formData
      );

      if (response.data.token) {
        const result = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: true,
        });
      }
    } catch (error) {
      setRegisterError({
        status: true,
        message: error.response.data.error,
        type: "regError",
      });
    }
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
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                label="Email"
                variant="outlined"
                className={styles.input}
              />
            </Components.FormControl>
            <Components.FormControl sx={{ marginTop: "5%" }}>
              <Components.InputLabel htmlFor="outlined-adornment-email">
                Soyadınız
              </Components.InputLabel>
              <Components.OutlinedInput
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className={styles.input}
              />
            </Components.FormControl>
            <Components.FormControl sx={{ marginTop: "5%" }}>
              <Components.InputLabel htmlFor="outlined-adornment-password">
                Password
              </Components.InputLabel>
              <Components.OutlinedInput
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
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
              onClick={() => {
                handleRegister();
              }}
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
