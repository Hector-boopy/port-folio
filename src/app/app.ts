import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Projects } from './projects/projects';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
