import styles from "./Projects.module.scss"

interface IProjects {
    text: string,
    gifs: string,
    title: string
}

const Projects = ({text, title, gifs}:IProjects) => {
    return ( 
        <>
            <h1 className = {styles.title}>{title}</h1>
            <div className = {styles.discriptions}>
                <div className = {styles.discriprions__text}>
                    {text}
                </div>
                <div className = {styles.discriprions__gifs}>
                    {gifs}
                </div>
            </div>
        </>
     );
}
 
export default Projects;