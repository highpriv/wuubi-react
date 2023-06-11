import Components from "@components";
import styles from "../IcerikUret.module.css";
const Icons = require("../../../assets/icons");
import { useEffect, useState } from "react";
export default function AnketIcerikUret() {
  const [value, setValue] = useState("");

  const [surveys, setSurveys] = useState([
    {
      title: "",
      options: [],
    },
  ]);

  const [error, setError] = useState("");

  const [currentSurveyTitle, setCurrentSurveyTitle] = useState("");
  const [currentSurveyOption, setCurrentSurveyOption] = useState("");

  const addSurvey = () => {
    const newSurvey = [...surveys];
    if (newSurvey.some((item) => item.title === currentSurveyTitle)) {
      setError("Bu soru zaten eklenmiş.");
    } else {
      newSurvey.push({
        title: currentSurveyTitle,
        options: surveys[surveys.length - 1].options,
      });
      newSurvey.push({
        title: "",
        options: [],
      });
      setSurveys(newSurvey);
      setError("");
      setCurrentSurveyOption("");
      setCurrentSurveyTitle("");
    }
  };

  const addSurveyOption = (option) => {
    const newSurvey = [...surveys];

    if (newSurvey[newSurvey.length - 1].options.includes(option)) {
      setError("Bu seçenek zaten eklenmiş.");
    } else {
      newSurvey[newSurvey.length - 1].options[
        newSurvey[newSurvey.length - 1].options.length
      ] = option;
      setSurveys(newSurvey);
      setError("");
      setCurrentSurveyOption("");
    }
  };

  const removeSurvey = (index) => {
    const newSurvey = [...surveys];
    newSurvey.splice(index, 1);
    setSurveys(newSurvey);
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
          Anket İçerik Üret
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
              height: "40vh",
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
            <Icons.PollIcon
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
          <Components.Typography
            variant="h6"
            component="h2"
            sx={{
              fontWeight: 700,
              width: "100%",
              fontSize: "1.5rem",
              marginBottom: "2rem",
              textAlign: "center",
              color: "#d3d3d3",
            }}
          >
            Anket Soruları
          </Components.Typography>
          <Components.Box
            sx={{ width: "100%", padding: 2, boxSizing: "border-box" }}
          >
            <Components.Grid container spacing={2}>
              {surveys.map((survey, index) => {
                return (
                  survey.title !== "" && (
                    <Components.Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <Components.Card sx={{ width: "100%" }}>
                        <Components.CardContent>
                          <Components.Typography
                            sx={{
                              fontSize: "1.5rem",
                              fontWeight: 700,
                              marginBottom: "1rem",
                            }}
                          >
                            {survey.title}
                          </Components.Typography>
                        </Components.CardContent>
                        <Components.CardActions
                          sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: "#e8e8e8",
                          }}
                        >
                          <Components.Box sx={{ width: "100%" }}>
                            {survey.options.map((option, index) => {
                              return (
                                <Components.FormControlLabel
                                  sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  }}
                                  value={option}
                                  control={<Components.Radio />}
                                  label={option}
                                />
                              );
                            })}
                          </Components.Box>
                        </Components.CardActions>
                        <Components.CardActions
                          sx={{
                            width: "100%",
                            display: "flex",
                            boxSizing: "border-box",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            backgroundColor: "#e8e8e8",
                          }}
                        >
                          <Components.Button
                            onClick={() => {
                              removeSurvey(index);
                            }}
                            fullWidth
                            sx={{
                              backgroundColor: "#ff6666",
                              color: "#fff",
                              "&:hover": {
                                backgroundColor: "#2CCDA4",
                                color: "#fff",
                              },
                            }}
                          >
                            Sil
                          </Components.Button>
                        </Components.CardActions>
                      </Components.Card>
                    </Components.Grid>
                  )
                );
              })}
            </Components.Grid>
          </Components.Box>
          <Components.Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              boxShadow: "0px 0px 5px #d3d3d3",
              borderRadius: "5px",
              padding: "1rem",
              boxSizing: "border-box",
            }}
          >
            <Components.Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                borderRadius: "5px",
                padding: "1rem",
                boxSizing: "border-box",
                marginTop: "1rem",
                gap: "1rem",
              }}
            >
              <Components.TextField
                id="outlined-basic"
                placeholder="Anket Sorusu"
                value={currentSurveyTitle}
                onChange={(e) => {
                  setCurrentSurveyTitle(e.target.value);
                }}
                variant="outlined"
                fullWidth
                sx={{
                  mt: 1,
                }}
              />
            </Components.Box>

            <Components.Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                flexDirection: "row",
                padding: "1rem",
                boxSizing: "border-box",
              }}
            >
              <Components.TextField
                id="outlined-basic"
                placeholder="Anket Seçeneği"
                value={currentSurveyOption}
                variant="outlined"
                onChange={(e) => {
                  setCurrentSurveyOption(e.target.value);
                }}
                fullWidth
                sx={{
                  mt: 1,
                  width: "100%",
                }}
                InputProps={{
                  endAdornment: (
                    <Components.InputAdornment position="end">
                      <Components.Button
                        onClick={() => {
                          if (currentSurveyOption !== "") {
                            addSurveyOption(currentSurveyOption);
                          }
                        }}
                        sx={{
                          backgroundColor: "#2CCDA4",
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "#2CCDA4",
                            color: "#fff",
                          },
                        }}
                      >
                        Ekle
                      </Components.Button>
                    </Components.InputAdornment>
                  ),
                }}
              />
            </Components.Box>
            {error && (
              <Components.Typography
                color="error"
                variant="caption"
                sx={{
                  width: "100%",
                  ml: 6,
                }}
              >
                {error}
              </Components.Typography>
            )}
            <Components.Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
                padding: "1rem",
                boxSizing: "border-box",
              }}
            >
              <Components.Typography
                sx={{
                  color: "#d3d3d3",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  width: "100%",
                }}
              >
                Anket Seçenekleri
              </Components.Typography>
              <Components.Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                <Components.Grid
                  container
                  spacing={2}
                  rowSpacing={3}
                  columnSpacing={3}
                  sx={{
                    width: "100%",
                  }}
                >
                  {surveys[surveys.length - 1].options.map(
                    (option, optionIndex) => {
                      return (
                        <Components.Grid
                          item
                          xs={12}
                          md={4}
                          sm={4}
                          lg={4}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            padding: "1rem",
                            boxSizing: "border-box",
                          }}
                        >
                          <Components.FormControlLabel
                            value={option}
                            control={<Components.Radio />}
                            label={option}
                          />
                        </Components.Grid>
                      );
                    }
                  )}
                </Components.Grid>
              </Components.Box>
              {surveys[surveys.length - 1]?.options.length > 0 ? (
                ""
              ) : (
                <Components.Typography
                  variant="caption"
                  sx={{
                    color: "#d3d3d3",
                    fontWeight: 700,
                    width: "100%",
                  }}
                >
                  Henüz hiç seçenek eklenmemiş
                </Components.Typography>
              )}
            </Components.Box>
            <Components.Button
              sx={{
                width: "100%",
                marginTop: "1rem",
                backgroundColor: "#2CCDA4",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#2CCDA4",
                  color: "#fff",
                },
              }}
              onClick={() => {
                if (currentSurveyTitle !== "") {
                  addSurvey();
                }
              }}
            >
              Soru Ekle
            </Components.Button>
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
