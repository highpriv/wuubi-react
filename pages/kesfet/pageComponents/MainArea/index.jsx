import styles from "./MainArea.module.css";
import Components from "@components";
const Icons = require("../../../../assets/Icons");
import PageComponents from "./components";
import { useState, useEffect, use } from "react";

export default function MainArea({ selectedPage }) {
  const pageRender = () => {
    switch (selectedPage) {
      case "home":
        return <PageComponents.Publications />;
      case "messages":
        return <PageComponents.Contents />;
      case "profile":
        return <PageComponents.Publications />;
      case "logout":
        return <PageComponents.Contents />;
      case "publications":
        return <PageComponents.Publications />;
      default:
        return <PageComponents.Publications />;
    }
  };

  return (
    <Components.Box
      sx={{
        width: "100%",
      }}
    >
      <Components.Box
        sx={{
          width: "100%",
        }}
      >
        <Components.Box
          sx={{
            width: "100%",
          }}
        >
          <Components.Typography variant="h6"></Components.Typography>
          <Components.Box
            sx={{
              width: "100%",
              marginTop: "1rem",
            }}
          >
            {pageRender()}
          </Components.Box>
        </Components.Box>
      </Components.Box>
    </Components.Box>
  );
}
