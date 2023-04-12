import { Header } from './components/Header';
import { Post } from './components/Post';
import './global.css';

import styles from './App.module.css';
import { SideBar } from './components/SideBar';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author="André Pereira"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quod soluta molestiae eveniet expedita obcaecati sequi alias, laboriosam blanditiis quibusdam, natus in minus quas! Laudantium adipisci pariatur magnam consequatur deserunt."
          />
          <Post
            author=""
            content=" Excepturi quod soluta molestiae eveniet expedita obcaecati sequi alias, laboriosam blanditiis quibusdam, natus in minus quas! Laudantium adipisci pariatur magnam consequatur deserunt."
          />
        </main>
      </div>
    </>
  );
}
