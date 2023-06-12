import Components from "@components";
import styles from "../Components.module.css";
const Icons = require("../../../../../../assets/Icons");
import { useState, useEffect } from "react";
export default function Hashtags() {
  const contentItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const subItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const maxElement = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [elements, setElements] = useState(subItems.slice(0, maxElement));

  const nextPage = () => {
    if (currentPage * maxElement >= subItems.length) return;
    const firstElementIndex = currentPage * maxElement;
    const lastElementIndex = firstElementIndex + maxElement;

    const nextElements = subItems.slice(firstElementIndex, lastElementIndex);
    setElements(nextElements);

    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 1) return;

    const firstElementIndex = (currentPage - 2) * maxElement;
    const lastElementIndex = firstElementIndex + maxElement;

    const nextElements = subItems.slice(firstElementIndex, lastElementIndex);
    setElements(nextElements);

    setCurrentPage(currentPage - 1);
  };

  return (
    <Components.Box className={styles.wrapperBox}>
      {contentItems.map((item, index) => (
        <Components.Card
          raised={index === 0}
          key={index}
          sx={{
            marginBottom: "1rem",
            width: "100%",
          }}
        >
          <Components.CardHeader
            title="#ShrimpandChorizo"
            subheader="1442 paylaşım"
            action={
              <>
                <Components.IconButton
                  aria-label="settings"
                  onClick={() => {
                    prevPage();
                  }}
                >
                  <Icons.KeyboardArrowLeftIcon />
                </Components.IconButton>
                <Components.IconButton
                  aria-label="settings"
                  onClick={() => {
                    nextPage();
                  }}
                >
                  <Icons.KeyboardArrowRightIcon />
                </Components.IconButton>
              </>
            }
          />

          <Components.CardContent>
            <Components.Box sx={{ display: "flex", width: "100%" }}>
              <Components.Grid container spacing={2}>
                {elements.map((item, index) => (
                  <Components.Grid item xs={12} sm={4}>
                    <Components.Card sx={{ width: "100%", boxShadow: "none" }}>
                      Item no: {item}
                      <Components.CardHeader
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        avatar={
                          <Components.Avatar
                            sx={{ width: "2rem", height: "2rem" }}
                            src="https://avatars.githubusercontent.com/u/55942632?v=4"
                          />
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="1442 takipçi"
                      />
                      <Components.CardContent>
                        <Components.CardMedia
                          component="img"
                          height="194"
                          sx={{
                            objectFit: "cover",
                            width: "100%",
                            marginBottom: "1rem",
                            borderRadius: "3px",
                          }}
                          image="https://material-ui.com/static/images/cards/paella.jpg"
                          alt="Paella dish"
                        />
                        <Components.Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          This impressive paella is a perfect party dish and a
                          fun meal to cook together with your guests. Add 1 cup
                          of frozen peas along.
                        </Components.Typography>
                      </Components.CardContent>
                    </Components.Card>
                  </Components.Grid>
                ))}
              </Components.Grid>
            </Components.Box>
          </Components.CardContent>
        </Components.Card>
      ))}
    </Components.Box>
  );
}
