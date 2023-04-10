import styles from "./Sidebar.module.css";
import Components from "../../components";
const Icons = require("../../assets/Icons");
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [sidebarWidth, setSidebarWidth] = useState(undefined);
  const [sidebarTop, setSidebarTop] = useState(undefined);
  const [contentEnd, setContentEnd] = useState(undefined);

  useEffect(() => {
    const sidebarEl = document
      .querySelector(".suggestedPosts")
      .getBoundingClientRect();
    setSidebarWidth(sidebarEl.width);
    setSidebarTop(sidebarEl.top);
  }, []);

  useEffect(() => {
    const documentEnd = document
      .querySelector("#footer")
      .getBoundingClientRect().top;
    setContentEnd(documentEnd);
  });

  useEffect(() => {
    if (!sidebarTop) return;
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [sidebarTop]);

  const isSticky = (e) => {
    const sidebarEl = document.querySelector(".suggestedPosts");
    const scrollTop = window.scrollY;
    let ratioHeight = scrollTop / contentEnd;
    console.log("ratio", ratioHeight);
    console.log("sc", scrollTop);
    console.log("end", contentEnd);

    if (scrollTop >= sidebarTop - 10) {
      sidebarEl.classList.add(styles["is-sticky"]);
    }
    if (ratioHeight > 0.8 || scrollTop < sidebarTop - 10) {
      sidebarEl.classList.remove(styles["is-sticky"]);
    }
  };

  return (
    <div className={styles.sidebarWrapper}>
      <Components.CardBox
        title="İçerik Oluştur"
        subtitle="Tamamen Ücretsiz!"
        text="Hemen ücretsiz hesap oluşturup içerik üretebilir ve sosyalleşmeye başlayabilirsin."
        buttonText="İçerik Üret"
      />

      <Components.CardBox
        title="Daha Fazlası"
        subtitle="Hemen Keşfet!"
        text="Arama yapabilir, yeni içerikleri keşfedebilir ve sosyalleşecek kişiler bulabilirsin."
        buttonText="Keşfet"
      />

      <div className={styles.topUsers}>
        <Components.Populars />
      </div>

      <div className="suggestedPosts">
        <Components.SuggestedPosts />
      </div>
    </div>
  );
}
