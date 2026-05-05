import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../models/meal';

@Component({
  selector: 'app-meal-list',
  imports: [CommonModule],
  templateUrl: './meal-list.component.html',
  styleUrl: './meal-list.component.css'
})
export class MealListComponent implements OnInit {
  meals: Meal[] = [];

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
}