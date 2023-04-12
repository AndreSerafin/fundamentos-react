import styles from './Post.module.css';
import { Comment } from './Comment';

export function Post(props) {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src="https://avatars.githubusercontent.com/u/88911949?v=4"
            />
            <div className={styles.authorInfo}>
              <strong>André Pereira</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="12 de abril as 14:54" dateTime="2023-04-12 14:53:00">
            Pubicado há 1hr
          </time>
        </header>
        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            cabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat.
          </p>
          A <p>O nome do projeto é DoctorCare 🚀</p>
          <p>
            👉 <a>jane.design/doctorcare</a>
          </p>
          <p>
            <a>#novoprojeto</a> <a>#nlw </a> <a>#rocketseat</a>{' '}
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder="Deixe um comentario" />
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </>
  );
}
