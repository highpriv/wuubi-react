import styles from "./HotPosts.module.css";
import Components from "../../components";
const Icons = require("../../assets/Icons");
import React from "react";

export default function HotPosts() {
  return (
    <div>
      <Components.Typography variant="h5" component="h5" gutterBottom>
        Yükselen İçerikler
      </Components.Typography>

      <Components.Grid
        container
        columnSpacing={{ xs: 1, sm: 5, md: 5 }}
        sx={{ mt: 2, mb: 2, padding: "30px" }}
      >
        <Components.Grid
          item
          xs={12}
          md={4}
          lg={4}
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          <Components.Card sx={{ maxWidth: 345, boxShadow: 0 }}>
            <Components.CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://picsum.photos/300/600"
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
            <Components.CardActions>
              <Components.Button size="small">İçeriği Oku</Components.Button>
            </Components.CardActions>
          </Components.Card>
        </Components.Grid>
        <Components.Grid
          item
          xs={12}
          md={4}
          lg={4}
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          <Components.Card sx={{ maxWidth: 345, boxShadow: 0 }}>
            <Components.CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://picsum.photos/300/600"
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
            <Components.CardActions>
              <Components.Button size="small">İçeriği Oku</Components.Button>
            </Components.CardActions>
          </Components.Card>
        </Components.Grid>
        <Components.Grid
          item
          xs={12}
          md={4}
          lg={4}
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          <Components.Card sx={{ maxWidth: 345, boxShadow: 0 }}>
            <Components.CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://picsum.photos/300/600"
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
            <Components.CardActions>
              <Components.Button size="small">İçeriği Oku</Components.Button>
            </Components.CardActions>
          </Components.Card>
        </Components.Grid>
      </Components.Grid>
    </div>
  );
}
