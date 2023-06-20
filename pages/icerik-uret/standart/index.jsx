import Components from "@components";
import styles from "../IcerikUret.module.css";
const Icons = require("../../../assets/icons");
import { useState, useEffect } from "react";
export default function StandartIcerikUret() {
  const [editorValue, setEditorValue] = useState("");
  const [preview, setPreview] = useState("");
  const [content, setContent] = useState({
    title: "",
    summary: "",
    category: "",
    content: "",
    thumbnail: "",
  });

  useEffect(() => {
    setContent({ ...content, content: editorValue });
  }, [editorValue]);

  useEffect(() => {
    console.log(content);
  }, [content]);

  const handleContent = (field, e) => {
    setContent({ ...content, [field]: e.target.value });
  };

  const createNewPost = () => {
    const formData = new FormData();
    formData.append("title", content.title);
    formData.append("summary", content.summary);
    formData.append("category", content.category);
    formData.append("content", content.content);
    formData.append("thumbnail", content.thumbnail);

    $axios
      .post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

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
              backgroundImage: `url(${preview})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "20rem",
              marginBottom: "2rem",
              boxShadow: "0px 0px 5px 5px #cccccc inset",
              "&:hover": {
                boxShadow: "0px 0px 10px 10px #cccccc inset",
                color: "#fff",
                transition: "all 0.3s ease-in-out",
              },
            }}
          >
            {preview ? (
              <Components.Box
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Components.Box
                  sx={{
                    position: "absolute",
                    bottom: "16px",
                    right: "16px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 5px 5px #cccccc",
                  }}
                >
                  <Components.IconButton variant="contained" component="label">
                    <Icons.EditIcon />
                    <Components.Input
                      accept="image/*"
                      onChange={(e) => {
                        e.target.files[0] &&
                          setPreview(URL.createObjectURL(e.target.files[0]));

                        setContent({
                          ...content,
                          thumbnail: e.target.files[0],
                        });
                      }}
                      type="file"
                      name="thumbnail"
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
                  </Components.IconButton>
                  <Components.Divider
                    orientation="vertical"
                    sx={{
                      height: "1px",
                      backgroundColor: "#e5e5e5",
                      width: "100%",
                    }}
                  />
                  <Components.IconButton
                    variant="contained"
                    component="label"
                    onClick={() => {
                      setPreview("");
                      setContent({ ...content, thumbnail: "" });
                    }}
                  >
                    <Icons.DeleteIcon />
                  </Components.IconButton>
                </Components.Box>
              </Components.Box>
            ) : (
              <Components.Box
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
                      accept="image/*"
                      onChange={(e) => {
                        setPreview(URL.createObjectURL(e.target.files[0]));

                        setContent({
                          ...content,
                          thumbnail: e.target.files[0],
                        });
                      }}
                      type="file"
                      name="thumbnail"
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
              </Components.Box>
            )}
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
              value={content["title"]}
              onChange={(e) => handleContent("title", e)}
            />

            <Components.FormControl
              sx={{
                width: "100%",
              }}
            >
              <Components.Select
                value={content["category"]}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={(e) => handleContent("category", e)}
              >
                <Components.MenuItem value={""}>
                  İçerik Kategorisi Seçiniz
                </Components.MenuItem>
                <Components.MenuItem value="gundem">Gündem</Components.MenuItem>
                <Components.MenuItem value="teknoloji-ve-bilim">
                  Teknoloji ve Bilim
                </Components.MenuItem>
                <Components.MenuItem value="kultur-ve-sanat">
                  Kültür ve Sanat
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
            value={content["summary"]}
            onChange={(e) => handleContent("summary", e)}
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
            value={editorValue}
            onChange={setEditorValue}
          />

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
            <Components.WuubiButton
              text="Kaydet"
              fullWidth
              onClick={createNewPost}
            >
              İçerik Oluştur
            </Components.WuubiButton>
          </Components.Box>
        </Components.Box>
      </div>
    </div>
  );
}
