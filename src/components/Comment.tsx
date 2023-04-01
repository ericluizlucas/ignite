import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(props: any) {
    return (
        <div className={style.comment}>
            <Avatar src={"https://avatars.githubusercontent.com/u/98663587?v=4"} hasBorder={false} />
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Jhonathan Martins</strong>
                            <time title="21 de Março às 10:15h" dateTime="2023-03-21 10:15:12">Há cerca de 2h</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{props.content}</p>
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