import PageComponents from "./pageComponents";
import Components from "@components";
import styles from "./Explore.module.css";
import { useState } from "react";

export default function ExplorePage() {
  const [selectedPage, setSelectedPage] = useState("");

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
        <PageComponents.LeftSideBar setSelectedPage={setSelectedPage} />
      </Components.Box>

      <Components.Box className={styles.mainSection}>
        <Components.Box className={styles.mainSectionTop}>
          <PageComponents.TopBar />
        </Components.Box>

        <Components.Box sx={{ width: "100%" }} className={styles.mainWrapper}>
          <Components.Box
            sx={{
              width: "100%",
              maxWidth: "100%",
              boxSizing: "border-box",
              height: "100vh",
              maxHeight: "100vh",
              overflow: "auto",
            }}
          >
            <PageComponents.MainArea selectedPage={selectedPage} />
          </Components.Box>

          <Components.Box className={styles.rightSide}>
            <PageComponents.RightSidebar />
          </Components.Box>
        </Components.Box>
      </Components.Box>
    </Components.Box>
  );
}
