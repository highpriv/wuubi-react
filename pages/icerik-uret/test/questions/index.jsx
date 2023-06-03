import Components from "../../../../components";
import { Fragment, useEffect, useState } from "react";
const Icons = require("../../../../assets/icons");
import styles from "./Questions.module.css";

export default function TestQuestions() {
  const [testResults, setTestResults] = useState(0);

  const [currentAnswer, setCurrentAnswer] = useState({});

  const [testQuestions, setTestQuestions] = useState([]);
  const [questionAnswers, setQuestionAnswers] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const getLocalStorage = () => {
      const localData = localStorage.getItem("testQuestions");
      return localData ? JSON.parse(localData) : [];
    };
    setTestQuestions(getLocalStorage());

    const getResultCount = () => {
      const localData = localStorage.getItem("testResults");
      return localData ? JSON.parse(localData) : 0;
    };
    setTestResults(getResultCount());
  }, []);

  const addToLocalStorage = (newTestQuestions) => {
    localStorage.setItem("testQuestions", JSON.stringify(newTestQuestions));
  };

  const [newQuestion, setNewQuestion] = useState({
    title: "",
    description: "",
    image: "",
    answers: [],
  });

  const removeTestQuestion = (index) => {
    const newTestQuestions = [...testQuestions];
    newTestQuestions.splice(index, 1);
    setTestQuestions(newTestQuestions);
    addToLocalStorage(newTestQuestions);
  };

  const editTestQuestion = (index, editingField, newValue, answerIndex) => {
    const newTestQuestions = [...testQuestions];

    switch (editingField) {
      case "questionTitle":
        newTestQuestions[index].title = newValue;
        break;
      case "questionDescription":
        newTestQuestions[index].description = newValue;
        break;
      case "answerTitle":
        newTestQuestions[index].answers[answerIndex].title = newValue;
        break;
      case "answerResult":
        newTestQuestions[index].answers[answerIndex].result = newValue;
        break;
    }

    setTestQuestions(newTestQuestions);
    addToLocalStorage(newTestQuestions);
  };
  return (
    <Components.Box className={styles.testQuestionsWrapper}>
      {testResults.length > 0 ? (
        <Fragment key={testResults.length}>
          <Components.Grid container spacing={2}>
            {testQuestions.map((item, index) => {
              return (
                <Components.Grid item xs={12} sm={6}>
                  <Components.Card sx={{ position: "relative" }}>
                    {editIndex === index ? (
                      ""
                    ) : (
                      <Components.Box className={styles.questionItem}>
                        <Components.Typography
                          variant="h6"
                          component="h2"
                          className={styles.orderNo}
                        >
                          #{index + 1}
                        </Components.Typography>
                      </Components.Box>
                    )}
                    <Components.CardContent className={styles.cardContent}>
                      <Components.CardMedia
                        src="https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg"
                        component="img"
                        className={styles.cardMedia}
                      />

                      <Components.Box className={styles.questionContent}>
                        {editIndex === index ? (
                          <Components.TextField
                            label="Başlık"
                            variant="outlined"
                            value={item.title}
                            onChange={(e) => {
                              editTestQuestion(
                                index,
                                "questionTitle",
                                e.target.value
                              );
                            }}
                            sx={{
                              width: "100%",
                              marginBottom: "1rem",
                            }}
                          />
                        ) : (
                          <Components.Typography
                            variant="h6"
                            component="h2"
                            color="#474747"
                            sx={{
                              width: "100%",
                              fontWeight: 700,
                              fontSize: "1.5rem",
                              color: "#2CCDA4",
                            }}
                          >
                            {item.title}
                          </Components.Typography>
                        )}
                        {editIndex === index ? (
                          <Components.TextField
                            label="Açıklama"
                            variant="outlined"
                            value={item.description}
                            onChange={(e) => {
                              editTestQuestion(
                                index,
                                "questionDescription",
                                e.target.value
                              );
                            }}
                            sx={{
                              width: "100%",
                              marginBottom: "1rem",
                            }}
                          />
                        ) : (
                          <Components.Typography
                            variant="body1"
                            sx={{
                              width: "100%",
                            }}
                          >
                            {item.description}
                          </Components.Typography>
                        )}

                        <Components.Box className={styles.questionAnswersText}>
                          <Components.Typography
                            variant="h5"
                            sx={{
                              width: "100%",
                              fontWeight: 700,
                              marginBottom: "1rem",
                            }}
                          >
                            Cevaplar
                          </Components.Typography>
                          {item?.answers?.map((answer, indexAnswer) => {
                            return (
                              <Components.Box
                                className={styles.questionAnswerItem}
                              >
                                <Components.Box
                                  className={styles.questionAnswerItemText}
                                >
                                  {editIndex === index ? (
                                    <Components.TextField
                                      label="Cevap"
                                      variant="outlined"
                                      fullWidth
                                      value={answer.title}
                                      onChange={(e) => {
                                        editTestQuestion(
                                          index,
                                          "answerTitle",
                                          e.target.value,
                                          indexAnswer
                                        );
                                      }}
                                      sx={{
                                        width: "100%",
                                        marginBottom: "1rem",
                                      }}
                                    />
                                  ) : (
                                    <Components.Typography
                                      variant="body1"
                                      sx={{
                                        width: "100%",
                                      }}
                                    >
                                      <b>Cevap</b>: {answer.title}
                                    </Components.Typography>
                                  )}
                                  {editIndex === index ? (
                                    <Components.Select
                                      sx={{ width: "100%" }}
                                      value={answer.result}
                                      onChange={(e) => {
                                        editTestQuestion(
                                          index,
                                          "answerResult",
                                          e.target.value,
                                          indexAnswer
                                        );
                                      }}
                                    >
                                      {testResults?.map((res) => {
                                        return (
                                          <Components.MenuItem
                                            value={res.title}
                                          >
                                            {res.title}
                                          </Components.MenuItem>
                                        );
                                      })}
                                    </Components.Select>
                                  ) : (
                                    <Components.Typography
                                      variant="body1"
                                      sx={{
                                        width: "100%",
                                      }}
                                    >
                                      <b>Sonuç</b>: {answer.result}
                                    </Components.Typography>
                                  )}
                                </Components.Box>
                              </Components.Box>
                            );
                          })}
                        </Components.Box>
                      </Components.Box>
                    </Components.CardContent>
                    <Components.CardActions
                      className={styles.answerActionButton}
                    >
                      <Components.Button
                        onClick={() => removeTestQuestion(index)}
                        color="error"
                      >
                        Sil
                      </Components.Button>
                      {editIndex === index ? (
                        <Components.Button
                          key={editIndex}
                          variant="contained"
                          onClick={() => {
                            setEditIndex(null);
                          }}
                        >
                          Kaydet
                        </Components.Button>
                      ) : (
                        <Components.Button
                          key={editIndex}
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            setEditIndex(index);
                          }}
                        >
                          Düzenle
                        </Components.Button>
                      )}
                    </Components.CardActions>
                  </Components.Card>
                </Components.Grid>
              );
            })}
          </Components.Grid>
          <Components.Box
            sx={{
              width: "100%",
              mt: 6,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2vw",
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              padding: "3vh",
              boxSizing: "border-box",
              position: "relative",
              boxShadow: "0px 0px 5px 3px rgba(0, 0, 0, 0.25) inset",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
            }}
          >
            <Components.Typography
              variant="h6"
              component="h2"
              color="#9b9b9b"
              className={styles.questionNumber}
            >
              {testQuestions.length + 1}.
            </Components.Typography>
            <Components.Box
              sx={{
                cursor: "pointer",
                position: "relative",
                "&:hover": {
                  filter: "brightness(0.8)",
                  transition: "all 0.3s ease-in-out",
                },
                "&:hover > .edit-icon": {
                  opacity: "1",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              <img
                src="https://i.ibb.co/0jX5QqH/Rectangle-1.png"
                alt="Rectangle-1"
                border="0"
                style={{
                  height: "30vh",
                  width: "30vh",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <Components.IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: "0",
                }}
                className="edit-icon"
              >
                <Icons.EditIcon
                  sx={{
                    fontSize: "3rem",
                  }}
                />
              </Components.IconButton>
            </Components.Box>
            <Components.Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "column",
                  lg: "column",
                  xl: "column",
                },
              }}
            >
              <Components.TextField
                id="outlined-basic"
                placeholder="Soru Başlığı"
                variant="outlined"
                fullWidth
                value={newQuestion["title"]}
                onChange={(e) => {
                  setNewQuestion({ ...newQuestion, title: e.target.value });
                }}
              />
              <Components.TextField
                id="outlined-basic"
                placeholder="Soru Açıklaması"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={newQuestion["description"]}
                onChange={(e) => {
                  setNewQuestion({
                    ...newQuestion,
                    description: e.target.value,
                  });
                }}
                sx={{ mt: 1 }}
              />
              <Components.Divider sx={{ mt: 2, mb: 2 }} />

              <Components.Box className={styles.addNewAnswerBox}>
                <Components.Typography
                  variant="h6"
                  component="h2"
                  color="#9b9b9b"
                  className={styles.centeredText}
                >
                  Cevaplar
                </Components.Typography>
                <Components.Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                    gap: "2vw",
                  }}
                >
                  {questionAnswers.map((answer, index) => {
                    return (
                      <Components.Box className={styles.answerBox}>
                        <Components.Typography
                          variant="h6"
                          component="h2"
                          color="#2CCDA4"
                        >
                          {answer["title"]}
                        </Components.Typography>
                        <Components.Typography
                          variant="h6"
                          component="h2"
                          color="#9b9b9b"
                        >
                          <b> Sonuç:</b> {answer["result"]}
                        </Components.Typography>
                      </Components.Box>
                    );
                  })}
                </Components.Box>
                <Components.Box sx={{ mt: 2 }}>
                  <Components.TextField
                    id="outlined-basic"
                    placeholder="Soruya Bir Yanıt Ekleyin"
                    variant="outlined"
                    value={currentAnswer["title"]}
                    onChange={(e) => {
                      setCurrentAnswer({
                        ...currentAnswer,
                        title: e.target.value,
                      });
                    }}
                    fullWidth
                  />
                  <Components.Select
                    sx={{ mt: 2 }}
                    value={currentAnswer["result"]}
                    onChange={(e) => {
                      setCurrentAnswer({
                        ...currentAnswer,
                        result: e.target.value,
                      });
                    }}
                    fullWidth
                    displayEmpty
                  >
                    <Components.MenuItem value="">
                      Bu cevap seçildiğinde hangi sonuca ulaşılacağını seçiniz
                    </Components.MenuItem>
                    {testResults.map((result) => {
                      return (
                        <Components.MenuItem value={result.title}>
                          {result.title}
                        </Components.MenuItem>
                      );
                    })}
                  </Components.Select>
                  <Components.Button
                    fullWidth
                    variant="contained"
                    onClick={() => {
                      setQuestionAnswers([...questionAnswers, currentAnswer]);
                      setCurrentAnswer({
                        title: "",
                        result: "",
                      });
                    }}
                    sx={{ mt: 2, backgroundColor: "#2CCDA4" }}
                  >
                    Cevap Ekle
                  </Components.Button>
                </Components.Box>
              </Components.Box>

              <Components.Button
                fullWidth
                variant="contained"
                sx={{ mt: 6 }}
                onClick={() => {
                  setTestQuestions([
                    ...testQuestions,
                    {
                      title: newQuestion["title"],
                      description: newQuestion["description"],
                      image: newQuestion["image"],
                      answers: questionAnswers,
                    },
                  ]);
                  addToLocalStorage([
                    ...testQuestions,
                    {
                      title: newQuestion["title"],
                      description: newQuestion["description"],
                      image: newQuestion["image"],
                      answers: questionAnswers,
                    },
                  ]);
                  setNewQuestion({
                    title: "",
                    description: "",
                    image: "",
                  });
                  setQuestionAnswers([]);
                }}
              >
                Test Sorusu Ekle
              </Components.Button>
            </Components.Box>
          </Components.Box>
        </Fragment>
      ) : (
        <Components.Typography
          variant="h6"
          component="h2"
          color="#9b9b9b"
          className={styles.textFirstAddResult}
        >
          Lütfen önce test sonucu ekleyin.
        </Components.Typography>
      )}
    </Components.Box>
  );
}
