import { Header } from './components/Header'
import { Post } from './components/Post'

import './global.css'
import style from './App.module.css';
import { Sidebar } from './components/Sidebar';

const posts: any[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ericluizlucas.png",
      name: "Eric Luiz",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2023-03-20 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/martinscjhon.png",
      name: "Jhonatan Martins",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },

    ],
    publishedAt: new Date("2023-03-22 20:00:00")
  }
];

function App() {

  return (
    <div>
      {Header()}

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>

  )
}

export default App
