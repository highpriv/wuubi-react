import styles from "./Button.module.css";
import Button from "@mui/material/Button";


export default function WuubiButton(props) {

  return (
    <Button variant='contained' className={styles.buttonStyle} fullWidth={props.fullWidth}>{props.text}</Button>
  );
}
