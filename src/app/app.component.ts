import { Component } from '@angular/core';
import { CatalogService } from './catalog.service';
import {ClickCounter} from './clickCounter.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CatalogService, UserService]
})
export class AppComponent {
  title = 'shop';
}
