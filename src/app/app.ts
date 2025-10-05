import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Projects } from './projects/projects';
import { Title } from './title/title';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Navbar } from './navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Projects, Title, About, Contact, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
