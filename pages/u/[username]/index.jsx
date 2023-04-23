import { useState } from "react";
import styles from "./userProfile.module.css";
import Components from "../../../components";
const Icons = require("../../../assets/Icons");

export default function userProfile() {
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
            <div className={styles.userStat}>
              <Components.Typography
                variant="h5"
                className={styles.statNumber}
                color="#2d2d2d"
              >
                5
              </Components.Typography>
              <Components.Typography
                variant="body2"
                className={styles.statName}
                color="#bfbfbf"
              >
                İçerik
              </Components.Typography>
            </div>
            <div className={styles.userStat}>
              <Components.Typography
                variant="h5"
                className={styles.statNumber}
                color="#2d2d2d"
              >
                7
              </Components.Typography>
              <Components.Typography
                variant="body2"
                className={styles.statName}
                color="#bfbfbf"
              >
                Paylaşım
              </Components.Typography>
            </div>
            <div className={styles.userStat}>
              <Components.Typography
                variant="h5"
                className={styles.statNumber}
                color="#2d2d2d"
              >
                53
              </Components.Typography>
              <Components.Typography
                variant="body2"
                className={styles.statName}
                color="#bfbfbf"
              >
                Takipçi
              </Components.Typography>
            </div>
            <div className={styles.userStat}>
              <Components.Typography
                variant="h5"
                className={styles.statNumber}
                color="#2d2d2d"
              >
                15
              </Components.Typography>
              <Components.Typography
                variant="body2"
                className={styles.statName}
                color="#bfbfbf"
              >
                Takip Edilen
              </Components.Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
