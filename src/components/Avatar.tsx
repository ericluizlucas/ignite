import { ImgHTMLAttributes } from 'react';
import style from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar(props: AvatarProps) {
    const hasBorder = props.hasBorder !== false;
    return (
        <img
            className={hasBorder ? style.avatarWithBorder : style.avatar}
            src={props.src}
            alt={props.alt} />
    )
}