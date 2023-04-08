import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import style from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link',
    content: string
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post(props: PostProps) {
    const [comments, setComments] = useState(["Post muito bacana!"])
    const [newCommentText, setNewCommentText] = useState("")

    const dateFormated = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(props.post.publishedAt);

    const dateRelativeToNow = formatDistanceToNow(props.post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    });


    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('');

    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event?.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeleted = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        console.log(`Deletar comentário ${commentToDelete}`)

        setComments(commentsWithoutDeleted)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event?.target.setCustomValidity("Esse campo é obrigatório.")
    }

    let isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder src={props.post.author.avatarUrl} />
                    <div className={style.authorInfo}>
                        <strong>{props.post.author.name}</strong>
                        <span>{props.post.author.role}</span>
                    </div>
                </div>
                <time
                    title={dateFormated}
                    dateTime={props.post.publishedAt.toISOString()}>
                    {dateRelativeToNow}
                </time>
            </header>

            <div className={style.content}>
                {props.post.content.map((line: Content) => {
                    if (line.type === "paragraph")
                        return <p key={line.content}>{line.content}</p>
                    else if (line.type === "link")
                        return <p key={line.content}><a href=''>{line.content}</a></p>
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />


                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                {comments.map((comment: string) => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}