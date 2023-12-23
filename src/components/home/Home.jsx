import React from 'react'
import './home.css'

export default function Home() {
  return (
  <div className="container">
    <div className="row">
   
        <div className="row justify-content-center align-items-center">
          <div className="about_section col-md-10 right_section">
            <div className="home-content-title text-center">
              <h1 className="content-title">Hello there, I'm Eetu</h1>
            </div>
            <div className="home-content-text text-center">
              <h4 className="content-title">Computer science student at university of Helsinki</h4>
            </div>
            <hr className="hr-animation"/>
              <div className="col-md-12">
                <p className="text_container">
                Previously, I studied for 1.5 years in the
                information technology program at Oulu University of
                Applied Sciences. I have a particular interest in web
                development, and I have gained experience through
                various projects both within and outside of school.
                In my free time, I enjoy playing the guitar, gaming, going
                for walks, and spending evenings watching movies. <br />
                <br />
                I have always been quick to learn and adapt to new tasks. I work
                efficiently both as part of a team and independently. I enjoy
                challenging assignments that allow me to leverage my creativity.n
                </p>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}
