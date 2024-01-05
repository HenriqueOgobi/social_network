import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/102251338?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Henrique Oliveira Gobi</strong>
            <span>Web and Mobile Developer</span>
          </div>
        </div>

        <time title="05 de Janeiro as 08:00" dateTime="2024-05-11 08:13:30">
          Públicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Eae galeraaa</p>
        <p>Acabei de subir um novo projeto em React!</p>
        <p><a href="https://github.com/HenriqueOgobi">GitHub</a></p>
      </div>
    </article>
  );
}
