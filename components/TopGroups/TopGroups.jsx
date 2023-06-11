import React from "react";
import styles from "./TopGroups.module.css";
import Components from "@components";
const Icons = require("../../assets/Icons");
export default function TopGroups({ maxCount }) {
  const topGroups = [1, 2, 3, 4, 5];

  return (
    <div className={styles.wrapperTopGroups}>
      {topGroups.map((element, index) => {
        if (index < maxCount) {
          return (
            <Components.ListItem
              alignItems="flex-start"
              className={styles.listItem}
            >
              <Components.ListItemAvatar>
                <Components.Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
              </Components.ListItemAvatar>
              <Components.ListItemText
                primary="Canberk Beren"
                secondary={
                  <React.Fragment>
                    <Components.Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      @canberkberen
                    </Components.Typography>
                  </React.Fragment>
                }
              />

              <Components.ListItemText
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
                primary={
                  <React.Fragment>
                    <Components.Typography
                      sx={{
                        display: "flex",
                        padding: "3px",
                        backgroundColor: "#ECAD2E",
                        borderRadius: "3px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      variant="caption"
                      color="text.primary"
                    >
                      402 üye
                    </Components.Typography>
                  </React.Fragment>
                }
              />
            </Components.ListItem>
          );
        }
      })}
    </div>
  );
}
