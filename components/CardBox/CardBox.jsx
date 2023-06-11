import styles from "./CardBox.module.css";

import Components from "@components";
const Icons = require("../../assets/Icons");
export default function CardBox(props) {
  return (
    <div className={styles.boxWrapper}>
      <Components.Typography
        variant="h6"
        color="#212121"
        sx={{ textTransform: "uppercase", fontWeight: "bold" }}
      >
        {props.title}
      </Components.Typography>
      <Components.Typography
        variant="body2"
        color="#bcbcbc"
        sx={{ textTransform: "uppercase", fontWeight: "bold" }}
      >
        {props.subtitle}
      </Components.Typography>
      <Components.Typography
        variant="body1"
        color="#212121"
        sx={{ mb: 3, mt: 3 }}
      >
        {props.text}
      </Components.Typography>
      <Components.WuubiButton text={props.buttonText} fullWidth="true" />
    </div>
  );
}
