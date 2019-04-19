import { Component } from '@angular/core';
import { data as projectData, Project, ProjectType } from './projects.data';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass']
})
export class WorkComponent {

  public projects: Project[] = [];
  public displayed: ProjectType = ProjectType.All;

  constructor() {
    this.projects = projectData;
  }

  showAllProjects() {
    this.displayed = ProjectType.All;
  }

  showIgProjects() {
    this.displayed = ProjectType.IG
    console.log('UI / UX projects visible!');
  }

  showArtProjects() {
    this.displayed = ProjectType.Art
    console.log('3D Art projects visible!');
  }

}