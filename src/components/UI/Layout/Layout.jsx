import styles from './Layout.module.css';

import Header from '../../Header/Header';

const Layout = ({ children }) => {
    return (
        <div className={styles.Layout}>
            <Header />
            {children}
        </div>
    )
}

export default Layout
