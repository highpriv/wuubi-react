import Components from "@components";
import styles from "../IcerikUret.module.css";
const Icons = require("../../../assets/icons");
import SwitchComponent from "./SwitchComponent";

import { useEffect, useState } from "react";
export default function SoruIcerikUret() {
  const [value, setValue] = useState("");

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");

  const [currentAnswer, setCurrentAnswer] = useState({
    title: "",
    isCorrect: true,
  });
  const [currentQuestionAnswers, setCurrentQuestionAnswers] = useState([]);

  const handleAddQuestion = () => {
    const newQuestion = {
      title: currentQuestion,
      answers: currentQuestionAnswers,
    };

    setQuestions([...questions, newQuestion]);
    setCurrentQuestion("");
    setCurrentQuestionAnswers([]);
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
          Soru Cevap İçeriği Üret
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
            <Icons.QuestionMarkIcon
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
            Test Soruları
          </Components.Typography>

          <Components.Box sx={{ width: "100%", marginTop: 4, marginBottom: 4 }}>
            <Components.Grid container spacing={2}>
              {questions.map((question, index) => {
                return (
                  <Components.Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Components.Card sx={{ width: "100%" }}>
                      <Components.CardContent>
                        <Components.Typography
                          sx={{
                            fontSize: 14,
                          }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {index + 1}. Soru
                        </Components.Typography>
                        <Components.Typography variant="h5" component="div">
                          {question.title}
                        </Components.Typography>
                        <Components.Typography
                          sx={{
                            fontSize: 14,
                            marginTop: "1rem",
                          }}
                          color="text.secondary"
                        >
                          Cevaplar
                        </Components.Typography>
                        {question.answers.map((answer, index) => {
                          return (
                            <Components.FormControlLabel
                              sx={{
                                width: "100%",
                              }}
                              control={
                                <Components.Radio
                                  sx={{
                                    color: answer.isCorrect
                                      ? "#2CCDA4"
                                      : "#ff0000",
                                  }}
                                />
                              }
                              label={answer.title}
                            />
                          );
                        })}
                      </Components.CardContent>
                    </Components.Card>
                  </Components.Grid>
                );
              })}
            </Components.Grid>
          </Components.Box>

          <Components.Box sx={{ width: "100%" }}>
            <Components.TextField
              id="outlined-basic"
              placeholder={"Soru " + (questions.length + 1)}
              variant="outlined"
              value={currentQuestion}
              onChange={(e) => setCurrentQuestion(e.target.value)}
              fullWidth
              sx={{ mt: 1 }}
            />
            <Components.TextField
              id="outlined-basic"
              placeholder="Cevap"
              value={currentAnswer.title}
              variant="outlined"
              onChange={(e) => {
                setCurrentAnswer({
                  ...currentAnswer,
                  title: e.target.value,
                });
              }}
              fullWidth
              sx={{
                mt: 1,
                width: "100%",
              }}
              InputProps={{
                endAdornment: (
                  <Components.InputAdornment position="end">
                    <Components.FormControlLabel
                      control={
                        <SwitchComponent
                          checked={currentAnswer.isCorrect}
                          onChange={(e) => {
                            setCurrentAnswer({
                              ...currentAnswer,
                              isCorrect: e.target.checked,
                            });
                          }}
                          sx={{ m: 1 }}
                        />
                      }
                    />

                    <Components.Button
                      variant="contained"
                      sx={{
                        color: "#fff",
                      }}
                      onClick={() => {
                        setCurrentQuestionAnswers([
                          ...currentQuestionAnswers,
                          currentAnswer,
                        ]);
                        setCurrentAnswer({
                          title: "",
                          isCorrect: true,
                        });
                      }}
                    >
                      Ekle
                    </Components.Button>
                  </Components.InputAdornment>
                ),
              }}
            />
            <Components.Box sx={{ width: "100%", marginTop: 4 }}>
              <Components.Grid container spacing={2}>
                {currentQuestionAnswers.map((answer, index) => {
                  return (
                    <Components.Grid
                      item
                      xs={12}
                      sm={12}
                      md={3}
                      lg={3}
                      xl={3}
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        gap: "1rem",
                      }}
                    >
                      <Components.Box
                        sx={{
                          width: "100%",
                          backgroundColor: "#e5e5e5",
                          borderRadius: "5px",
                          padding: "1rem",
                        }}
                      >
                        <Components.FormControlLabel
                          sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          control={
                            <Components.Radio
                              sx={{
                                color: answer.isCorrect ? "#2CCDA4" : "#ff0000",
                              }}
                            />
                          }
                          label={answer.title}
                        />
                      </Components.Box>
                    </Components.Grid>
                  );
                })}
              </Components.Grid>
            </Components.Box>
            <Components.Button
              sx={{
                mt: 2,
                backgroundColor: "#2CCDA4",
                width: "100%",
                padding: "1rem",
                fontSize: "1rem",
                marginTop: "2rem",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#2CCDA4",
                  color: "#fff",
                },
              }}
              onClick={handleAddQuestion}
            >
              Soru Ekle
            </Components.Button>
          </Components.Box>
        </Components.Box>
      </div>
    </div>
  );
}
