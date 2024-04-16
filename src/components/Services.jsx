import React,{useState} from 'react'
import services  from '../assets/data'
import { motion } from 'framer-motion';

const Services = () => {
  const [names, setnames] = useState(services);
  return (
    <div>
     
       <motion.section
       class="section services" id="services">
      <div class="section-title">
        <h2 >our <span>services</span></h2>
      </div>
      <div class="section-center services-center">

      {names.map((e)=>(
        <article class="service">
          <span class="service-icon"><i class="fas fa-wallet fa-fw"></i></span>
          <div class="service-info">
            <h4 class="service-title">{e.title}</h4>
            <p class="service-text">
              {e.desc}
            </p>
          </div>
        </article>
      ))}
      
      </div>
    </motion.section>
    </div>
  )
}

export default Services