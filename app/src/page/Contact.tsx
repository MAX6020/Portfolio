import {useState} from "react"
import {motion} from "framer-motion"
import styles from "../style/Contact.module.scss"
import vk from "../icon/vk_icon_135042.svg"
import tg from "../icon/icons8-телеграмма-app.svg"
import email from "../icon/1904660-email-envelope-letter-mail-message-post-send_122510.svg"
import git from "../icon/github-logo_icon-icons.com_73546.svg"

const Contact = () => {
    const [isCopy, setIsCopy] = useState<boolean>(false)
    const mail = "mkov50@mail.ru"
    const copied = "Copied!"
    const handleCopy = (e:any) => {
        e.preventDefault()
        navigator.clipboard.writeText(mail)
        setIsCopy(true)
    }
    const headingAnimation = {
      hidden: {
        opacity: 0,
        y: -50
      },
      visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: custom * 0.5
        }
      })
  }

    const animation = {
        hidden: {
          opacity: 0,
        },
        visible: (custom: number) => ({
          opacity: 1,
          transition: {
            delay: custom * 0.5,
            duration: 0.5
          }
        })
    }

    return ( 
        <>
        <div className = {styles.container}>
        <motion.h1 variants={headingAnimation} initial="hidden" animate="visible" custom={1} className={styles.contact__heading}>If you want <span>to get in touch</span> with me</motion.h1>
            <div className = {styles.list}>
                <ul className = {styles.list__ul}>
                    <motion.li variants={animation} initial = "hidden" animate = "visible" custom={1} className = {styles.list__ul__li}><img src={vk} alt="" /><a href="https://vk.com/maksouni_bums">https://vk.com/maksouni_bums</a></motion.li>
                    <motion.li variants={animation} initial = "hidden" animate = "visible" custom={1.5} className = {styles.list__ul__li}><img src={git} alt="" /><a href="https://github.com/MAX6020">MAX6020</a></motion.li>
                    <motion.li variants={animation} initial = "hidden" animate = "visible" custom={2} className = {styles.list__ul__li}><img src={tg} alt="" /><a href="https://t.me/MAX6020">@MAX6020</a></motion.li>
                    <motion.li variants={animation} initial = "hidden" animate = "visible" custom={2.5} className = {styles.list__ul__li}><img src={email} alt="" /><a onClick={e => handleCopy(e)} href="">{isCopy == true ? copied : mail}</a></motion.li>
                </ul>
            </div>
        </div>
        </>
     );
}
 
export default Contact;