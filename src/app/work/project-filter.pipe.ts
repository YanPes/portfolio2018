import { Pipe, PipeTransform } from '@angular/core';
import { Project, ProjectType } from './projects.data';

@Pipe({
    name: 'filterProjects'
})
export class ProjectFilter implements PipeTransform {
    transform(projects: Project[], type: ProjectType) {
        if (type === ProjectType.All) {
            return projects;
        }
        return projects.filter(project => project.type === type)
    }
}
