import Components from "../..";
const Icons = require("../../../assets/Icons");

export default function Populars() {
  return (
    <>
      <Components.Typography
        variant="h6"
        color="#212121"
        sx={{
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Popüler Üyeler
        <Components.IconButton>
          <Icons.SwapVertIcon />
        </Components.IconButton>
      </Components.Typography>

      <Components.TopUsers />
    </>
  );
}
