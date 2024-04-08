import styles from './Navigation.module.css' 

const Navigation = () => {
  return (
    <nav>
        <div className={styles.left}>
            <img src="./public/brand_logo.png" alt="Nike Logo Image" />
        </div>
        <div className={styles.right}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation