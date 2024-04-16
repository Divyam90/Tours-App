import React from 'react'
import { motion} from 'framer-motion';
import about from '/about.jpeg'

const About = () => {
const text1 = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernaturquisquam harum nam cumque temporibus explicabo dolorum sapiente odiounde dolor".split(" ");

  return (
    <div>
          <section class="section" id="about">
      <div class="section-title">
        <h2>about <span>us</span></h2>
      </div>

      <div class="section-center about-center">
        <div class="about-img">
          <img
            src={about}
            class="about-photo"
            alt="awesome beach"
          />
        </div>
        <article >
          <h3>explore the difference</h3>


          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
       
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor? 
          </p>
          <a href="#" class="btn">read more</a>
        </article>
      </div>
    </section>
    </div>
  )
}

export default About