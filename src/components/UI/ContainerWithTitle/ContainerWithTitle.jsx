import styles from './ContainerWithTitle.module.css';

const ContainerWithTitle = ({ children, title }) => {
    return (
        <div>
            <h2 className={styles.Title}>{title}</h2>
            {children}
        </div>
    )
}

export default ContainerWithTitle
