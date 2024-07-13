import React from 'react';

function ProjectCard({ src, link1, h3, p }) {
  return (
    <section>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <div className='Buttons'>
        <a href={link1}><button>Github</button></a>
        <a href={link1}><button>Live</button></a>
      </div>
    </section>
  );

  
}

export default ProjectCard;
