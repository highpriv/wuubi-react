import Components from "@components";
import styles from "../Components.module.css";
const Icons = require("../../../../../../assets/Icons");
import { useState, useEffect } from "react";
export default function Hashtags() {
  const contentItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Components.Box className={styles.wrapperBox}>
      <Components.Grid container spacing={2}>
        {contentItems.map((item, index) => (
          <Components.Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Components.Card
              key={index}
              sx={{
                marginBottom: "1rem",
                width: "100%",
              }}
            >
              <Components.CardHeader
                title={
                  <Components.Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "0.5rem",
                    }}
                  >
                    <Icons.TagIcon
                      sx={{
                        color: "#5e5e5e",
                      }}
                    />
                    <Components.Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#5e5e5e",
                      }}
                    >
                      LoremIpsum
                    </Components.Typography>
                  </Components.Box>
                }
                subheader="1442 paylaşım"
              />
              <Components.CardContent sx={{ padding: "0.5rem" }}>
                <Components.Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Components.AvatarGroup max={7}>
                    <Components.Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <Components.Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                    <Components.Avatar
                      alt="Agnes Walker"
                      src="/static/images/avatar/4.jpg"
                    />
                    <Components.Avatar
                      alt="Trevor Henderson"
                      src="/static/images/avatar/5.jpg"
                    />
                    <Components.Avatar
                      alt="Trevor Henderson"
                      src="/static/images/avatar/5.jpg"
                    />
                    <Components.IconButton disabled>
                      <Icons.MoreHorizIcon />
                    </Components.IconButton>
                  </Components.AvatarGroup>
                </Components.Box>
              </Components.CardContent>
            </Components.Card>
          </Components.Grid>
        ))}
      </Components.Grid>
    </Components.Box>
  );
}
