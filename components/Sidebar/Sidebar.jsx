import styles from "./Sidebar.module.css";

import Components from "../../components";
const Icons = require("../../assets/Icons");
export default function Sidebar() {
  return (
    <div className={styles.sidebarWrapper}>
    <Components.CardBox title="İçerik Oluştur" subtitle="Tamamen Ücretsiz!"
    text="Hemen ücretsiz hesap oluşturup içerik üretebilir ve sosyalleşmeye başlayabilirsin."
    buttonText="İçerik Üret"
    />

<Components.CardBox title="Daha Fazlası" subtitle="Hemen Keşfet!"
    text="Arama yapabilir, yeni içerikleri keşfedebilir ve sosyalleşecek kişiler bulabilirsin."
    buttonText="Keşfet"
    />

    <div className={styles.topUsers}>
    <Components.Typography variant="h6" color="#212121" sx={{textTransform: 'uppercase', textAlign:'center', fontWeight:'bold'}}>
          Popüler Üyeler
        </Components.Typography>

      <Components.TopUsers />

    </div>
  </div>
  )
}
