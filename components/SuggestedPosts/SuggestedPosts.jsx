import styles from "./SuggestedPosts.module.css";
import Components from "@components";
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
    </Components.Grid>
  );
}
