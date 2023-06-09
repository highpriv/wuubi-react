import Components from "../..";
import { useState } from "react";
const Icons = require("../../../assets/Icons");

export default function Populars({ maxCount = 5 }) {
  const [activeTab, setActiveTab] = useState(0);

  const componentsList = [
    {
      id: 0,
      title: "Popüler Üyeler",
      component: <Components.TopUsers maxCount={maxCount} />,
    },
    {
      id: 1,
      title: "Popüler İçerikler",
      component: <Components.TopUsers maxCount={maxCount} />,
    },
    {
      id: 2,
      title: "Popüler Gruplar",
      component: <Components.TopGroups maxCount={maxCount} />,
    },
  ];

  const switchTab = () => {
    if (activeTab < 2) setActiveTab(activeTab + 1);
    else setActiveTab(0);
  };

  return (
    <>
      {componentsList.map((element, index) => {
        if (element.id === activeTab)
          return (
            <Components.Box
              sx={{
                height: "100%",
                width: "20vw",
                maxWidth: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                boxSizing: "border-box",
              }}
            >
              <Components.Typography
                variant="h6"
                color="#212121"
                sx={{
                  textTransform: "uppercase",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {element.title}
                <Components.IconButton onClick={switchTab}>
                  <Icons.SwapVertIcon />
                </Components.IconButton>
              </Components.Typography>
              {element.component}
            </Components.Box>
          );
      })}
    </>
  );
}
