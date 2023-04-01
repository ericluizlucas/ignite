import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import style from './Post.module.css'
import { useState } from 'react'

export function Post(props: any) {
    const [comments, setComments] = useState(["Post muito bacana!"])
    const [newCommentText, setNewCommentText] = useState("")

    const dateFormated = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(props.publishedAt);

    const dateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true
    });


    function handleCreateNewComment() {
        event?.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('');

    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder src={props.author.avatarUrl} />
                    <div className={style.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>
                <time
                    title={dateFormated}
                    dateTime={props.publishedAt.toISOString()}>
                    {dateRelativeToNow}
                </time>
            </header>

            <div className={style.content}>
                {props.content.map((line: any) => {
                    if (line.type === "paragraph")
                        return <p>{line.content}</p>
                    else if (line.type === "link")
                        return <p><a href=''>{line.content}</a></p>
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />


                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                {comments.map((comment: any) => {
                    return <Comment content={comment} />
                })}
            </div>
        </article>
    )
}