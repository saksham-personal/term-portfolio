import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  link: string;
  introduction: string;
  points: string[];
  technologies: string[];
}

export function ProjectCard({ title, link, introduction, points, technologies }: ProjectCardProps) {
  return (
    <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader className="p-4 md:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-primary text-lg md:text-xl mb-2 sm:mb-0">{title}</CardTitle>
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors">
            View Project
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6 pt-0">
        <p className="text-sm mb-4">{introduction}</p>
        <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1 mb-4">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span key={i} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}