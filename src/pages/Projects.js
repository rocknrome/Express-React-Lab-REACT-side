import { useLoaderData } from "react-router-dom";
import '../styles.css';

function Projects(props) {
  const projects = useLoaderData();

  return (
    <div className="container">
      <div className="columns is-multiline is-centered">
        {projects.map((project, index) => (
          <div key={index} className="column is-4">
            <div className="card">
              <div className="card-image">
              <figure className="image is-4by3" style={{ margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
  <img src={project.image} alt={project.name} style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }} />
</figure>
              </div>
              <div className="card-content">
                <div className="content has-text-centered">
                  <h1 className="is-size-4">{project.name}</h1>
                  <a href={project.git} className="button is-link">Github</a>
                  <a href={project.live} className="button is-primary">Live Site</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
