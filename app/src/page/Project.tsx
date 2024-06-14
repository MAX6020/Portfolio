import styles from "../style/Project.module.scss"
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6"
import {AnimatePresence, motion} from "framer-motion"
import {MProjects} from "../components/Projects/Projects"
import code from "../image/unknown_replay_2024.04.18-16.21-_online-video-cutter.com_.gif"
import obl from "../image/unknown_replay_2024.04.18-16.25-_online-video-cutter.com_.gif"
import ipadder from "../image/iUzuGIWdJAU.jpg"
import uploader from "../image/sVtzK7NeDLw.jpg"
import Html from "../icon/icons8-html-48.png"
import Sass from "../icon/icons8-sass-48.png"
import Js from "../icon/icons8-javascript-48.png"
import Ts from "../icon/icons8-typescript-48.png"
import Reac from "../icon/icons8-react-native-48.png"
import Tailwind from "../icon/icons8-tailwind-css-48.png"
import Node from "../icon/icons8-nodejs-48.png"

const Project = () => {
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
      const listAnimation = {
        hidden: {
          opacity: 0.25
        },
        visible: {
          opacity:1,
          transition:{
            duration: 0.5
          }
        }
      }
    return ( 
      <>
        <motion.h1 variants={headingAnimation} initial = "hidden" animate = "visible" custom = {1} className = {styles.heading}>My project</motion.h1>
        <motion.div variants={animation} initial = "hidden" animate = "visible" custom = {1} className = {styles.projects}>
            <div className = {styles.projects__col}>
              <MProjects
              text = {"I decided to make a set of components for the diploma, this project can later be converted into a library for the react. These are mostly small UI components by type: buttons, select, input, etc. There are also common styles for all HTML tags."} title = {"Code style"} gifs ={code}>
                <img src = {Js} alt="" />
                <img src = {Ts} alt="" />
                <img src = {Html} alt="" />
                <img src = {Reac} alt="" />
                <img src = {Tailwind} alt="" />
                <img src = {Node} alt="" />
              </MProjects>
              <MProjects
              text = {"A demo version of the area selection, this project was developed at another job and was designed to highlight monitor areas. I can't post the full code."} title = {"View display"} gifs ={obl}>
                <img src = {Js} alt="" />
                <img src = {Ts} alt="" />
                <img src = {Html} alt="" />
                <img src = {Reac} alt="" />
                <img src = {Tailwind} alt="" />
                <img src = {Node} alt="" />
              </MProjects>
              <MProjects
              text = {"On this project, I practiced with arrays and their functionality. In this project, you can enter an IP address and assign keys to it as much as you need. Then you can convert it to JSON or XML files."} title = {"Ip adder"} gifs ={ipadder}>
                <img src = {Js} alt="" />
                <img src = {Html} alt="" />
                <img src = {Reac} alt="" />
                <img src = {Node} alt="" />
              </MProjects>
              <MProjects
              text = {"In this project, I did a workaround to restrict file downloads. In this code, the file is uploaded to the server by splitting it into chunks. The file is also being checked for completeness."} title = {"File uploader"} gifs ={uploader}>
                <img src = {Js} alt="" />
                <img src = {Html} alt="" />
                <img src = {Reac} alt="" />
                <img src = {Node} alt="" />
              </MProjects>
            </div>
        </motion.div>
      </>
     );
}
 
export default Project;