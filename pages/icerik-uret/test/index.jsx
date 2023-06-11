import { useState } from "react";
import Components from "@components";
import styles from "../IcerikUret.module.css";
import TestResults from "./results";
import TestQuestions from "./questions";
const Icons = require("../../../assets/icons");

export default function TestIcerikUret() {
  const [value, setValue] = useState("");

  const [activeTab, setActiveTab] = useState(0);

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
            fontSize: "2rem",
            textAlign: "center",
            marginTop: 2,
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
              boxShadow: "0px 0px 5px 5px #cccccc inset",
              "&:hover": {
                boxShadow: "0px 0px 10px 10px #cccccc inset",
                color: "#fff",
                transition: "all 0.3s ease-in-out",
              },
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
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icons.InsertPhotoOutlinedIcon
                  sx={{
                    width: "5rem",
                    height: "5rem",
                    color: "#d3d3d3",
                  }}
                />
                <Components.Button
                  variant="contained"
                  component="label"
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    marginTop: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "5px solid #d3d3d3",
                    borderRadius: "5px",
                    backgroundColor: "#e8e8e8",
                    boxShadow: "none",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "1rem",
                    padding: "1rem",
                    "&:hover": {
                      backgroundColor: "#e8e8e8",
                      boxShadow: "5px 5px 5px #d3d3d3",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  Görsel Seç
                  <Components.Input
                    type="file"
                    hidden
                    sx={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      opacity: 0,
                    }}
                  />
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
              height: "250px",
            }}
            theme="snow"
            value={value}
            onChange={setValue}
          />
          <Components.Box
            sx={{
              width: "100%",
              maxWidth: "100%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10vh",
              marginBottom: "5vh",
              gap: "1rem",
            }}
          >
            <Components.Divider
              sx={{
                width: "50%",
              }}
            />
            <Icons.QuizIcon
              fontSize="large"
              sx={{
                color: "#2CCDA4",
              }}
            />
            <Components.Divider
              sx={{
                width: "50%",
              }}
            />
          </Components.Box>
          <Components.Box sx={{ width: "100%" }}>
            <Components.Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                boxShadow: "0px 0px 10px 1px #cccccc inset",
                borderRadius: "5px",
                padding: "0.5rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                gap: "2vw",
              }}
            >
              <Components.Button
                className={activeTab === 0 ? styles.active : ""}
                variant="text"
                sx={{
                  fontWeight: 700,
                  color: "#474747",
                }}
                onClick={() => {
                  setActiveTab(0);
                }}
              >
                Test Sonuçları
              </Components.Button>
              <Components.Button
                className={activeTab === 1 ? styles.active : ""}
                onClick={() => {
                  setActiveTab(1);
                }}
                variant="text"
                sx={{
                  fontWeight: 700,
                  color: "#474747",
                }}
              >
                Test Soruları
              </Components.Button>
            </Components.Box>
            {activeTab === 0 ? <TestResults /> : <TestQuestions />}
          </Components.Box>
          <Components.Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "4rem",
              marginBottom: "2rem",
              flexDirection: "column",
            }}
          >
            <Components.Button
              sx={{
                marginBottom: "1rem",
                width: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "none",
              }}
            >
              Taslak Olarak Kaydet
            </Components.Button>
            <Components.WuubiButton text="Kaydet" fullWidth>
              İçerik Oluştur
            </Components.WuubiButton>
          </Components.Box>
        </Components.Box>
      </div>
    </div>
  );
}
