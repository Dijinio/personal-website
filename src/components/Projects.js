import React from 'react';
import '../style/projects.scss';
import ProjectItem from './ProjectItem';
import Scheduler from '../images/scheduler_wall.jpeg';
import Minesweeper from '../images/minesweeper.png';
import MemoryGame from '../images/memory_game.png';

function Projects() {
  return (
    <div className="projects page" id="projects">
      <h1 className="page-header">PROJECTS</h1>
      <div className="projects-container">

        <ProjectItem
          name="Minesweeper"
          image={Minesweeper}
          link="https://dijinio-mern-minesweeper.herokuapp.com/"
          git="https://github.com/Dijinio/node-react-minesweeper"
          description="Windows OS classic game Minesweeper"
          tech={["Node/Express", "ReactJS", "MongoDB"]}
          />
        <hr className="projects-hr" />
        <ProjectItem
          name="Memory Game"
          image={MemoryGame}
          link="https://master.d2izcmao5iufvj.amplifyapp.com/"
          git="https://github.com/Dijinio/memory-game"
          description="Simple Card/Image Memory Game"
          tech={["ReactJS"]}
        />
        <hr className="projects-hr" />
        <ProjectItem
          name="Scheduler"
          image={Scheduler}
          link="https://dijinio-rails-react-scheduler.herokuapp.com/"
          git="https://github.com/Dijinio/rails-react-scheduler"
          description="Scheduler web application is an improved 'Todo app' made for skill demonstration purposes"
          tech={["Ruby on Rails", "ReactJS", "Postgresql"]}
          />
          <hr className="projects-hr"/>
      </div>
    </div>
  );
}

export default Projects;
