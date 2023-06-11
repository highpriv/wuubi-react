import Components from "@components";
import styles from "./dialogModal.module.css";
const Icons = require("../../assets/Icons");

export default function DialogModal(props) {
  const types = {
    regError: "Hesap Oluşturulamadı :(",
    logError: "Giriş Yapılamadı :(",
  };

  const handleClose = () => {
    props.setRegisterError({
      status: false,
      message: "",
      type: "",
    });
  };

  return (
    <div>
      <Components.Dialog
        fullWidth
        maxWidth="xs"
        sx={{ position: "absolute", zIndex: 2 }}
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div
          style={{
            backgroundColor: "white",
            width: "50px",
            height: "50px",
            left: 0,
            top: 0,
            position: "absolute",
            zIndex: 999999999,
            borderRadius: "50%",
          }}
        >
          {props.type === "regError" ||
            (props.type === "logError" && (
              <Icons.ErrorIcon
                sx={{
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  color: "#ff6363",
                }}
              />
            ))}
        </div>

        <Components.Box
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            marginTop: 4,
            zIndex: 999999,
          }}
        >
          <Components.Box
            sx={{
              backgroundColor: "white",

              borderRadius: 2,
              marginTop: -2,
              marginLeft: 1,
              zIndex: -1,
              padding: 2,
            }}
            className={styles.dialogBox}
          >
            <Components.DialogTitle id="alert-dialog-title">
              {types[props.type]}
            </Components.DialogTitle>
            <Components.DialogContent>
              <Components.DialogContentText id="alert-dialog-description">
                {props.message}
              </Components.DialogContentText>
            </Components.DialogContent>
            <Components.DialogActions sx={{ justifyContent: "center" }}>
              <Components.Button
                onClick={handleClose}
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#ff6363", color: "white" }}
              >
                Kapat
              </Components.Button>
            </Components.DialogActions>
          </Components.Box>
        </Components.Box>
      </Components.Dialog>
    </div>
  );
}
