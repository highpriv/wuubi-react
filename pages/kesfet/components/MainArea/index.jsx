import styles from "./RelatedGroups.module.css";
import Components from "../../../../components";
const Icons = require("../../../../assets/Icons");

export default function MainArea() {
  return (
    <Components.Box>
      <Components.Box className={styles.lastContents}>
        <Components.Box className={styles.lastContents}>
          <Components.Typography variant="h6">
            Öne Çıkan Kullanıcı Paylaşımları
          </Components.Typography>
        </Components.Box>
      </Components.Box>
    </Components.Box>
  );
}
