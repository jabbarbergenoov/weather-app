import { ReactNode } from 'react';
import classes from './button.module.css'

export default function Button({ children }: { children: ReactNode }): JSX.Element {
    return (
        <button className={classes.button}>{children}</button>
    )
}