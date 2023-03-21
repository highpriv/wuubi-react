import styles from "./Header.module.css";
import PersonIcon from "@mui/icons-material/Person";
import ExploreIcon from "@mui/icons-material/Explore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GradeIcon from "@mui/icons-material/Grade";

export default function Header() {
  return (
    <>
      <main className={styles.main}>
        <div>
          <nav className={styles.header}>
            <li style={{ marginTop: "-1vw" }}>
              <a href="/">
                <img
                  style={{ height: "43px", marginTop: "5px" }}
                  src="http://192.168.1.102:8000/images/siyah4.png"
                />
              </a>
            </li>

            <li>
              <a href="/son-icerikler">
                <AccessTimeIcon />
                Son İçerikler
              </a>
            </li>
            <li style={{ marginTop: "5px" }}>
              <a href="/trendler">
                <TrendingUpIcon />
                Trendler
              </a>
            </li>
            <li style={{ marginTop: "5px" }}>
              <a href="/sicak-icerikler">
                <WhatshotIcon />
                Sıcak İçerikler
              </a>
            </li>
            <li style={{ marginTop: "5px" }}>
              <a href="/populer-icerikler">
                <GradeIcon />
                Popüler
              </a>
            </li>

            <li
              style={{
                marginTop: "1.5vw",
                float: "right",
                cursor: "pointer",
                marginRight: "3vw",
              }}
            >
              <PersonIcon size="large" />
            </li>

            <li
              style={{ marginTop: "5px", float: "right", marginRight: "5px" }}
            >
              <a href="/kesfet">
                <ExploreIcon size="large" />
              </a>
            </li>
          </nav>
        </div>
      </main>
    </>
  );
}
