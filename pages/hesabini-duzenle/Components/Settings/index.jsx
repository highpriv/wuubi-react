import styles from "./Settings.module.css";
import Components from "../../../../components";
export default function Settings() {
  return (
    <div
      className={styles.wrapper}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Components.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Components.Typography
          variant="overline"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#262626",
            color: "#8e8e8e",
          }}
        >
          Hesap Gizliliği
        </Components.Typography>
        <Components.FormControlLabel
          control={<Components.Switch defaultChecked />}
          label="Herkese Açık"
        />
      </Components.Box>
      <Components.Divider
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      />
      <Components.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Components.Typography
          variant="overline"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#262626",
            color: "#8e8e8e",
          }}
        >
          Yorumlar
        </Components.Typography>
        <Components.Button
          variant="text"
          sx={{
            color: "#0095f6",
          }}
        >
          Yaptığım Yorumları Gör
        </Components.Button>
      </Components.Box>
      <Components.Divider
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      />
      <Components.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Components.Typography
          variant="overline"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#262626",
            color: "#8e8e8e",
          }}
        >
          İleti İzinleri
        </Components.Typography>
        <Components.FormControlLabel
          control={<Components.Checkbox defaultChecked />}
          label="SMS"
        />
        <Components.FormControlLabel
          control={<Components.Checkbox defaultChecked />}
          label="Arama"
        />
        <Components.FormControlLabel
          control={<Components.Checkbox defaultChecked />}
          label="Email"
        />
      </Components.Box>
      <Components.Divider
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      />
      <Components.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Components.Typography
          variant="overline"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#262626",
            color: "#8e8e8e",
          }}
        >
          Engellenenler
        </Components.Typography>
        <Components.Button
          variant="text"
          sx={{
            color: "#0095f6",
          }}
        >
          Engellenen Hesapları Gör
        </Components.Button>
      </Components.Box>
      <Components.Divider
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      />
      <Components.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Components.Typography
          variant="overline"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#262626",
            color: "#8e8e8e",
          }}
        >
          Destek
        </Components.Typography>
        <Components.Button
          variant="text"
          sx={{
            color: "#0095f6",
          }}
        >
          Destek Merkezi
        </Components.Button>
      </Components.Box>
      <Components.Divider
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      />
      <Components.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Components.Typography
          variant="overline"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#8e8e8e",
          }}
        >
          Kısa Bir Mola*
        </Components.Typography>
        <Components.Typography
          variant="caption"
          sx={{
            fontWeight: "bold",
            fontSize: "0.8rem",
            color: "#8e8e8e",
            width: "80%",
          }}
        >
          * 30 gün sonra hesabınız kalıcı olarak silinir.
        </Components.Typography>
        <Components.Button
          variant="text"
          sx={{
            color: "#0095f6",
          }}
        >
          Hesabınızı Geçici Olarak Kapatın
        </Components.Button>
      </Components.Box>
    </div>
  );
}
