import Components from "@components";
import styles from "../Components.module.css";
const Icons = require("../../../../../../assets/Icons");
export default function Publications() {
  const cardImages = [1, 2, 3, 4];

  const cardImageColGrid = (index) => {
    switch (cardImages.length) {
      case 1:
        return 12;
      case 2:
        return 6;
      case 3:
        if (index === 0) {
          return 12;
        }
        return 6;
      case 4:
        return 6;
      default:
        return 3;
    }
  };

  return (
    <Components.Box className={styles.wrapperBox}>
      <Components.Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          padding: "1rem",
          boxSizing: "border-box",
          backgroundColor: "#fff",
          gap: "1rem",
          border: "1px solid #e4e6e8",
          borderRadius: "0.5rem",
        }}
      >
        <Components.Avatar />
        <Components.TextField
          id="standard-basic"
          placeholder="Paylaş"
          variant="standard"
          sx={{
            width: "100%",
          }}
        />{" "}
        <Components.Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Components.IconButton>
            <Icons.InsertPhotoOutlinedIcon />
          </Components.IconButton>
          <Components.IconButton>
            <Icons.SlideshowOutlinedIcon />
          </Components.IconButton>
          <Components.IconButton>
            <Icons.SendIcon />
          </Components.IconButton>
        </Components.Box>
      </Components.Box>
      <Components.Box>
        <Components.Card sx={{ width: "100%", marginTop: "1rem" }}>
          <Components.CardHeader
            avatar={
              <Components.Avatar
                sx={{ width: 56, height: 56 }}
                alt="Remy Sharp"
              />
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <Components.Box
            sx={{
              width: "100%",
              boxSizing: "border-box",
              padding: "1rem",
            }}
          >
            <Components.Grid container spacing={1}>
              {cardImages.map((item, index) => {
                return (
                  <Components.Grid item xs={cardImageColGrid(index)}>
                    <Components.CardMedia
                      component="img"
                      height="194"
                      sx={{
                        borderRadius: "0.5rem",
                      }}
                      xs={12}
                      md={10}
                      lg={10}
                      image="https://material-ui.com/static/images/cards/paella.jpg"
                      alt="Paella dish"
                    />
                  </Components.Grid>
                );
              })}
            </Components.Grid>
          </Components.Box>
          <Components.CardContent>
            <Components.Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Components.Typography>
          </Components.CardContent>
          <Components.CardActions disableSpacing>
            <Components.IconButton aria-label="add to favorites">
              <Icons.FavoriteIcon />
            </Components.IconButton>
            <Components.IconButton aria-label="share">
              <Icons.FavoriteIcon />
            </Components.IconButton>
            <Components.IconButton
              sx={{
                marginLeft: "auto",
              }}
              aria-label="show more"
            >
              <Icons.FavoriteIcon />
            </Components.IconButton>
          </Components.CardActions>
        </Components.Card>

        <Components.Card sx={{ width: "100%", marginTop: "1rem" }}>
          <Components.CardHeader
            avatar={
              <Components.Avatar
                sx={{ width: 56, height: 56 }}
                alt="Remy Sharp"
              />
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <Components.Box
            sx={{
              width: "100%",
              boxSizing: "border-box",
              padding: "1rem",
            }}
          >
            <Components.Grid container spacing={1}>
              {cardImages.map((item, index) => {
                return (
                  <Components.Grid item xs={cardImageColGrid(index)}>
                    <Components.CardMedia
                      component="img"
                      height="194"
                      sx={{
                        borderRadius: "0.5rem",
                      }}
                      xs={12}
                      md={10}
                      lg={10}
                      image="https://material-ui.com/static/images/cards/paella.jpg"
                      alt="Paella dish"
                    />
                  </Components.Grid>
                );
              })}
            </Components.Grid>
          </Components.Box>
          <Components.CardContent>
            <Components.Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Components.Typography>
          </Components.CardContent>
          <Components.CardActions disableSpacing>
            <Components.IconButton aria-label="add to favorites">
              <Icons.FavoriteIcon />
            </Components.IconButton>
            <Components.IconButton aria-label="share">
              <Icons.FavoriteIcon />
            </Components.IconButton>
            <Components.IconButton
              sx={{
                marginLeft: "auto",
              }}
              aria-label="show more"
            >
              <Icons.FavoriteIcon />
            </Components.IconButton>
          </Components.CardActions>
        </Components.Card>
      </Components.Box>
    </Components.Box>
  );
}
