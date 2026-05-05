import { Component } from '@angular/core';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

@Component({
  selector: 'app-root',
  imports: [MealListComponent, RecipeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meal-tracker-frontend';
}