import Components from "../../../components";
import styles from "../IcerikUret.module.css";
const Icons = require("../../../assets/icons");
import { useState } from "react";
export default function ListeIcerikUret() {
  const [value, setValue] = useState("");

  const [contentLists, setContentLists] = useState([]);
  const [currentElement, setCurrentElement] = useState({
    title: "",
    image: "",
    content: "",
  });

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
          Liste İçerik Üret
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
            <Icons.FormatListNumberedRtlIcon
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
          {contentLists.map((item, index) => (
            <Components.Box
              key={index}
              sx={{
                width: "100%",
                maxWidth: "100%",
                backgroundColor: "#F7F7F7",
                height: "100%",
                borderRadius: "5px",
                boxShadow: "none",
                color: "#000",
                fontWeight: 700,
                fontSize: "1rem",
                overflow: "hidden",
                padding: "1rem",
                boxSizing: "border-box",
                border: "1px solid #d3d3d3",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "5vh",
              }}
            >
              <Components.Box
                sx={{
                  mt: 1,
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Components.Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: "2rem",
                    color: "#2CCDA4",
                  }}
                >
                  {index + 1}.
                </Components.Typography>
                <Components.Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.5rem",
                  }}
                >
                  {item.title}
                </Components.Typography>
              </Components.Box>
              <Components.Box
                sx={{
                  mt: 1,
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Components.Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "1rem",
                    width: "100%",
                  }}
                >
                  <Components.HTMLRenderer htmlContent={item.content} />
                </Components.Typography>
              </Components.Box>
              <Components.Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "1rem",
                  width: "100%",
                }}
              >
                <Components.Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#2CCDA4",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  Düzenle
                </Components.Button>
                <Components.Button
                  onClick={() => {
                    setContentLists(
                      contentLists.filter((item, i) => i !== index)
                    );
                  }}
                  variant="contained"
                  sx={{
                    backgroundColor: "#F44336",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  Sil
                </Components.Button>
              </Components.Box>
            </Components.Box>
          ))}
          <Components.Box
            sx={{
              width: "100%",
              maxWidth: "100%",
              backgroundColor: "#F7F7F7",
              height: "100%",
              borderRadius: "5px",
              boxShadow: "none",
              color: "#000",
              fontWeight: 700,
              fontSize: "1rem",
              overflow: "hidden",
              padding: "1rem",
              boxSizing: "border-box",
              border: "1px solid #d3d3d3",
            }}
          >
            <Components.Box
              sx={{
                mt: 1,
                gap: "1rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Components.Typography
                variant="h6"
                component="h2"
                color="#2CCDA4"
                sx={{
                  fontWeight: 700,
                  fontSize: "2rem",
                }}
              >
                {contentLists.length + 1}.
              </Components.Typography>
              <Components.TextField
                id="outlined-basic"
                value={currentElement.title}
                onChange={(e) => {
                  setCurrentElement({
                    ...currentElement,
                    title: e.target.value,
                  });
                }}
                placeholder="Madde Başlığı"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
              />
            </Components.Box>
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
                  border: "5px dashed #d3d3d3",
                  boxSizing: "border-box",
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
            </Components.Box>
            <Components.ReactQuill
              value={currentElement.content}
              onChange={(e) => {
                setCurrentElement({
                  ...currentElement,
                  content: e,
                });
              }}
              style={{
                marginTop: "2rem",
                marginBottom: "10vh",
                width: "100%",
                height: "250px",
              }}
              theme="snow"
            />
          </Components.Box>
          <Components.Button
            fullWidth
            onClick={() => {
              setContentLists([...contentLists, currentElement]);
              setCurrentElement({
                title: "",
                content: "",
              });
            }}
            sx={{
              marginTop: "1rem",
              marginBottom: "1rem",
              backgroundColor: "#2CCDA4",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "0.7rem",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#2CCDA4",
                boxShadow: "1px 5px 5px #d3d3d3",
              },
            }}
          >
            <Icons.AddIcon
              sx={{
                color: "#fff",
                marginRight: "0.5rem",
              }}
            />
            Madde Ekle
          </Components.Button>
          <Components.Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5vh",
              marginBottom: "5vh",
              flexDirection: "column",
            }}
          >
            <Components.Button
              sx={{
                marginBottom: "2vh",
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
