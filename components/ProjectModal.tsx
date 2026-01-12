"use client"
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  project:any;
  close:()=>void;
}

export default function ProjectModal({project, close}:Props){

  return(
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-overlay"
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
        >
          <motion.div
            className="modal-box"
            initial={{scale:0.8, opacity:0}}
            animate={{scale:1, opacity:1}}
            exit={{scale:0.8, opacity:0}}
          >

            <button className="close-btn" onClick={close}>✕</button>

            <h2>{project.title}</h2>
            <p>{project.desc}</p>

            <div className="modal-tech">
              {project.tech.map((t:string)=>(
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className="modal-links">
              <a href={project.demo} target="_blank">Live Demo</a>
              <a href={project.github} target="_blank">GitHub</a>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
