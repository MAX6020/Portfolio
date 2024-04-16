import styles from "../style/Project.module.scss"
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6"
import {motion} from "framer-motion"

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
    return ( 
        <div className = {styles.container}>
            <motion.h1 variants={headingAnimation} initial = "hidden" animate = "visible" custom = {1} className = {styles.heading}>My project</motion.h1>
            <motion.div variants={animation} initial = "hidden" animate = "visible" custom = {1} className = {styles.projects}>
                <div className = {styles.projects__leftbtn}>
                    <button>
                        <FaAngleLeft className = "w-[30px] h-[30px]" color="white"/>
                    </button>
                </div>
                <div className = {styles.projects__rightbtn}>
                    <button>
                        <FaAngleRight className = "w-[30px] h-[30px]" color="white"/>
                    </button>
                </div>
            </motion.div>
        </div>
     );
}
 
export default Project;