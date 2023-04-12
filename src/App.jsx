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
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}
