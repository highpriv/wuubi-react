import PageComponents from "./components";
import Components from "../../components";
import styles from "./Explore.module.css";

export default function ExplorePage() {
  return (
    <Components.Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#f4f6f8",
        height: "100%",
      }}
    >
      <Components.Box className={styles.leftSide}>
        <PageComponents.LeftSideBar />
      </Components.Box>
      <Components.Box sx={{ p: 2 }} className={styles.mainWrapper}>
        <PageComponents.RelatedGroups />
      </Components.Box>
      <Components.Box sx={{ p: 2 }} className={styles.rightSide}>
        <p>asd</p>
        <p>asdasdasd</p>
      </Components.Box>
    </Components.Box>
  );
}
