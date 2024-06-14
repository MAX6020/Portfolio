import styles from "./Projects.module.scss"
import React from "react"
import {forwardRef} from "react"
import { motion } from "framer-motion";

interface IProjects{
    text: string,
    gifs: any,
    title: string,
    children: any
}

export const Projects = React.forwardRef<HTMLDivElement, IProjects> (({text, title, gifs, children}:IProjects,ref) => {
    return ( 
        <motion.div className = {styles.col}
        initial = {{opacity: 0.2}}
        whileInView={{opacity: 1, transition: {duration: 0.5}}}
        viewport={{amount: 0.3}}
        ref = {ref}>
            <h1 className = {styles.title}>{title}</h1>
            <div className = {styles.discriptions}>
                <div className = {styles.discriptions__text}>
                    <p>{text}</p>
                </div>
                <div className = {styles.discriptions__stack}>
                    {children}
                </div>
                <div className = {styles.discriptions__gifs}>
                    <img src={gifs} alt="" />
                </div>
            </div>
        </motion.div>
     );
})
 
export const MProjects = motion(Projects);