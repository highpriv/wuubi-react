import Components from "@components";
const Icons = require("../../../../assets/Icons");
export default function GroupStatics() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <Components.Box>
      <Components.Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 4,
        }}
      >
        <Components.TableContainer>
          <Components.Table sx={{ minWidth: 650 }} aria-label="simple table">
            <Components.TableHead>
              <Components.TableRow>
                <Components.TableCell>
                  <Components.Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    Başarı Adı
                  </Components.Typography>
                </Components.TableCell>
                <Components.TableCell align="right">
                  <Components.Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    Rozet
                  </Components.Typography>
                </Components.TableCell>
                <Components.TableCell align="right">
                  <Components.Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    Puan
                  </Components.Typography>
                </Components.TableCell>
                <Components.TableCell align="right">
                  <Components.Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    Kazanım Tarihi
                  </Components.Typography>
                </Components.TableCell>
              </Components.TableRow>
            </Components.TableHead>
            <Components.TableBody>
              {rows.map((row) => (
                <Components.TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <Components.TableCell component="th" scope="row">
                    {row.name}
                  </Components.TableCell>
                  <Components.TableCell align="right">
                    {row.calories}
                  </Components.TableCell>
                  <Components.TableCell align="right">
                    {row.fat}
                  </Components.TableCell>
                  <Components.TableCell align="right">
                    {row.carbs}
                  </Components.TableCell>
                </Components.TableRow>
              ))}
            </Components.TableBody>
          </Components.Table>
        </Components.TableContainer>
      </Components.Box>
    </Components.Box>
  );
}
