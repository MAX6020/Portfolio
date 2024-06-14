import {motion, AnimatePresence} from "framer-motion";
import ParticlesComponent from "./components/particles";
import Home from "./page/Home";
import styles from "./style/App.module.scss"
import Header from "./components/Header/Header";
import {Route, BrowserRouter, Routes} from "react-router-dom"
import About from "./page/About";
import Project from "./page/Project";
import Contact from "./page/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className = {styles.parent}>
        <ParticlesComponent id = {styles.particles}/>
        <Header></Header>
          <div className = {styles.container}>
            <Routes>
              <Route path="/" Component={Home}/>
              <Route path="/About" Component={About}/>
              <Route path="/Project" Component={Project}/>
              <Route path="/Contact" Component={Contact}/>
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
