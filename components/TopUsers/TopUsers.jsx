import React from "react";
import styles from "./TopUsers.module.css";
import Components from "../../components";
const Icons = require("../../assets/Icons");
export default function TopUsers() {
  return (
    <div className={styles.wrapperTopUsers}>
      <Components.ListItem alignItems="flex-start" className={styles.listItem}>
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
                3050 puan
              </Components.Typography>
            </React.Fragment>
          }
        />
      </Components.ListItem>
      <Components.ListItem alignItems="flex-start" className={styles.listItem}>
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
                3050 puan
              </Components.Typography>
            </React.Fragment>
          }
        />
      </Components.ListItem>

      <Components.ListItem alignItems="flex-start" className={styles.listItem}>
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
                3050 puan
              </Components.Typography>
            </React.Fragment>
          }
        />
      </Components.ListItem>

      <Components.ListItem alignItems="flex-start" className={styles.listItem}>
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
                3050 puan
              </Components.Typography>
            </React.Fragment>
          }
        />
      </Components.ListItem>

      <Components.ListItem alignItems="flex-start" className={styles.listItem}>
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
                3050 puan
              </Components.Typography>
            </React.Fragment>
          }
        />
      </Components.ListItem>
    </div>
  );
}
