import React from 'react'
import './home.css'

export default function Home() {
  return (
  <div className="container">
    <div className="row">
   
        <div className="row justify-content-center align-items-center">
          <div className="about_section col-md-10">
            <div className="home-content-title text-center">
              <h1 className="content-title">Hello there, I'm Eetu</h1>
            </div>
            <div className="home-content-text text-center">
              <h4 className="content-title">Computer science student at university of Helsinki</h4>
            </div>
            <hr className="hr-animation"/>
              <div className="col-md-12">
                <p className="text_container">
                I have a solid foundation in Information Technology, with 1.5 years of dedicated study at Oulu University of Applied Sciences. My primary focus is on web development, and I've refined my skills through various projects within both academic and extracurricular contexts.

                Notably, I undertook a transfer to the esteemed University of Helsinki, where I continued my academic journey. This transition reflects my commitment to academic excellence and my pursuit of a comprehensive education.
                <br/>
                 <br/>
                My academic trajectory underscores a capacity for swift learning and adaptability to diverse tasks. Whether collaborating within a team or working independently, I consistently deliver efficient results. I am drawn to challenging assignments that allow me to apply and showcase my creativity.
                <br/>
                  <br/>
                  Beyond my academic pursuits, I maintain a diverse range of interests. Outside of the professional sphere, I enjoy playing the guitar, gaming, taking walks, and spending evenings immersed in cinematic experiences.</p>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}
