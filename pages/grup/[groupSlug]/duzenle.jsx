import Components from "@components";
const Icons = require("../../../assets/Icons");
import styles from "./EditGroup.module.css";
export default function EditGroup() {
  return (
    <div className={styles.wrapperGroup}>
      <div className={styles.wrapperGroupImage}>
        <div className={styles.avatar}>
          <Components.Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 100, height: 100, border: "2px solid #b2b2b2" }}
          />

          <div className={styles.wrapperGroupImageIcon}>
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

      <div className={styles.wrapperGroupInfo}>
        <div className={styles.wrapperGroupInfoItem}>
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
            Grup Adı
          </Components.Typography>
          <Components.TextField
            id="outlined-basic"
            label="Grup Adı"
            variant="outlined"
            sx={{
              width: "100%",
              marginBottom: "1rem",
            }}
          />

          <div className={styles.descriptionItem}>
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
              Grup Açıklaması
            </Components.Typography>
            <Components.TextField
              id="outlined-basic"
              label="Grup Açıklaması"
              multiline
              rows={3}
              variant="outlined"
              sx={{
                width: "100%",
                marginBottom: "1rem",
              }}
            />
          </div>

          <div className={styles.descriptionItem}>
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
              Kapak Fotoğrafı
            </Components.Typography>
            <Components.Box
              sx={{
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <Components.Button
                variant="contained"
                component="label"
                sx={{ mb: 2 }}
                startIcon={<Icons.InsertPhotoOutlinedIcon />}
              >
                Yeni Görsel Ekle
                <input type="file" hidden />
              </Components.Button>

              <Components.Button
                variant="contained"
                color="error"
                component="label"
                sx={{
                  mb: 2,
                  ml: {
                    xs: 0,
                    sm: 0,
                    md: 2,
                    lg: 2,
                    xl: 2,
                  },
                }}
                startIcon={<Icons.DeleteIcon />}
              >
                Görseli Kaldır
              </Components.Button>

              <img
                src="https://loremflickr.com/320/240"
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  borderRadius: "0.5rem",
                  height: "30vh",
                  maxWidth: "100%",
                  maxHeight: "30vh",
                  objectFit: "cover",
                }}
              />
            </Components.Box>
          </div>

          <div className={styles.privacyItem}>
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
              Grup Gizliliği
            </Components.Typography>
            <Components.FormControlLabel
              sx={{
                width: "100%",
              }}
              control={<Components.Switch checked />}
              label="Herkese Açık"
            />
          </div>

          <div style={{ marginTop: "3vh" }}>
            <Components.WuubiButton text="Kaydet" />
          </div>
        </div>
      </div>
    </div>
  );
}
