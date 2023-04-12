import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/andreserafin.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commenAuthorAndTime}>
              <strong>André Pereira</strong>
              <time title="12 de abril de 2023" dateTime="2023-04-12">
                Cerca de 1hr atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>28</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
