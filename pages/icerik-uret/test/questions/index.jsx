import Components from "../../../../components";
import { Fragment, useEffect, useState } from "react";
const Icons = require("../../../../assets/icons");

export default function TestQuestions() {
  const [testQuestions, setTestQuestions] = useState([]);
  const [testResults, setTestResults] = useState(0);

  const [currentAnswer, setCurrentAnswer] = useState({});
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

  const editTestQuestion = (
    index,
    title,
    description,
    image,
    answerIndex,
    newAnswer,
    newResult
  ) => {
    const newTestQuestions = [...testQuestions];
    newTestQuestions[index] = {
      title,
      description,
      image,
      answers: [
        (newTestQuestions[index].answers[answerIndex] = {
          title: newAnswer,
          result: newResult,
        }),
      ],
    };
    setTestQuestions(newTestQuestions);
    addToLocalStorage(newTestQuestions);
  };
  return (
    <Components.Box
      sx={{
        mt: 6,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
                      <Components.Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          position: "absolute",
                          top: "0",
                          right: "0",
                          zIndex: "1",
                          color: "#c4c4c4",
                          margin: "1rem",
                        }}
                      >
                        <Components.Typography
                          variant="h6"
                          component="h2"
                          sx={{
                            width: "100%",
                            fontWeight: 700,
                            fontSize: "1rem",
                          }}
                        >
                          #{index + 1}
                        </Components.Typography>
                      </Components.Box>
                    )}
                    <Components.CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "1rem",
                      }}
                    >
                      <Components.CardMedia
                        src="https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg"
                        component="img"
                        sx={{
                          width: "20vh",
                          height: "20vh",
                          objectFit: "contain",
                          objectPosition: "center",
                          borderRadius: "5px",
                        }}
                      />

                      <Components.Box
                        sx={{
                          width: "100%",
                          marginLeft: "2vw",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                        }}
                      >
                        {editIndex === index ? (
                          <Components.TextField
                            label="Başlık"
                            variant="outlined"
                            value={item.title}
                            onChange={(e) => {
                              editTestQuestion(
                                index,
                                e.target.value,
                                item.description,
                                item.image
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
                                item.title,
                                e.target.value,
                                item.image
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

                        <Components.Box
                          sx={{
                            width: "100%",
                            backgroundColor: "#F5F5F5",
                            borderRadius: "10px",
                            padding: "1rem",
                            marginTop: "1rem",
                          }}
                        >
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
                          {item?.answers?.map((result, indexAnswer) => {
                            return (
                              <Components.Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  margin: "1rem",
                                  backgroundColor: "#F0C131",
                                  borderRadius: "5px",
                                  padding: "1rem",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <Components.Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    width: "100%",
                                  }}
                                >
                                  {editIndex === index ? (
                                    <Components.TextField
                                      label="Cevap"
                                      variant="outlined"
                                      fullWidth
                                      value={result.title}
                                      onChange={(e) => {
                                        editTestQuestion(
                                          index,
                                          item.title,
                                          item.description,
                                          item.image,
                                          indexAnswer,
                                          e.target.value,
                                          result.result
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
                                      <b>Cevap</b>: {result.title}
                                    </Components.Typography>
                                  )}
                                  {editIndex === index ? (
                                    <Components.Select
                                      sx={{ width: "100%" }}
                                      value={result.result}
                                      onChange={(e) => {
                                        editTestQuestion(
                                          index,
                                          item.title,
                                          item.description,
                                          item.image,
                                          indexAnswer,
                                          result.title,
                                          e.target.value
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
                                      <b>Sonuç</b>: {result.result}
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
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#F5F5F5",
                        borderRadius: "0px 0px 10px 10px",
                        boxShadow: "1px 1px 5px 0px #0000001A inset",
                      }}
                    >
                      <Components.Button
                        onClick={() => removeTestQuestion(index)}
                        color="error"
                        sx={{
                          width: "100%",
                          borderRadius: "10px",
                          fontWeight: 700,
                          "&:hover": {
                            backgroundColor: "#2CCDA4",
                          },
                        }}
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
                          sx={{
                            width: "100%",
                            borderRadius: "10px",
                            fontWeight: 700,
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
                          sx={{
                            width: "100%",
                            borderRadius: "10px",
                            backgroundColor: "#2CCDA4",
                            fontWeight: 700,
                            color: "#fff",
                            "&:hover": {
                              backgroundColor: "#2CCDA4",
                            },
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
              sx={{
                fontWeight: 700,
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: "0",
                left: "0",
                transform: "translate(-30%, -30%)",
                backgroundColor: "#eaeaea",
                borderRadius: "1.5rem",
                height: "3rem",
                width: "3rem",
                boxShadow: "1px 1px 5px 1px rgba(0, 0, 0, 0.25) inset",
              }}
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

              <Components.Box
                sx={{
                  width: "100%",
                  display: "flex",
                  backgroundColor: "#fff",
                  flexDirection: "column",
                  padding: "2vh",
                  boxSizing: "border-box",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 5px 3px rgba(0, 0, 0, 0.25) inset",
                }}
              >
                <Components.Typography
                  variant="h6"
                  component="h2"
                  color="#9b9b9b"
                  sx={{
                    fontWeight: 700,
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
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
                      <Components.Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          backgroundColor: "#F5F5F5",
                          borderRadius: "10px",
                          padding: "3vh",
                          boxSizing: "border-box",
                          position: "relative",
                          flexDirection: "column",
                        }}
                      >
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
                      <Components.Typography
                        variant="body1"
                        component="h2"
                        color="#9b9b9b"
                        sx={{
                          fontWeight: 700,
                          textAlign: "center",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Bu cevap seçildiğinde hangi sonuca ulaşılacağını seçiniz
                      </Components.Typography>
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
          sx={{
            fontWeight: 700,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5rem",
          }}
        >
          Lütfen önce test sonucu ekleyin.
        </Components.Typography>
      )}
    </Components.Box>
  );
}
