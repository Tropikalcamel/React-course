
export default function CoreConcept({ title, description, image }) {
    return(
    <li>
      <img src={image} alt={title} />
      <h3>{description}</h3>
      <p>{title}</p>
    </li>
    );
  }
  