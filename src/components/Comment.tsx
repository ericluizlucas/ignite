import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'

export function Comment() {
    return (
        <div className={style.comment}>
            <img src='https://avatars.githubusercontent.com/u/110914818?v=4' alt=""/>
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Eric Luiz</strong>
                            <time title="21 de Março às 10:15h" dateTime="2023-03-21 10:15:12">Há cerca de 2h</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}