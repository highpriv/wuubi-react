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
        maxHeight: "100%",
        overflow: "hidden",
      }}
    >
      <Components.Box className={styles.leftSide}>
        <PageComponents.LeftSideBar />
      </Components.Box>

      <Components.Box className={styles.mainSection}>
        <Components.Box className={styles.mainSectionTop}>
          <PageComponents.TopBar />
        </Components.Box>

        <Components.Box sx={{ width: "100%" }} className={styles.mainWrapper}>
          <Components.Box className={styles.main}>
            <PageComponents.MainArea />
          </Components.Box>

          <Components.Box className={styles.rightSide}>
            <PageComponents.RightSidebar />
          </Components.Box>
        </Components.Box>
      </Components.Box>
    </Components.Box>
  );
}
