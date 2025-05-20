import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pranam Bande</h1>
        <p className={styles.description}>
        I'm a passionate full-stack developer who enjoys creating clean, responsive, and user-friendly web applications using technologies like React and Node.js. I love turning ideas into functional digital products and constantly look for ways to improve my skills and learn new tools.

Outside of work, I enjoy diving into side projects, exploring open-source code on GitHub, and keeping up with the latest trends in web development. Problem-solving and building things from scratch is what keeps me excited every day. 
        </p>
        <a href="pranambande19@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
