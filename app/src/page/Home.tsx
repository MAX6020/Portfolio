import {motion, AnimatePresence} from "framer-motion"
import styles from "../style/Home.module.scss"

const Home = () => {
    const homeAnimation = {
        hidden: {
          opacity: 0,
          y: 100,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.5,
            duration: 0.5
          }
        },
      }

    return ( 
      <>
        <motion.h1 
        variants = {homeAnimation} 
        initial = "hidden"
        animate = "visible"
        exit = "close"
        className = {styles.heading}>
          Hi, that's my&nbsp;<b> Frontend Developer </b>&nbsp;portfolio
        </motion.h1>
      </>
     );
}
 
export default Home;