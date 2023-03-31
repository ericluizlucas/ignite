import style from './Avatar.module.css'

export function Avatar(props: any) {
    const hasBorder = props.hasBorder !== false;
    return (
        <img
            className={hasBorder ? style.avatarWithBorder : style.avatar}
            src={props.src} />
    )
}