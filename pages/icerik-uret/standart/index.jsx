import Components from "../../../components";
import styles from "../IcerikUret.module.css";
import { useState } from "react";
export default function StandartIcerikUret() {
  const [value, setValue] = useState("");

  return (
    <div className={styles.mainWrapper}>
      <div>
        <Components.Typography
          variant="h4"
          component="h1"
          color="#e8e8e8"
          sx={{
            width: "100%",
            fontWeight: 700,
            fontSize: "2.5rem",
          }}
        >
          Standart İçerik Üret
        </Components.Typography>
      </div>
      <div>
        <Components.Box
          sx={{
            mt: 6,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Components.Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e8e8e8",
              borderRadius: "5px",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <Components.Typography
                variant="h6"
                component="h2"
                color="#d3d3d3"
                sx={{
                  width: "100%",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                }}
              >
                Öne Çıkan Görsel
              </Components.Typography>
              <Components.Box
                sx={{
                  mt: 1,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <Components.Button variant="contained" component="label">
                  Görsel Seç
                  <Components.Input type="file" hidden />
                </Components.Button>
              </Components.Box>
            </div>
          </Components.Box>

          <Components.Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              gap: "1rem",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
            }}
          >
            <Components.TextField
              id="outlined-basic"
              placeholder="İçerik Başlığı"
              variant="outlined"
              sx={{
                width: "100%",
              }}
            />

            <Components.FormControl
              sx={{
                width: "100%",
              }}
            >
              <Components.Select
                value={""}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <Components.MenuItem value="">
                  İçerik Kategorisi 1
                </Components.MenuItem>
                <Components.MenuItem value="1">
                  İçerik Kategorisi 2
                </Components.MenuItem>
                <Components.MenuItem value="2">
                  İçerik Kategorisi
                </Components.MenuItem>
                <Components.MenuItem value="3">
                  İçerik Kategorisi
                </Components.MenuItem>
                <Components.MenuItem value="4">
                  İçerik Kategorisi
                </Components.MenuItem>
                <Components.MenuItem value="5">
                  İçerik Kategorisi
                </Components.MenuItem>
              </Components.Select>
            </Components.FormControl>
          </Components.Box>

          <Components.TextField
            id="outlined-basic"
            placeholder="İçerik Özeti"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{
              mt: 1,
            }}
          />

          <Components.ReactQuill
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              width: "100%",
              height: "500px",
            }}
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </Components.Box>
      </div>
    </div>
  );
}
