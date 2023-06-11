import styles from "./SinglePage.module.css";
import Components from "@components";
const Icons = require("../../assets/Icons");

export default function singlePage() {
  return (
    <main className={styles.wrapperMain} id="container">
      <div className={styles.contentImgWrapper}>
        <div className={styles.contentHeader}>
          <div className={styles.contentInfo}>
            <div className={styles.breadCrumb}>
              <a> Teknoloji </a>
              {">"}{" "}
              <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
            </div>
            <h2 className={styles.contentTitle}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum condimentum erat dapibus
            </h2>
            <p className={styles.summary}>
              {" "}
              In ut scelerisque urna. Curabitur sollicitudin leo elit, id
              laoreet ligula ornare in. Sed sit amet blandit mi. Morbi malesuada
              mollis sapien sed finibus.
            </p>
            <div className={styles.infos}>
              <div className={styles.author}>
                <Components.Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
                <span>
                  <b>@canberkberen</b> tarafından <b>30-03-2023</b> tarihinde
                  oluşturuldu
                </span>
                <span className={styles.contentReadTime}>
                  <Icons.AccessTimeIcon /> ~10 dakika
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Components.Grid
        container
        columnSpacing={{ xs: 1, sm: 5, md: 5 }}
        sx={{ mt: 2, mb: 2, padding: "30px" }}
      >
        <Components.Grid
          item
          xs={12}
          md={9}
          lg={9}
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          <div className={styles.contentArea}>
            <h2>Vestibulum ante ipsum primis</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque lacinia libero et purus dignissim, at mattis ex
            consequat. Cras maximus enim eget ultricies pretium. Integer vitae
            ligula vitae tellus pellentesque commodo pulvinar eget eros. Cras
            posuere, justo ut varius congue, orci neque imperdiet enim, vitae
            malesuada velit urna in justo. Sed malesuada efficitur lorem, vel
            finibus lorem rhoncus sit amet. Maecenas dapibus euismod massa sit
            amet finibus. Aliquam varius, velit in euismod mattis, nisi nulla
            ullamcorper mi, ac tempor turpis nulla eget arcu. Maecenas sit amet
            augue non tellus blandit euismod in sit amet orci. Phasellus
            interdum nisl eget lacus lacinia, nec mollis erat pretium. Nulla
            facilisi. Praesent porttitor rutrum fermentum. Morbi faucibus
            pellentesque libero vel fermentum. Nam enim ipsum, blandit sit amet
            feugiat non, pulvinar ac elit. Donec nec pretium ante. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nam gravida, eros ut faucibus rhoncus, tortor mauris
            fermentum libero, a cursus lacus tellus vitae magna. Fusce blandit,
            arcu pretium varius bibendum, risus risus tempus enim, quis maximus
            risus elit quis justo. Sed at ex commodo, aliquet sapien ac, posuere
            est. Maecenas in lobortis justo. Aenean luctus, lorem semper
            convallis sodales, ante urna aliquet erat, nec elementum erat enim
            in lorem. Morbi suscipit mi ut velit fringilla tristique. Quisque eu
            sem eget justo pretium mollis non ut velit. Nullam porttitor ut nunc
            sed molestie. Donec finibus varius felis, a posuere mi porta
            blandit. Ut at ipsum vitae nisi pulvinar semper nec et nisi. Donec
            tristique lacus ipsum, eget facilisis ante rutrum sed. Proin egestas
            elementum sem, non congue ante varius eu. Phasellus ornare, tellus
            ut bibendum rhoncus, orci est interdum eros, eget mollis sem felis
            non erat.
            <h2>Vestibulum ante ipsum primis</h2>
            Cras volutpat ante consectetur arcu molestie, eget aliquet leo
            volutpat. Donec mollis ligula ut elit scelerisque, vel porta massa
            tincidunt. Vivamus vehicula placerat dui, nec gravida ligula
            faucibus id. Nulla nisl magna, faucibus vitae vehicula eget,
            ullamcorper at purus. In quis tortor at risus laoreet feugiat.
            Suspendisse molestie, lacus quis iaculis imperdiet, ex velit lacinia
            magna, ut pellentesque arcu mauris vulputate metus. Nam rhoncus
            ligula eros, vel fermentum eros sollicitudin id. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Morbi nec ante ultrices elit tristique lobortis. Donec dolor nulla,
            imperdiet sit amet ex ullamcorper, porttitor dignissim lectus. Duis
            feugiat placerat auctor.
            <h3>Praesent vitae leo ornare, elementum odio ut</h3>
            Fusce blandit, arcu pretium varius bibendum, risus risus tempus
            enim, quis maximus risus elit quis justo. Sed at ex commodo, aliquet
            sapien ac, posuere est. Maecenas in lobortis justo. Aenean luctus,
            lorem semper convallis sodales, ante urna aliquet erat, nec
            elementum erat enim in lorem. Morbi suscipit mi ut velit fringilla
            tristique. Quisque eu sem eget justo pretium mollis non ut velit.
            Nullam porttitor ut nunc sed molestie. Donec finibus varius felis, a
            posuere mi porta blandit. Ut at ipsum vitae nisi pulvinar semper nec
            et nisi. Donec tristique lacus ipsum, eget facilisis ante rutrum
            sed. Proin egestas elementum sem, non congue ante varius eu.
            Phasellus ornare, tellus ut bibendum rhoncus, orci est interdum
            eros, eget mollis sem felis non erat. Cras volutpat ante consectetur
            arcu molestie, eget aliquet leo volutpat. Donec mollis ligula ut
            elit scelerisque, vel porta massa tincidunt. Vivamus vehicula
            placerat dui, nec gravida ligula faucibus id. Nulla nisl magna,
            faucibus vitae vehicula eget, ullamcorper at purus. In quis tortor
            at risus laoreet feugiat. Suspendisse molestie, lacus quis iaculis
            imperdiet, ex velit lacinia magna, ut pellentesque arcu mauris
            vulputate metus. Nam rhoncus ligula eros, vel fermentum eros
            sollicitudin id. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Morbi nec ante ultrices
            elit tristique lobortis. Donec dolor nulla, imperdiet sit amet ex
            ullamcorper, porttitor dignissim lectus. Duis feugiat placerat
            auctor.
            <img src="https://boombox.px-lab.com/lonely-panda/wp-content/uploads/sites/2/2016/08/75H.jpg?x44295" />
            <h3>Praesent vitae leo ornare, elementum odio ut</h3>
            Fusce blandit, arcu pretium varius bibendum, risus risus tempus
            enim, quis maximus risus elit quis justo. Sed at ex commodo, aliquet
            sapien ac, posuere est. Maecenas in lobortis justo. Aenean luctus,
            lorem semper convallis sodales, ante urna aliquet erat, nec
            elementum erat enim in lorem. Morbi suscipit mi ut velit fringilla
            tristique. Quisque eu sem eget justo pretium mollis non ut velit.
            Nullam porttitor ut nunc sed molestie. Donec finibus varius felis, a
            posuere mi porta blandit. Ut at ipsum vitae nisi pulvinar semper nec
            et nisi. Donec tristique lacus ipsum, eget facilisis ante rutrum
            sed. Proin egestas elementum sem, non congue ante varius eu.
            Phasellus ornare, tellus ut bibendum rhoncus, orci est interdum
            eros, eget mollis sem felis non erat. Cras volutpat ante consectetur
            arcu molestie, eget aliquet leo volutpat. Donec mollis ligula ut
            elit scelerisque, vel porta massa tincidunt. Vivamus vehicula
            placerat dui, nec gravida ligula faucibus id. Nulla nisl magna,
            faucibus vitae vehicula eget, ullamcorper at purus. In quis tortor
            at risus laoreet feugiat. Suspendisse molestie, lacus quis iaculis
            imperdiet, ex velit lacinia magna, ut pellentesque arcu mauris
            vulputate metus. Nam rhoncus ligula eros, vel fermentum eros
            sollicitudin id. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Morbi nec ante ultrices
            elit tristique lobortis. Donec dolor nulla, imperdiet sit amet ex
            ullamcorper, porttitor dignissim lectus. Duis feugiat placerat
            auctor.
            <img src="https://pbs.twimg.com/media/BuPsrvbCIAAFbwn?format=jpg&name=900x900" />
            <h4>Lorem Ipsum Dolor Sit Amet</h4>
            Fusce blandit, arcu pretium varius bibendum, risus risus tempus
            enim, quis maximus risus elit quis justo. Sed at ex commodo, aliquet
            sapien ac, posuere est. Maecenas in lobortis justo. Aenean luctus,
            lorem semper convallis sodales, ante urna aliquet erat, nec
            elementum erat enim in lorem. Morbi suscipit mi ut velit fringilla
            tristique. Quisque eu sem eget justo pretium mollis non ut velit.
            Nullam porttitor ut nunc sed molestie. Donec finibus varius felis, a
            posuere mi porta blandit. Ut at ipsum vitae nisi pulvinar semper nec
            et nisi. Donec tristique lacus ipsum, eget facilisis ante rutrum
            sed. Proin egestas elementum sem, non congue ante varius eu.
            Phasellus ornare, tellus ut bibendum rhoncus, orci est interdum
            eros, eget mollis sem felis non erat. Cras volutpat ante consectetur
            arcu molestie, eget aliquet leo volutpat. Donec mollis ligula ut
            elit scelerisque, vel porta massa tincidunt. Vivamus vehicula
            placerat dui, nec gravida ligula faucibus id. Nulla nisl magna,
            faucibus vitae vehicula eget, ullamcorper at purus. In quis tortor
            at risus laoreet feugiat. Suspendisse molestie, lacus quis iaculis
            imperdiet, ex velit lacinia magna, ut pellentesque arcu mauris
            vulputate metus. Nam rhoncus ligula eros, vel fermentum eros
            sollicitudin id. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Morbi nec ante ultrices
            elit tristique lobortis. Donec dolor nulla, imperdiet sit amet ex
            ullamcorper, porttitor dignissim lectus. Duis feugiat placerat
            auctor.
          </div>
          <Components.Divider sx={{ mt: 5, mb: 5 }} />
          <div className={styles.commentSection}>
            <Components.Comment />
          </div>

          <div className={styles.HotPostsSection}>
            <Components.HotPosts />
          </div>
        </Components.Grid>

        <Components.Grid
          item
          xs={12}
          md={3}
          lg={3}
          sx={{
            display: "flex",
          }}
        >
          <div className={styles.sideBar}>
            <Components.Sidebar />
          </div>
        </Components.Grid>
      </Components.Grid>
    </main>
  );
}
