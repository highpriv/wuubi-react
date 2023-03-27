import styles from "./LastPosts.module.css";

import Components from "../../components";
const Icons = require("../../assets/Icons");
export default function LastPosts() {
  return (
    <Components.Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ padding: "10px" }}
    >
      <Components.Grid item xs={6} md={6}>
        <Components.Card
          sx={{ width: "100%", boxShadow: "none", border: 0, borderRadius: 0 }}
        >
          <Components.CardMedia
            sx={{ height: 140, borderRadius: 1 }}
            image="https://picsum.photos/300/600"
            title="green iguana"
          />
          <Components.CardContent>
            <Components.Typography gutterBottom variant="h5" component="div">
              Lizard
            </Components.Typography>
            <Components.Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Components.Typography>
          </Components.CardContent>
          <Components.CardActions
            sx={{ display: "flex" }}
            className={styles.actionButtons}
          >
            <div>
              <Components.Typography variant="body2" color="text.secondary">
                Okumaya Devam Et
              </Components.Typography>
            </div>
            <div>
              <Components.IconButton>
                <Icons.FavoriteBorderIcon />
              </Components.IconButton>

              <Components.IconButton>
                <Icons.BookmarkBorderIcon />
              </Components.IconButton>
            </div>
          </Components.CardActions>
        </Components.Card>
      </Components.Grid>

      <Components.Grid item xs={6} md={6}>
        <Components.Card
          sx={{ width: "100%", boxShadow: "none", border: 0, borderRadius: 0 }}
        >
          <Components.CardMedia
            sx={{ height: 140, borderRadius: 1 }}
            image="https://picsum.photos/300/600"
            title="green iguana"
          />
          <Components.CardContent>
            <Components.Typography gutterBottom variant="h5" component="div">
              Lizard
            </Components.Typography>
            <Components.Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Components.Typography>
          </Components.CardContent>
          <Components.CardActions
            sx={{ display: "flex" }}
            className={styles.actionButtons}
          >
            <div>
              <Components.Typography variant="body2" color="text.secondary">
                Okumaya Devam Et
              </Components.Typography>
            </div>
            <div>
              <Components.IconButton>
                <Icons.FavoriteBorderIcon />
              </Components.IconButton>

              <Components.IconButton>
                <Icons.BookmarkBorderIcon />
              </Components.IconButton>
            </div>
          </Components.CardActions>
        </Components.Card>
      </Components.Grid>

      <Components.Grid item xs={6} md={6}>
        <Components.Card
          sx={{ width: "100%", boxShadow: "none", border: 0, borderRadius: 0 }}
        >
          <Components.CardMedia
            sx={{ height: 140, borderRadius: 1 }}
            image="https://picsum.photos/300/600"
            title="green iguana"
          />
          <Components.CardContent>
            <Components.Typography gutterBottom variant="h5" component="div">
              Lizard
            </Components.Typography>
            <Components.Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Components.Typography>
          </Components.CardContent>
          <Components.CardActions
            sx={{ display: "flex" }}
            className={styles.actionButtons}
          >
            <div>
              <Components.Typography variant="body2" color="text.secondary">
                Okumaya Devam Et
              </Components.Typography>
            </div>
            <div>
              <Components.IconButton>
                <Icons.FavoriteBorderIcon />
              </Components.IconButton>

              <Components.IconButton>
                <Icons.BookmarkBorderIcon />
              </Components.IconButton>
            </div>
          </Components.CardActions>
        </Components.Card>
      </Components.Grid>

      <Components.Grid item xs={6} md={6}>
        <Components.Card
          sx={{ width: "100%", boxShadow: "none", border: 0, borderRadius: 0 }}
        >
          <Components.CardMedia
            sx={{ height: 140, borderRadius: 1 }}
            image="https://picsum.photos/300/600"
            title="green iguana"
          />
          <Components.CardContent>
            <Components.Typography gutterBottom variant="h5" component="div">
              Lizard
            </Components.Typography>
            <Components.Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Components.Typography>
          </Components.CardContent>
          <Components.CardActions
            sx={{ display: "flex" }}
            className={styles.actionButtons}
          >
            <div>
              <Components.Typography variant="body2" color="text.secondary">
                Okumaya Devam Et
              </Components.Typography>
            </div>
            <div>
              <Components.IconButton>
                <Icons.FavoriteBorderIcon />
              </Components.IconButton>

              <Components.IconButton>
                <Icons.BookmarkBorderIcon />
              </Components.IconButton>
            </div>
          </Components.CardActions>
        </Components.Card>
      </Components.Grid>
    </Components.Grid>
  );
}
