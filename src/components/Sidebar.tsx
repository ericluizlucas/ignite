import { Avatar } from './Avatar'
import style from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img
                className={style.cover}
                src='https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40' />

            <div className={style.profile}>
                <Avatar src="https://github.com/ericluizlucas.png"/> 
                <strong>Eric Luiz</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}></PencilLine>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}