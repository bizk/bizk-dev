import { Card } from "primereact/card"
import { Tag } from "primereact/tag"
import { getTechnologyInfo } from "../../utils/technologyIcons"

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
          {props.technologies.map((technology, index) => {
            const techInfo = getTechnologyInfo(technology);
            return (
              <div
                key={index}
                className="technology-chip"
                style={{ backgroundColor: techInfo.color }}
              >
                <img 
                  src={techInfo.icon} 
                  alt={`${techInfo.name} icon`}
                  className="technology-chip-icon"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a default icon or hide if fails
                    const target = e.target as HTMLImageElement;
                    // Try to use a simple fallback icon
                    const fallbackIcon = `data:image/svg+xml,${encodeURIComponent(
                      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="10"/></svg>`
                    )}`;
                    if (target.src !== fallbackIcon) {
                      target.src = fallbackIcon;
                    } else {
                      target.style.display = 'none';
                    }
                  }}
                />
                <span className="technology-chip-label">{techInfo.name}</span>
              </div>
            );
          })}
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