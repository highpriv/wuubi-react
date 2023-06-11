import styles from "./Comment.module.css";
import Components from "@components";
const Icons = require("../../assets/Icons");
import React from "react";

export default function Comment() {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <div className={styles.commentsWrapper}>
      <Components.Typography variant="h6" gutterBottom component="div">
        Kullanıcı Yorumları
      </Components.Typography>
      <Components.List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Components.Grid
          container
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <Components.Grid item xs={12} md={10} lg={10}>
            <Components.ListItem alignItems="flex-start">
              <Components.ListItemAvatar>
                <Components.Avatar
                  alt="Cindy Baker"
                  src="/static/images/avatar/3.jpg"
                />
              </Components.ListItemAvatar>
              <Components.ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Components.Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Components.Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </Components.ListItem>
          </Components.Grid>

          <Components.Grid
            item
            xs={12}
            md={2}
            lg={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Components.Chip
              variant="outlined"
              color="success"
              label="55"
              onDelete={handleDelete}
              deleteIcon={<Icons.ThumbUpOffAltIcon />}
            />

            <Components.Chip
              variant="outlined"
              color="error"
              label="3"
              onClick={handleDelete}
              icon={<Icons.ThumbDownOffAltIcon />}
              sx={{ ml: 1 }}
            />
          </Components.Grid>
        </Components.Grid>

        <Components.Divider component="li" />

        <Components.Grid
          container
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <Components.Grid item xs={12} md={10} lg={10}>
            <Components.ListItem alignItems="flex-start">
              <Components.ListItemAvatar>
                <Components.Avatar
                  alt="Cindy Baker"
                  src="/static/images/avatar/3.jpg"
                />
              </Components.ListItemAvatar>
              <Components.ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Components.Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Components.Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </Components.ListItem>
          </Components.Grid>

          <Components.Grid
            item
            xs={12}
            md={2}
            lg={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Components.Chip
              variant="outlined"
              color="success"
              label="55"
              onDelete={handleDelete}
              deleteIcon={<Icons.ThumbUpOffAltIcon />}
            />

            <Components.Chip
              variant="outlined"
              color="error"
              label="3"
              onClick={handleDelete}
              icon={<Icons.ThumbDownOffAltIcon />}
              sx={{ ml: 1 }}
            />
          </Components.Grid>
        </Components.Grid>

        <Components.Divider component="li" />
        <Components.Grid
          container
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <Components.Grid item xs={12} md={10} lg={10}>
            <Components.ListItem alignItems="flex-start">
              <Components.ListItemAvatar>
                <Components.Avatar
                  alt="Cindy Baker"
                  src="/static/images/avatar/3.jpg"
                />
              </Components.ListItemAvatar>
              <Components.ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Components.Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Components.Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </Components.ListItem>
          </Components.Grid>

          <Components.Grid
            item
            xs={12}
            md={2}
            lg={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Components.Chip
              variant="outlined"
              color="success"
              label="55"
              onDelete={handleDelete}
              deleteIcon={<Icons.ThumbUpOffAltIcon />}
            />

            <Components.Chip
              variant="outlined"
              color="error"
              label="3"
              onClick={handleDelete}
              icon={<Icons.ThumbDownOffAltIcon />}
              sx={{ ml: 1 }}
            />
          </Components.Grid>
        </Components.Grid>
      </Components.List>
      <Components.TextField
        fullWidth
        label="Yorum Yaz"
        id="fullWidth"
        multiline
        rows={4}
        sx={{ mt: 2 }}
      />
      <Components.Typography
        variant="caption"
        display="block"
        gutterBottom
        sx={{
          mt: 2,
          color: "text.secondary",
        }}
      >
        *Yorumunuzun içeriği ve dil kullanımı ile ilgili sorumluluğunuz
        kendinize aittir.
      </Components.Typography>
      <Components.Button
        className={styles.buttonSend}
        variant="contained"
        sx={{
          mt: 2,
          mb: 2,
        }}
        endIcon={<Icons.SendIcon />}
      >
        Gönder
      </Components.Button>
    </div>
  );
}
