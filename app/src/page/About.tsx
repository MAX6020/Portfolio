import styles from "../style/About.module.scss"
import me from "../image/YHfpyqXo3wc.jpg"
import { motion } from "framer-motion"
import Html from "../icon/icons8-html-48.png"
import Sass from "../icon/icons8-sass-48.png"
import Js from "../icon/icons8-javascript-48.png"
import Ts from "../icon/icons8-typescript-48.png"
import Reac from "../icon/icons8-react-native-48.png"
import Tailwind from "../icon/icons8-tailwind-css-48.png"
import Node from "../icon/icons8-nodejs-48.png"

const About = () => {
  const aboutAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5
      }
    }
  }
  const animation = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.5
      }
    })
  }
  const headingAnimation = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.5,
      }
    })
  }

  return (
    <>
      <div className={styles.container}>
        <motion.h1 variants={headingAnimation} initial="hidden" animate="visible" custom={1} className={styles.about__heading}>About me</motion.h1>
        <motion.div className={styles.about__flex}
          variants={aboutAnimation}
          initial="hidden"
          animate="visible">
          <motion.div variants={animation} initial="hidden" animate="visible" custom={2} className={styles.info}>
            <div className={styles.info__img}>
              <h1 className={styles.info__img__heading}><span>Frontend&nbsp;</span>developer</h1>
            </div>
            <img src={me} alt="" />
            <div className={styles.info__discriptions}>
              <div className={styles.info__discriptions__text}><label>Name:&nbsp;</label><p>Kovalev Maksim</p></div>
              <div className={styles.info__discriptions__text}><label>Age:&nbsp;</label><p>21</p></div>
              <div className={styles.info__discriptions__text}><label>Location:&nbsp;</label><p>Russia, Ulyanovsk</p></div>
            </div>
          </motion.div>
          <div className={styles.stack}>
            <motion.div variants={animation} initial="hidden" animate="visible" custom={2.5} className={styles.stack__heading}>
              <h1>The stack that I use</h1>
            </motion.div>
            <div className={styles.stack__list}>
              <ul className={styles.stack__list__ul}>
                <motion.li variants={animation} initial="hidden" animate="visible" custom={3} className={styles.stack__list__ul__li}><span>1.&nbsp;</span><img src={Html} alt="#" /><p>&nbsp;- HTML</p></motion.li>
                <motion.li variants={animation} initial="hidden" animate="visible" custom={3.5} className={styles.stack__list__ul__li}><span>2.&nbsp;</span><img src={Sass} alt="#" /><p>&nbsp;-  CSS/SASS</p></motion.li>
                <motion.li variants={animation} initial="hidden" animate="visible" custom={4} className={styles.stack__list__ul__li}><span>3.&nbsp;</span><img src={Js} alt="#" /><p>&nbsp;-  JS</p></motion.li>
                <motion.li variants={animation} initial="hidden" animate="visible" custom={4.5} className={styles.stack__list__ul__li}><span>4.&nbsp;</span><img src={Ts} alt="#" /><p>&nbsp;-  TS</p></motion.li>
                <motion.li variants={animation} initial="hidden" animate="visible" custom={5} className={styles.stack__list__ul__li}><span>5.&nbsp;</span><img src={Reac} alt="#" /><p>&nbsp;-  React</p></motion.li>
                <motion.li variants={animation} initial="hidden" animate="visible" custom={5.5} className={styles.stack__list__ul__li}><span>6.&nbsp;</span><img src={Tailwind} alt="#" /><p>&nbsp;-  Tailwind</p></motion.li>
                <motion.li variants={animation} initial="hidden" animate="visible" custom={6} className={styles.stack__list__ul__li}><span>7.&nbsp;</span><img src={Node} alt="#" /><p>&nbsp;-  Node.js</p></motion.li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default About;