import React from 'react';
import '../style/about.scss';
import MyImage from '../images/me2.jpg';
import Skill from './Skill';

function About() {
  return (
    <div className="about page" id="about">
        <h1 className="page-header">ABOUT</h1>
        <div className="about-container">
          <div className="left">
            <div className="info">
              <img className="my-image" src={MyImage} alt=""/>
              <h1>David Jokhadze</h1>
              <h1>35 years old from Georgia.</h1>
              <p>Worked as an IT Support Engineer for about 10 years.
                In 2015 got interested in Programming,
                started self-learning process with books and online lectures.
              </p>
              <p>In 2016, attended Coding Bootcamp "Le Wagon" (Lisbon, Portugal) and
                studied Web Development in depth.
                Shortly after graduation started a new career as a
                Software Engineer.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="skills">
              <h2>Back-end</h2>
              <hr/>
              <Skill name={'Ruby'} rating={4}/>
              <Skill name={'Ruby on Rails'} rating={4}/>
              <Skill name={'JavaScript'} rating={4} />
              <Skill name={'Node.js/Express'} rating={3} />
              <Skill name={'SQL'} rating={3}/>
              <Skill name={'NoSQL'} rating={3} />
              <h2>Front-end</h2>
              <hr/>
              <Skill name={'React'} rating={4}/>
              <Skill name={'JQuery'} rating={3}/>
              <Skill name={'HTML'} rating={4}/>
              <Skill name={'CSS/SASS'} rating={4}/>
              <Skill name={'UX Design'} rating={4}/>
              <Skill name={'Graphics Design'} rating={2}/>
              <h2>Codewars</h2>
              <a href="https://www.codewars.com/users/Dijinio" target="_blank">
                <img src="https://www.codewars.com/users/Dijinio/badges/large" alt=""/>
              </a>
            </div>
          </div>
      </div>
        </div>
  );
}

export default About;
