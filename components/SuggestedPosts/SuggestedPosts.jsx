import styles from "./SuggestedPosts.module.css";
import Components from "../../components";
const Icons = require("../../assets/Icons");
import { useState, useEffect } from "react";

export default function SuggestedPosts() {
  return (
    <Components.Grid className={styles.wrapperSuggestedContents}>
      <Components.Typography
        variant="h6"
        color="#212121"
        sx={{
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Önerilen İçerikler
      </Components.Typography>

      <Components.Grid item xs={12} md={12}>
        <Components.Card
          sx={{
            width: "100%",
            boxShadow: "none",
            border: 0,
            borderRadius: 0,
          }}
        >
          <Components.CardMedia
            sx={{ width: 400, height: 200, borderRadius: 1 }}
            image="https://picsum.photos/300/600"
            title="green iguana"
          />
          <Components.CardContent>
            <Components.Typography gutterBottom variant="body1" component="div">
              Lizard
            </Components.Typography>
          </Components.CardContent>
        </Components.Card>
      </Components.Grid>

      <Components.Grid item xs={12} md={12}>
        <Components.Card
          sx={{
            width: "100%",
            boxShadow: "none",
            border: 0,
            borderRadius: 0,
          }}
        >
          <Components.CardMedia
            sx={{ width: 400, height: 200, borderRadius: 1 }}
            image="https://picsum.photos/300/600"
            title="green iguana"
          />
          <Components.CardContent>
            <Components.Typography gutterBottom variant="body1" component="div">
              Lizard
            </Components.Typography>
          </Components.CardContent>
        </Components.Card>
      </Components.Grid>
    </Components.Grid>
  );
}
