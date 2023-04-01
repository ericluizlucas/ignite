import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment(props: any) {
    function handleDeleteComment() {
        console.log("deletar")

        props.onDeleteComment(props.content);
    }

    const [likeCount, setLikeCount] = useState(0)

    function handleAddLike() {
        setLikeCount(likeCount + 1)
    }

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
                        <button title="Deletar comentário" onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>

                <footer>
                    <button
                    onClick={handleAddLike}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}