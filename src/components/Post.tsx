import { Comment } from './Comment'
import style from './Post.module.css'

export function Post() {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img src='https://avatars.githubusercontent.com/u/110914818?v=4' />
                    <div className={style.authorInfo}>
                        <strong>Eric Luiz</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="20 de Março às 18:00h" dateTime="2023-03-20 18:00:12">Publicado há 1h</time>
            </header>

            <div className={style.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href='#'>jane.design/doctorcare</a></p>
                <p>
                    <a href='#'>#novoprojeto</a>
                    <a href='#'>#nlw</a>
                    <a href='#'>#rocketseat</a>
                </p>
            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'/>
                
                <footer>
                <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}