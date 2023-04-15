import styles from './Comment.module.css';

import { HandsClapping, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/andreserafin.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commenAuthorAndTime}>
              <strong>André Pereira</strong>
              <time title="12 de abril de 2023" dateTime="2023-04-12">
                Cerca de 1hr atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping style={{ marginBottom: '1px' }} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
