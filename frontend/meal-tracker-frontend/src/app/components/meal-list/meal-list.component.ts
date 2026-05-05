import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../models/meal';

@Component({
  selector: 'app-meal-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './meal-list.component.html',
  styleUrl: './meal-list.component.css'
})
export class MealListComponent implements OnInit {
  meals: Meal[] = [];

  newMeal: Meal = {
    name: '',
    category: 'Breakfast',
    calories: 0,
    date: '',
    notes: '',
    plannedDay: ''
  };

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.loadMeals();
  }

  loadMeals(): void {
    this.mealService.getMeals().subscribe({
      next: (data) => {
        this.meals = data;
      },
      error: (error) => {
        console.error('Error loading meals:', error);
      }
    });
  }

  addMeal(): void {
    this.mealService.createMeal(this.newMeal).subscribe({
      next: () => {
        this.loadMeals();

        this.newMeal = {
          name: '',
          category: 'Breakfast',
          calories: 0,
          date: '',
          notes: '',
          plannedDay: ''
        };
      },
      error: (error) => {
        console.error('Error adding meal:', error);
      }
    });
  }

  deleteMeal(id: string | undefined): void {
    if (!id) {
      return;
    }

    this.mealService.deleteMeal(id).subscribe({
      next: () => {
        this.loadMeals();
      },
      error: (error) => {
        console.error('Error deleting meal:', error);
      }
    });
  }
}