import styles from "./IcerikUret.module.css";
import Components from "@components";
export default function IcerikUret() {
  const contentTypes = [
    {
      name: "Standart İçerik",
      description: "Metin, resim, video, ses içeriklerini oluşturabilirsiniz.",
      image: "../img/create-content/content.png",
      url: "/icerik-uret/standart",
    },
    {
      name: "Liste",
      description: "Maddelerden oluşan liste içerikleri oluşturabilirsiniz.",
      image: "../img/create-content/list.png",
      url: "/icerik-uret/liste",
    },
    {
      name: "Test",
      description:
        "Sorulara vermiş olduğunuz cevaplara göre sonuç alabileceğiniz test içerikleri oluşturabilirsiniz.",
      image: "../img/create-content/test.png",
      url: "/icerik-uret/test",
    },
    {
      name: "Soru",
      description:
        "Doğru ve yanlış cevaplarınızı belirleyebileceğiniz soru içerikleri oluşturabilirsiniz.",
      image: "../img/create-content/quiz.png",
      url: "/icerik-uret/soru",
    },
    {
      name: "Anket",
      description: "Anket içerikleri oluşturabilirsiniz.",
      image: "../img/create-content/poll.png",
      url: "/icerik-uret/anket",
    },
  ];

  return (
    <div>
      <Components.Box className={styles.wrapper}>
        <Components.Typography
          gutterBottom
          variant="h3"
          color="#e8e8e8"
          component="h2"
          sx={{
            width: "100%",
          }}
        >
          İçerik Üret
        </Components.Typography>
        <Components.Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 5 }}
          rowSpacing={{ xs: 1, sm: 2, md: 5 }}
          sx={{ mt: 4, mb: 2 }}
        >
          {contentTypes.map((item, index) => {
            return (
              <Components.Grid item xs={12} sm={6} md={index === 0 ? 12 : 6}>
                <Components.Link href={item.url} underline="none">
                  <Components.Card
                    sx={[
                      {
                        "&:hover": {
                          backgroundColor: "#f7f7f7",
                          color: "#fff",
                          cursor: "pointer",
                          transition: "all 0.3s ease-in-out",
                        },
                        position: "relative",
                        borderRadius: "10px",
                      },
                    ]}
                  >
                    <Components.CardContent>
                      <Components.Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        color="#00b777"
                      >
                        {item.name}
                      </Components.Typography>
                      <Components.Box
                        sx={{
                          width: "100%",
                          height: "10vh",
                          top: "1vh",
                          right: "1vw",
                          position: "absolute",
                          background: `url(${item.image})`, // Apply the background image here
                          backgroundSize: "6vh",
                          backgroundPosition: "98% 20%",
                          backgroundRepeat: "no-repeat",
                          filter: "grayscale(50%)",
                        }}
                      ></Components.Box>
                      <Components.Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        sx={{
                          width: "80%",
                        }}
                      >
                        {item.description}
                      </Components.Typography>
                    </Components.CardContent>
                  </Components.Card>
                </Components.Link>
              </Components.Grid>
            );
          })}
        </Components.Grid>
      </Components.Box>
    </div>
  );
}
