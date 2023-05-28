import Components from "../../../../components";
import styles from "./EditUserProfile.module.css";
const Icons = require("../../../../assets/Icons");
export default function editUserProfile() {
  return (
    <div className={styles.wrapperProfile}>
      <div className={styles.wrapperProfileImage}>
        <div className={styles.avatar}>
          <Components.Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 100, height: 100, border: "2px solid #b2b2b2" }}
          />

          <div className={styles.wrapperProfileImageIcon}>
            <Icons.EditIcon
              sx={{
                color: "#fff",
                fontSize: "1rem",
                cursor: "pointer",
                backgroundColor: "#262626",
                borderRadius: "50%",
                padding: "0.5rem",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
            />
          </div>
        </div>
      </div>

      <div className={styles.wrapperProfileInfo}>
        <div className={styles.wrapperProfileInfoItem}>
          <Components.Typography
            variant="overline"
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#262626",
              marginBottom: "1rem",
              color: "#8e8e8e",
            }}
          >
            Kullanıcı Adı
          </Components.Typography>
          <Components.TextField
            id="outlined-basic"
            label="Kullanıcı Adı"
            variant="outlined"
            sx={{
              width: "100%",
              marginBottom: "1rem",
            }}
          />

          <div className={styles.wrapperNameSurname}>
            <div className={styles.nameItem}>
              <Components.Typography
                variant="overline"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#262626",
                  marginBottom: "1rem",
                  color: "#8e8e8e",
                }}
              >
                Ad
              </Components.Typography>
              <Components.TextField
                id="outlined-basic"
                label="Ad"
                variant="outlined"
                sx={{
                  width: "100%",
                  marginBottom: "1rem",
                }}
              />
            </div>
            <div className={styles.nameItem}>
              <Components.Typography
                variant="overline"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#262626",
                  marginBottom: "1rem",
                  color: "#8e8e8e",
                }}
              >
                Soyad
              </Components.Typography>
              <Components.TextField
                id="outlined-basic"
                label="Soyad"
                variant="outlined"
                sx={{
                  width: "100%",
                  marginBottom: "1rem",
                }}
              />
            </div>
          </div>

          <Components.Typography
            variant="overline"
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#262626",
              marginBottom: "1rem",
              color: "#8e8e8e",
            }}
          >
            Email
          </Components.Typography>
          <Components.TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{
              width: "100%",
              marginBottom: "1rem",
            }}
          />

          <Components.Typography
            variant="overline"
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#262626",
              marginBottom: "1rem",
              color: "#8e8e8e",
            }}
          >
            Telefon Numarası
          </Components.Typography>
          <Components.TextField
            id="outlined-basic"
            label="Telefon Numarası"
            variant="outlined"
            sx={{
              width: "100%",
              marginBottom: "1rem",
            }}
          />

          <Components.Typography
            variant="overline"
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#262626",
              marginBottom: "1rem",
              color: "#8e8e8e",
            }}
          >
            Biyografi
          </Components.Typography>
          <Components.TextField
            id="outlined-basic"
            label="Biyografi"
            variant="outlined"
            sx={{
              width: "100%",
              marginBottom: "1rem",
            }}
          />

          <div className={styles.wrapperNameSurname}>
            <div className={styles.nameItem}>
              <Components.Typography
                variant="overline"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#262626",
                  marginBottom: "1rem",
                  color: "#8e8e8e",
                }}
              >
                Mevcut Şifre
              </Components.Typography>
              <Components.TextField
                id="outlined-basic"
                label="Mevcut Şifre"
                variant="outlined"
                sx={{
                  width: "100%",
                  marginBottom: "1rem",
                }}
              />
            </div>
            <div className={styles.nameItem}>
              <Components.Typography
                variant="overline"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#262626",
                  marginBottom: "1rem",
                  color: "#8e8e8e",
                }}
              >
                Yeni Şifre
              </Components.Typography>
              <Components.TextField
                id="outlined-basic"
                label="Yeni Şifre"
                variant="outlined"
                sx={{
                  width: "100%",
                  marginBottom: "1rem",
                }}
              />
            </div>
          </div>
          <div style={{ marginTop: "3vh" }}>
            <Components.WuubiButton text="Kaydet" />
          </div>
        </div>
      </div>
    </div>
  );
}
