import Components from "@components";
const Icons = require("../../../../../../assets/Icons");
export default function Publications() {
  return (
    <Components.Box
      sx={{
        width: "95%",
        margin: "0 auto",
      }}
    >
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
          <Components.CardMedia
            component="img"
            height="194"
            image="https://material-ui.com/static/images/cards/paella.jpg"
            alt="Paella dish"
          />
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
