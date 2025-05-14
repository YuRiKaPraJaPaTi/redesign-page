import React from 'react';
import Card from './Card';
// import Title from './Title';
import { GiThink } from 'react-icons/gi';
// import { SiFuturelearn, SiHyperskill } from 'react-icons/si';
import { RiTeamFill } from 'react-icons/ri';
import './feature.css';

const Feature: React.FC = () => {
  return (
    <section className="features-section">
      <div className='heading'>
      <h1>Design, Build and Sclale Your Vision With Us</h1>
      </div>
      <div className="features-grid">
        <Card
          title="Ideate"
          des="Generate and explore creative ideas to solve a specific problem or fulfill a need."
          icon={<GiThink />}
        />
        <Card
          title="Design"
          des="Turn ideas into visual layouts and user experiences through wireframes and prototypes.

"
          icon={<RiTeamFill />}
        />
        <Card
          title="Develop"
          des="Let's brainstrome together and explore creative ideas to solve your unique challanges."
          icon={<RiTeamFill />}
        />
        <Card
          title="Launch"
          des="Let's brainstrome together and explore creative ideas to solve your unique challanges."
          icon={<RiTeamFill />}
        />
         <Card
          title="Scale"
          des="Let's brainstrome together and explore creative ideas to solve your unique challanges."
          icon={<RiTeamFill />}
        />
        
      </div>
    </section>
  );
};

export default Feature;
