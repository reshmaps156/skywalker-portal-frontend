import React from 'react';
import aldenSkywalker from '../assets/Aboutposter.jpg';
import './about.css'
function About() {
  return (
    <>
      <section>
        <div className="position-relative ">
          <img
            src={aldenSkywalker}
            alt="Alden Skywalker"
            className="w-100 h-100"

          />
          <div className="position-absolute" style={{ maxWidth: '800px', left: '50%', top: '20%' }}>
            <h2 className="text-warning mx-md-5">Alden Skywalker</h2>
            <p className='tagLine mx-md-5'>Rising from the Shadows to Legendary Jedi, Alden Skywalker's mastery of the Force and unyielding sense of justice make him a protector of the people.</p>
          </div>
        </div>
      </section>

      <section className='container my-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-8 col-md-10'>
          <h3 className='text-warning text-center mb-4'>Biography</h3>
          <p className='text-justify mb-4'>
            Born on a remote and humble planet, Alden Skywalker's early life was shaped by adversity and isolation. Orphaned as a child, he was raised in obscurity until he was discovered by a Jedi Master who recognized his extraordinary potential. This pivotal moment set Alden on a transformative journey from a life of hardship to becoming a revered Jedi Knight. His path to becoming a Jedi was marked by intense training and dedication. Under the guidance of the Jedi Order, Alden mastered the ways of the Force, developing skills in combat, diplomacy, and wisdom. His training was rigorous, honing his innate abilities and instilling in him a deep sense of responsibility and justice.
          </p>
          <p className='text-justify mb-4'>
            Alden's rise to prominence was marked by several remarkable achievements. He played a crucial role in defeating the feared Dark Lord of the Sith, a victory that turned the tide in a crucial conflict. His strategic brilliance and combat skills earned him respect and recognition throughout the galaxy. Additionally, Alden was instrumental in negotiating peace treaties and forming alliances, bringing stability to troubled regions.
          </p>
          <p className='text-justify'>
            Despite his legendary status, Alden's goals remain firmly rooted in his commitment to justice and the well-being of others. He is dedicated to training the next generation of Jedi, imparting not only his combat skills but also the values of empathy, integrity, and selflessness. His mentorship has guided many young Jedi on their own paths to becoming defenders of peace. Alden Skywalker's impact extends beyond his heroic deeds. He is a champion of the common people, using his abilities to address grievances, resolve conflicts, and uplift those in need. His efforts to protect the innocent and restore balance to the galaxy reflect his enduring commitment to making a positive difference in the lives of others.
          </p>
        </div>
      </div>
    </section>



    </>
  );
}

export default About;
