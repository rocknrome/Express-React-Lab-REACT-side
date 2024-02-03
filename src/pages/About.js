import { useLoaderData } from "react-router-dom";

function About(props) {

  const about = useLoaderData()

  return <div>
      <h2>{about.name}</h2>
      {about.headshot && <img src={about.headshot} alt="Headshot" />}
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
    </div>
}

export default About;
