import { Chip } from "primereact/chip"
import { Card } from "primereact/card"
import { Tag } from "primereact/tag"

interface WorkExperienceProps {
  title: string;
  date: string;
  technologies: string[];
  description: string;
  points: string[];
}

export const WorkExperience = (props: WorkExperienceProps) => {
  return (
    <Card className="work-experience-card">
      <div className="work-experience-header">
        <h3 className="work-experience-title">{props.title}</h3>
        <Tag value={props.date} severity="info" className="work-experience-date" />
      </div>
      
      <p className="work-experience-description">{props.description}</p>
      
      {props.technologies.length > 0 && (
        <div className="work-experience-technologies">
          {props.technologies.map((technology, index) => (
            <Chip 
              key={index} 
              label={technology}
              className="technology-chip"
            />
          ))}
        </div>
      )}
      
      {props.points.length > 0 && (
        <div className="work-experience-points">
          <ul className="work-experience-list">
            {props.points.map((point, index) => (
              <li key={index} className="work-experience-point">
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  )
}