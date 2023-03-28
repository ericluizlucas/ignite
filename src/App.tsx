import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'
import style from './App.module.css';
import { Sidebar } from './components/Sidebar';

function App() {

  return (
    <div>
      {Header()}

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Eric Luiz'
            content='Starting to learn how to create a project with React and Typescript.' />

          <Post
            author='Jhonatan Martins'
            content='Working with React projects since 2022.' />
        </main>
      </div>

    </div>

  )
}

export default App
