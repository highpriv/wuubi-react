import { useState } from "react";
import styles from "./userProfile.module.css";
import Components from "@components";
import UserComponents from "./components";
const Icons = require("../../../assets/Icons");

export default function userProfile() {
  const [selectedSection, setSelectedSection] = useState("contents");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const renderSection = () => {
    switch (selectedSection) {
      case "contents":
        return <UserComponents.userContents />;
      case "posts":
        return <UserComponents.userPosts />;
      case "followers":
        return <UserComponents.userContents />;
      case "followings":
        return <UserComponents.userContents />;
      default:
        return <UserComponents.userContents />;
    }
  };

  const sectionButtons = [
    {
      name: "İçerik",
      value: 3,
      onClick: () => handleSectionChange("contents"),
    },
    {
      name: "Paylaşım",
      value: 7,
      onClick: () => handleSectionChange("posts"),
    },
    {
      name: "Takipçi",
      value: 5,
      onClick: () => handleSectionChange("followers"),
    },
    {
      name: "Takip Edilen",
      value: 12,
      onClick: () => handleSectionChange("followings"),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.coverImage} />
      <div className={styles.wrapperProfile}>
        <span className={styles.userAvatar}>
          <Components.Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
            sx={{ width: 150, height: 150 }}
          />
        </span>
        <div className={styles.userSummary}>
          <Components.Typography
            variant="h5"
            className={styles.fullname}
            color="#2d2d2d"
          >
            Canberk Beren
          </Components.Typography>
          <Components.Typography
            variant="body1"
            className={styles.username}
            color="#bfbfbf"
          >
            <Components.Link href="/u/canberkberen" className={styles.link}>
              @canberkberen
            </Components.Link>
          </Components.Typography>
          <Components.Typography
            variant="body2"
            className={styles.bio}
            color="#bfbfbf"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam
          </Components.Typography>
          <div className={styles.userStats}>
            {sectionButtons.map((button) => (
              <div className={styles.userStat}>
                <Components.Typography
                  variant="h5"
                  className={styles.statNumber}
                  color="#2d2d2d"
                >
                  {button.value}
                </Components.Typography>
                <Components.Typography
                  variant="body2"
                  className={styles.statName}
                  color="#bfbfbf"
                  onClick={button.onClick}
                >
                  <Components.Link href="#contents" className={styles.link}>
                    {button.name}
                  </Components.Link>
                </Components.Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.userActions}>
          <Components.Button
            variant="contained"
            className={styles.followButton}
            startIcon={<Icons.PersonAddAlt1Icon />}
          >
            Takip Et
          </Components.Button>
          <Components.Button
            variant="outlined"
            className={styles.messageButton}
            startIcon={<Icons.MailIcon />}
          >
            Mesaj Gönder
          </Components.Button>
        </div>

        <div className={styles.userContent}>{renderSection()}</div>
      </div>
    </div>
  );
}
