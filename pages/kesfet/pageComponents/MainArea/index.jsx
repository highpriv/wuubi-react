import styles from "./MainArea.module.css";
import Components from "@components";
const Icons = require("../../../../assets/Icons");
import PageComponents from "./components";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export default function MainArea({ selectedPage }) {
  const { data: session } = useSession();
  const router = useRouter();

  const pageRender = () => {
    switch (selectedPage) {
      case "home":
        router.push("/");
        break;
      case "profile":
        router.push("/u/" + session.user.username);
        break;
      case "logout":
        signOut();
        break;
      case "contents":
        return <PageComponents.Contents />;
      case "publications":
        return <PageComponents.Publications />;
      case "groups":
        return <PageComponents.Groups />;
      case "users":
        return <PageComponents.Users />;
      case "hashtags":
        return <PageComponents.Hashtags />;
      default:
        return <PageComponents.ArchivedPosts />;
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
              height: "100%",
              maxHeight: "100%",
              overflow: "auto",
            }}
          >
            {pageRender()}
          </Components.Box>
        </Components.Box>
      </Components.Box>
    </Components.Box>
  );
}
