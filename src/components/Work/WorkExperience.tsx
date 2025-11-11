import { Chip } from "primereact/chip"
import { Fieldset } from "primereact/fieldset"

interface WorkExperienceProps {
  title: string;
  date: string;
  technologies: string[];
  description: string;
  points: string[];
}

export const WorkExperience = (props: WorkExperienceProps) => {
  return (
    <>
      <Fieldset legend={props.title} >
        <p>{props.date}</p>
        {props.technologies.map((technology) => (
          <Chip label={technology}></Chip>
        ))}
        <p>{props.description}</p>
        {props.points.map((point) => (
          <li>{point}</li>
        ))}
      </Fieldset>
    </>
  )
}