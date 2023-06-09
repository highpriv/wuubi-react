import Components from "@components";
import PageComponents from "./components";
const Icons = require("../../assets/Icons");
export default function Messages() {
  return (
    <Components.Box
      sx={{
        width: "100%",
        backgroundColor: "#131313",
        boxSizing: "border-box",
        height: "100vh",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Components.Box
        sx={{
          display: "flex",
        }}
      >
        <PageComponents.SidebarMessages />
        <PageComponents.Messages />
      </Components.Box>
    </Components.Box>
  );
}
