import React, { useEffect, useState } from 'react';
import aldenSkywalker from '../assets/Aboutposter.jpg';
import './about.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Card from 'react-bootstrap/Card';
import skywalkerAction from '../assets/skywalker_action.jpg'
import skywalkerPose from '../assets/skywalker_pose.jpg'
import skywalkerStill from '../assets/skywalker_still.jpg'
import skywalkerWide from '../assets/skywalker_wide.jpg'
import { motion } from 'framer-motion';



function About() {
  
  const skillSet = [
    { title: 'Strength', value: 85 },
    { title: 'Intelligence', value: 95 },
    { title: 'Speed', value: 90 },
    { title: 'Fighting Skills', value: 88 },
  ]
  const galleryImages = [{ picture: skywalkerAction }, { picture: skywalkerPose }, { picture: skywalkerStill }, { picture: skywalkerWide }]

  
  return (
    <>

      {/* Hero Section */}
      <section className="hero-section position-relative">
        <img
          src={aldenSkywalker}
          alt="Alden Skywalker"
          className="hero-image"
        />
        <div className="hero-content position-absolute text-center">
          <motion.h2 className="hero-title text-warning" initial={{x:'-20%'}} whileInView={{x:'0'}} exit={{x:'20%'}} transition={{duration:1}}>Alden Skywalker</motion.h2>
          <motion.p className="hero-tagline"  initial={{y:'50%'}} whileInView={{y:'0'}} exit={{y:'-50%'}} transition={{duration:1}}>
            Rising from the Shadows to Legendary Jedi, Alden Skywalker's mastery of the Force and unyielding sense of justice make him a protector of the people.
          </motion.p>
        </div>
      </section>

     

      {/* Skills Section */}
      <section className="skills-section mt-5 container">
        <h4 className="text-warning text-center mb-5 fw-bold">Mastery Levels</h4>
        <div className="row">
          {skillSet.map((skill, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <Card className="skill-card p-4">
                <CircularProgressbar
                  value={skill.value}
                  text={`${skill.value}%`}
                  styles={buildStyles({
                    pathColor: '#FFD700',
                    textColor: '#FFD700',
                    trailColor: '#2C2C2C',
                    backgroundColor: '#101010',
                  })}
                />
                <p className="text-center mt-3 text-warning">{skill.title}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Biography Section */}
      <section className="biography-section container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <h2 className="text-warning text-center mb-4">Biography</h2>
            <p className="text-secondary mb-4 fs-5 biography-text">
              Born on a remote and humble planet, Alden Skywalker's early life was shaped by adversity and isolation. Orphaned as a child, he was raised in obscurity until he was discovered by a Jedi Master who recognized his extraordinary potential. This pivotal moment set Alden on a transformative journey from a life of hardship to becoming a revered Jedi Knight. His path to becoming a Jedi was marked by intense training and dedication. Under the guidance of the Jedi Order, Alden mastered the ways of the Force, developing skills in combat, diplomacy, and wisdom. His training was rigorous, honing his innate abilities and instilling in him a deep sense of responsibility and justice.
            </p>
            <p className="text-secondary mb-4 fs-5 biography-text">
              Alden's rise to prominence was marked by several remarkable achievements. He played a crucial role in defeating the feared Dark Lord of the Sith, a victory that turned the tide in a crucial conflict. His strategic brilliance and combat skills earned him respect and recognition throughout the galaxy. Additionally, Alden was instrumental in negotiating peace treaties and forming alliances, bringing stability to troubled regions.
            </p>
            <p className="text-secondary fs-5 biography-text">
              Despite his legendary status, Alden's goals remain firmly rooted in his commitment to justice and the well-being of others. He is dedicated to training the next generation of Jedi, imparting not only his combat skills but also the values of empathy, integrity, and selflessness. His mentorship has guided many young Jedi on their own paths to becoming defenders of peace. Alden Skywalker's impact extends beyond his heroic deeds. He is a champion of the common people, using his abilities to address grievances, resolve conflicts, and uplift those in need. His efforts to protect the innocent and restore balance to the galaxy reflect his enduring commitment to making a positive difference in the lives of others.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className=" container my-5">
        <h4 className="text-center text-warning mb-5 fw-bold">Gallery</h4>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <Card key={index} className="gallery-card ">
              <Card.Img
                variant="top"
                src={image.picture}
                className="gallery-image h-100"
                alt={`Gallery Image ${index + 1}`}
              />
            </Card>
          ))}
        </div>
      </section>

    </>
  );
}

export default About;
