import styles from '../styles/AuthPage.module.css'

type Props = {
    children: JSX.Element
}

export default function AuthPage({ children }: Props) {
    return (
        <div className={styles.authPage}>
            {children}
        </div>
    )
}