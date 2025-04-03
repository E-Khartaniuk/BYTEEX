import React from "react";
import css from "./About.module.css";
function About() {
  return (
    <section className={css.aboutSection}>
      <div className={css.aboutContainer}>
        <h2 className={css.title}>Be your best self.</h2>
        <div className={css.aboutImage}></div>
        <div className={css.aboutTextContainer}>
          <p>Hi! My name’s [Insert Name], and I founded [Insert] in ____. </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.
          </p>
          <p>
            Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
            placerat volutpat ligula, ac consectetur felis varius non. Aliquam a
            nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu
            congue, faucibus libero nec, placerat ligula.
          </p>
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
          </p>
          <p>
            Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
            mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus,
            ac convallis urna massa at nibh.
          </p>
          <p>
            Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod
            leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in
            sapien.
          </p>
          <p>Cras mattis varius mollis.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
