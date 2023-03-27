import Components from "../..";
import { useState } from "react";
const Icons = require("../../../assets/Icons");

export default function Populars() {
  const [activeTab, setActiveTab] = useState(0);

  const componentsList = [
    {
      id: 0,
      title: "Popüler Üyeler",
      component: <Components.TopUsers />,
    },
    {
      id: 1,
      title: "Popüler İçerikler",
      component: <Components.TopUsers />,
    },
    {
      id: 2,
      title: "Popüler Gruplar",
      component: <Components.TopGroups />,
    },
  ];

  const switchTab = () => {
    if (activeTab < 2) setActiveTab(activeTab + 1);
    else setActiveTab(0);
  };

  return (
    <>
      {componentsList.map((element) => {
        if (element.id === activeTab)
          return (
            <div>
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
            </div>
          );
      })}
    </>
  );
}
