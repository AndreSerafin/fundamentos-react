import { Header } from './components/Header';
import { Post } from './components/Post';
import './global.css';

import type { PostType } from './components/Post';

import styles from './App.module.css';
import { SideBar } from './components/SideBar';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/andreserafin.png',
      name: 'Andre Pereira',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-04-02 10:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        'https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyZmlsfHx8fHx8MTY4MTM5NDMzNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
      name: 'John Doe',
      role: 'Designer UI/UX',
    },
    content: [
      { type: 'paragraph', content: 'Oi pessoal! 👋' },
      {
        type: 'paragraph',
        content:
          'Estou animado para compartilhar meu último projeto de design, um aplicativo móvel para rastrear a ingestão diária de água 💦',
      },
      {
        type: 'paragraph',
        content:
          'Confira no meu portfólio do Behance e me diga o que você acha! 😊',
      },
      { type: 'link', content: 'behance.net/johndoe' },
    ],
    publishedAt: new Date('2023-04-13 14:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl:
        'https://images.unsplash.com/photo-1594751439417-df8aab2a0c11?crop=entropy &cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmlsZXx8fHx8fDE2ODE0MTkxOTE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
      name: 'Maria Silva',
      role: 'Desenvolvedora Front-End',
    },
    content: [
      { type: 'paragraph', content: 'Olá, pessoal! 👋' },
      {
        type: 'paragraph',
        content:
          'Estou animada em compartilhar meu último projeto, um site de comércio eletrônico para uma marca de roupas sustentáveis ​​que criei para um cliente!',
      },
      {
        type: 'paragraph',
        content: 'Confira o site e me diga o que você acha! 😊',
      },
      { type: 'link', content: 'maria-silva.com.br/portfolio' },
    ],
    publishedAt: new Date('2023-04-14 09:30:00'),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}
