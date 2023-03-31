import { Header } from './components/Header'
import { Post } from './components/Post'

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
          <Post/>

          <Post/>
        </main>
      </div>

    </div>

  )
}

export default App
