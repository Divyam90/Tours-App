import React,{useState} from 'react'
import {tours} from '../assets/data'
import {motion} from 'framer-motion'
const Tours = () => {
  const [data, setdata] = useState(tours)
  const text = "Tours".split(" ");
  return (
    <div>
 

    <section class="section" id="tours">
      <div class="section-title">
        <h2>featured Tours</h2>
      </div>

      <div class="section-center featured-center">

        {data.map((e)=>(

        <article class="tour-card">
          <div class="tour-img-container">
            <img src={e.image} class="tour-img" alt="" />
            <p class="tour-date">{e.date}</p>
          </div>
          <div class="tour-info">
            <div class="tour-title">
              <h4>{e.title}</h4>
            </div>
            <p>
              {e.desc}
            </p>
            <div class="tour-footer">
              <p>
                <span><i class="fas fa-map"></i></span> {e.country}
              </p>
              <p>{e.days}</p>
              <p>{e.price}</p>
            </div>
          </div>
        </article>
        ))}


      
      </div>
    </section>
    </div>
  )
}

export default Tours
