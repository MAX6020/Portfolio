import {motion} from "framer-motion"
import styles from "./Header.module.scss"
import {Link, useLocation} from "react-router-dom"
import classNames from "classnames"

const Header = () => {
  const currentUrl = useLocation()
    const liAnimation = {
        hidden: {
          opacity: 0,
          y: -100,
        },
        visible: (custom:number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: custom * 0.5
          }
        })
      }
    return ( 
        <header className = {styles.header}>
        <div className = {styles.container}>
          <ul className = {styles.header__ul}>
            <motion.li variants={liAnimation} initial="hidden" animate="visible" custom={1} className = {currentUrl.pathname === '/' ? `${styles.header__li} + ${styles.header__li__active}` : styles.header__li}>
              <Link to="/">HOME</Link>
            </motion.li>
            <motion.li variants={liAnimation} initial="hidden" animate="visible" custom={1.5} className = {currentUrl.pathname === '/About' ? `${styles.header__li} + ${styles.header__li__active}` : styles.header__li}>
              <Link to="/About">ABOUT ME</Link>
            </motion.li>
            <motion.li variants={liAnimation} initial="hidden" animate="visible" custom={2} className = {currentUrl.pathname === '/Project' ? `${styles.header__li} + ${styles.header__li__active}` : styles.header__li}>
              <Link to="/Project">PROJECT</Link>
            </motion.li>
            <motion.li variants={liAnimation} initial="hidden" animate="visible" custom={2.5} className = {currentUrl.pathname === '/Contact' ? `${styles.header__li} + ${styles.header__li__active}` : styles.header__li}>
              <Link to="/Contact">CONTACT</Link>
            </motion.li>
          </ul>
        </div>
      </header>
     );
}
 
export default Header;