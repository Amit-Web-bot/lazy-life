"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
 {
  title:"Finance Tracker",
  desc:"Expense tracking app with budgets & analytics",
  tech:["React","Node","PostgreSQL"],
  demo:"#",
  github:"#"
 },
 {
  title:"Portfolio Site",
  desc:"Personal branding website",
  tech:["Next","Framer"],
  demo:"#",
  github:"#"
 }
]


export default function Hire(){
    const [active, setActive] = useState(null)

  return(
    <section className="hire-page">

      {/* HERO */}
      <div className="hire-hero">
        <h1>Hire a Lazy Developer 😴</h1>
        <p>
          I may look chill, but my code ships faster than your deadlines.
        </p>
      </div>

      {/* WHY ME */}
      <div className="hire-card">
        <h2>Why Hire Me?</h2>
        <ul>
          <li>🚀 Fast delivery (after coffee)</li>
          <li>🐛 Debugging ninja</li>
          <li>💡 Clean & scalable code</li>
          <li>😎 Chill communication</li>
        </ul>
      </div>

      {/* PROJECTS */}
      

       <div className="project-grid">
            {projects.map((p,i)=>(
            <div 
                key={i}
                className="project"
                onClick={()=>setActive(p)}
            >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            </div>
            ))}
        </div>

        <ProjectModal 
            project={active} 
            close={()=>setActive(null)} 
        />

      {/* SERVICES */}
      <div className="hire-card">
        <h2>What I Can Do For You</h2>
        <div className="service-grid">
          <span>Landing Pages</span>
          <span>Web Apps</span>
          <span>API Integration</span>
          <span>Bug Fixing</span>
          <span>Automation</span>
          <span>Performance</span>
        </div>
      </div>

      {/* CTA */}
      <div className="hire-cta">
        <h2>Let’s build something cool 😎</h2>
        <p>
          Or at least something that pays my bills.
        </p>

        <div className="cta-btns">
          <a href="mailto:yourmail@gmail.com">Email Me</a>
          <a href="/#support">Support My Laziness</a>
        </div>
      </div>

    </section>
  )
}
