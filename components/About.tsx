"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="about-section">
        <Link href="/" className="back-btn">← Back to home</Link>
      <div className="about-container">     
        {/* Left */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="about-ring">
            <img src="/lazy_hero.jpg" alt="Amit" />
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2>Meet Amit 👋</h2>

          <p>
            I’m a developer who loves building cool things, but I also believe
            that life is more than endless deadlines and hustle culture.
          </p>

          <p>
            This website is my fun experiment to see if honesty, humor,
            and laziness can actually pay my bills 😄
          </p>

          <div className="about-tags">
            <span>React</span>
            <span>Next.js</span>
            <span>Node</span>
            <span>APIs</span>
            <span>Freelancing</span>
          </div>
        </motion.div>
        <div className="about-wrapper">

  {/* ROW 1 */}
  <div className="row-two">
    <div className="card">

{/* Fun Facts */}
<div className="fun-box">
  <h3>Fun Facts 😄</h3>

  <ul>
    <li>☕ Coffees: 842+</li>
    <li>💤 Power naps: 312</li>
    <li>💻 Bugs fixed: 10,231</li>
    <li>😎 Deadlines escaped: 27</li>
  </ul>
</div>
    </div>
    <div className="card"><div className="time-box">
  <h3>My Journey 🚀</h3>

  <div className="timeline">
    <p><span>2019</span> Started coding</p>
    <p><span>2021</span> Freelancing</p>
    <p><span>2023</span> Burnout phase</p>
    <p><span>2024</span> Lazy life realization</p>
    <p><span>2025</span> Built this site</p>
  </div>
</div>

</div></div>
  </div>

  {/* ROW 2 */}
  <div className="row-full">
    <div className="card"><div className="service-box">
<h3>What I Can Do For You 💼</h3>

<div className="service-grid">
  <span>Landing Pages</span>
  <span>Web Apps</span>
  <span>API Integration</span>
  <span>Performance Boost</span>
  <span>Bug Fixing</span>
  <span>Automation</span>
</div>
</div></div>
  </div>

  {/* ROW 3 */}
  <div className="row-two">
    <div className="card"><div className="test-box">
  <h3>Testimonials ❤️</h3>

  <blockquote>
    "Amit saved my project in 2 hours"
    <span>– Random Client</span>
  </blockquote>

  <blockquote>
    "Lazy but brilliant"
    <span>– Mom</span>
  </blockquote>
</div>
</div>
    <div className="card"><div className="cta-box">
  <h3>Ready to work together?</h3>
  <p>Or just support my lazy dream 😴</p>

  <div className="cta-btns">
    <a href="/hire">Hire Me</a>
    <a href="/#support">Donate</a>
  </div>
</div>

</div></div>
  </div>

    </section>
  );
}
