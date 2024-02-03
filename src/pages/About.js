import { useLoaderData } from "react-router-dom";

function About(props) {
  const about = useLoaderData()

  return (
    <section className="section">
      <div className="container">
        <div className="content has-text-centered">
          <h2>{about.name}</h2>
          <h3>{about.email}</h3>
          <p>{about.bio}</p>
          {about.headshot && <figure className="image is-inline-block">
            <img src={about.headshot} alt="Headshot" style={{ maxWidth: "200px" }} />
          </figure>}
        </div>
      </div>
    </section>
  );
}

export default About;
